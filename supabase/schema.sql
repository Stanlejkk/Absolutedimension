-- Absolut Dimension — Supabase schema
--
-- Run this file once against a fresh Supabase project (SQL Editor or
-- `supabase db push`). It provisions all tables, row-level security policies,
-- and the trigger that mirrors auth.users → public.profiles so the shopfront
-- has a queryable account directory.
--
-- Tables
--   collections : marketing metadata for each city-themed capsule
--   products    : the catalog; prices stored in PLN grosze (1/100 PLN)
--   blog_posts  : Journal entries; `body` is a JSON array of block objects
--   profiles    : public mirror of auth.users with display name + role

-- ─── Enum-like CHECK constraints ────────────────────────────────────────────

do $$ begin
  create type user_role as enum ('client', 'admin');
exception when duplicate_object then null;
end $$;

-- ─── Collections ────────────────────────────────────────────────────────────

create table if not exists public.collections (
  id              text primary key,
  name            text not null,
  slug            text not null unique,
  image           text not null,
  description_en  text not null,
  description_pl  text not null,
  created_at      timestamptz not null default now()
);

-- ─── Products ──────────────────────────────────────────────────────────────

create table if not exists public.products (
  id              text primary key,
  name            text not null,
  price           integer not null check (price >= 0),
  category        text not null,
  collection      text not null references public.collections(slug) on update cascade,
  image           text not null,
  description_en  text not null,
  description_pl  text not null,
  sizes           text[] not null default '{}',
  featured        boolean not null default false,
  new_arrival     boolean not null default false,
  created_at      timestamptz not null default now()
);

create index if not exists products_collection_idx on public.products (collection);
create index if not exists products_category_idx on public.products (category);
create index if not exists products_featured_idx on public.products (featured) where featured;
create index if not exists products_new_arrival_idx on public.products (new_arrival) where new_arrival;

-- ─── Blog posts ────────────────────────────────────────────────────────────

create table if not exists public.blog_posts (
  id          text primary key,
  slug        text not null unique,
  title_en    text not null,
  title_pl    text not null,
  excerpt_en  text not null,
  excerpt_pl  text not null,
  image       text not null,
  date        date not null,
  author      text not null,
  body        jsonb not null,
  created_at  timestamptz not null default now()
);

create index if not exists blog_posts_date_idx on public.blog_posts (date desc);

-- ─── Profiles (user directory) ─────────────────────────────────────────────

create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  name        text not null,
  email       text not null,
  role        user_role not null default 'client',
  created_at  timestamptz not null default now()
);

create index if not exists profiles_email_idx on public.profiles (email);

-- Auto-provision a profile row whenever a new auth user is created.
-- The client passes `name` and `role` via options.data during sign-up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  claimed_role user_role;
begin
  claimed_role := coalesce(
    (new.raw_user_meta_data ->> 'role')::user_role,
    'client'
  );

  insert into public.profiles (id, name, email, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1)),
    new.email,
    claimed_role
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ─── Row-level security ────────────────────────────────────────────────────

alter table public.collections enable row level security;
alter table public.products    enable row level security;
alter table public.blog_posts  enable row level security;
alter table public.profiles    enable row level security;

-- Public read access for catalog data.
drop policy if exists "Public read collections" on public.collections;
create policy "Public read collections" on public.collections
  for select using (true);

drop policy if exists "Public read products" on public.products;
create policy "Public read products" on public.products
  for select using (true);

drop policy if exists "Public read blog" on public.blog_posts;
create policy "Public read blog" on public.blog_posts
  for select using (true);

-- Only admins can mutate the catalog. The check runs against profiles.role so
-- flipping a user to admin immediately gives them write access.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

drop policy if exists "Admins write collections" on public.collections;
create policy "Admins write collections" on public.collections
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Admins write products" on public.products;
create policy "Admins write products" on public.products
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Admins write blog" on public.blog_posts;
create policy "Admins write blog" on public.blog_posts
  for all using (public.is_admin()) with check (public.is_admin());

-- Profiles: users see their own row; admins see everyone.
drop policy if exists "Read own profile" on public.profiles;
create policy "Read own profile" on public.profiles
  for select using (id = auth.uid() or public.is_admin());

drop policy if exists "Update own profile" on public.profiles;
create policy "Update own profile" on public.profiles
  for update using (id = auth.uid() or public.is_admin())
  with check (id = auth.uid() or public.is_admin());

drop policy if exists "Admin delete profile" on public.profiles;
create policy "Admin delete profile" on public.profiles
  for delete using (public.is_admin());
