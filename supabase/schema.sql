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

-- ─── Shop: orders ──────────────────────────────────────────────────────────
-- Case-insensitive email comparison for subscribers + guest checkout.
create extension if not exists citext;

do $$ begin
  create type order_status as enum
    ('pending', 'paid', 'fulfilled', 'shipped', 'refunded', 'canceled');
exception when duplicate_object then null;
end $$;

create table if not exists public.orders (
  id                      uuid primary key default gen_random_uuid(),
  stripe_session_id       text not null unique,
  stripe_payment_intent   text,
  user_id                 uuid references auth.users(id) on delete set null,
  email                   citext not null,
  amount                  integer not null check (amount >= 0),
  currency                text not null default 'pln',
  status                  order_status not null default 'pending',
  shipping                jsonb,
  locale                  text not null default 'pl',
  tracking_number         text,
  notes                   text,
  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now()
);

create index if not exists orders_user_id_idx on public.orders (user_id);
create index if not exists orders_email_idx on public.orders (email);
create index if not exists orders_status_idx on public.orders (status);
create index if not exists orders_created_at_idx on public.orders (created_at desc);

create table if not exists public.order_items (
  id           uuid primary key default gen_random_uuid(),
  order_id     uuid not null references public.orders(id) on delete cascade,
  product_id   text references public.products(id) on delete set null,
  name         text not null,
  size         text not null default '',
  quantity     integer not null check (quantity > 0),
  unit_amount  integer not null check (unit_amount >= 0),
  image        text not null default ''
);

create index if not exists order_items_order_id_idx on public.order_items (order_id);

alter table public.orders      enable row level security;
alter table public.order_items enable row level security;

drop policy if exists "Own or admin read orders" on public.orders;
create policy "Own or admin read orders" on public.orders
  for select using (user_id = auth.uid() or public.is_admin());

drop policy if exists "Admins update orders" on public.orders;
create policy "Admins update orders" on public.orders
  for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Admins delete orders" on public.orders;
create policy "Admins delete orders" on public.orders
  for delete using (public.is_admin());

-- Inserts happen via the service-role key in the Stripe webhook, which bypasses
-- RLS, so no insert policy is needed here.

drop policy if exists "Read order items via order" on public.order_items;
create policy "Read order items via order" on public.order_items
  for select using (
    exists (
      select 1 from public.orders o
      where o.id = order_items.order_id
        and (o.user_id = auth.uid() or public.is_admin())
    )
  );

drop policy if exists "Admins mutate order items" on public.order_items;
create policy "Admins mutate order items" on public.order_items
  for all using (public.is_admin()) with check (public.is_admin());

-- Keep updated_at fresh whenever admins change an order.
create or replace function public.touch_orders_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists orders_touch_updated_at on public.orders;
create trigger orders_touch_updated_at
  before update on public.orders
  for each row execute function public.touch_orders_updated_at();

-- ─── Newsletter: subscribers ───────────────────────────────────────────────

do $$ begin
  create type subscriber_status as enum ('pending', 'confirmed', 'unsubscribed');
exception when duplicate_object then null;
end $$;

create table if not exists public.newsletter_subscribers (
  id                  uuid primary key default gen_random_uuid(),
  email               citext not null unique,
  locale              text not null default 'pl',
  status              subscriber_status not null default 'pending',
  confirm_token       uuid,
  unsubscribe_token   uuid not null default gen_random_uuid(),
  confirmed_at        timestamptz,
  created_at          timestamptz not null default now()
);

create index if not exists newsletter_subscribers_status_idx
  on public.newsletter_subscribers (status);
create index if not exists newsletter_subscribers_confirm_token_idx
  on public.newsletter_subscribers (confirm_token);
create index if not exists newsletter_subscribers_unsubscribe_token_idx
  on public.newsletter_subscribers (unsubscribe_token);

alter table public.newsletter_subscribers enable row level security;

-- Anyone can subscribe (the form is public). The row lands in 'pending' and
-- is only promoted to 'confirmed' by the server (service-role) once the
-- double-opt-in link is clicked.
drop policy if exists "Anyone can subscribe" on public.newsletter_subscribers;
create policy "Anyone can subscribe" on public.newsletter_subscribers
  for insert with check (status = 'pending');

drop policy if exists "Admins read subscribers" on public.newsletter_subscribers;
create policy "Admins read subscribers" on public.newsletter_subscribers
  for select using (public.is_admin());

drop policy if exists "Admins mutate subscribers" on public.newsletter_subscribers;
create policy "Admins mutate subscribers" on public.newsletter_subscribers
  for all using (public.is_admin()) with check (public.is_admin());

-- ─── Newsletter: campaigns ─────────────────────────────────────────────────

do $$ begin
  create type campaign_status as enum ('draft', 'sending', 'sent');
exception when duplicate_object then null;
end $$;

create table if not exists public.newsletter_campaigns (
  id              uuid primary key default gen_random_uuid(),
  subject_en      text not null default '',
  subject_pl      text not null default '',
  body_en         text not null default '',
  body_pl         text not null default '',
  status          campaign_status not null default 'draft',
  sent_at         timestamptz,
  sent_to_count   integer not null default 0,
  created_by      uuid references auth.users(id) on delete set null,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index if not exists newsletter_campaigns_created_at_idx
  on public.newsletter_campaigns (created_at desc);

alter table public.newsletter_campaigns enable row level security;

drop policy if exists "Admins read campaigns" on public.newsletter_campaigns;
create policy "Admins read campaigns" on public.newsletter_campaigns
  for select using (public.is_admin());

drop policy if exists "Admins mutate campaigns" on public.newsletter_campaigns;
create policy "Admins mutate campaigns" on public.newsletter_campaigns
  for all using (public.is_admin()) with check (public.is_admin());

create or replace function public.touch_campaigns_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists campaigns_touch_updated_at on public.newsletter_campaigns;
create trigger campaigns_touch_updated_at
  before update on public.newsletter_campaigns
  for each row execute function public.touch_campaigns_updated_at();

-- ─── Storage: product images ───────────────────────────────────────────────
-- Public-read bucket so admin-uploaded product images are served directly by
-- the catalog; admin-only write so random visitors cannot upload blobs.
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

drop policy if exists "Public read product images" on storage.objects;
create policy "Public read product images" on storage.objects
  for select using (bucket_id = 'product-images');

drop policy if exists "Admins write product images" on storage.objects;
create policy "Admins write product images" on storage.objects
  for insert with check (bucket_id = 'product-images' and public.is_admin());

drop policy if exists "Admins update product images" on storage.objects;
create policy "Admins update product images" on storage.objects
  for update using (bucket_id = 'product-images' and public.is_admin())
  with check (bucket_id = 'product-images' and public.is_admin());

drop policy if exists "Admins delete product images" on storage.objects;
create policy "Admins delete product images" on storage.objects
  for delete using (bucket_id = 'product-images' and public.is_admin());
