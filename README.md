# Absolut Dimension

A React + TypeScript + Vite site for the SM.ART wardrobe concept, styled with Tailwind CSS and animated with Framer Motion.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (Node 20 LTS recommended)
- npm 9+ (ships with Node)

## Launch locally

```bash
# 1. Install dependencies
npm install

# 2. Start the Vite dev server (hot reload on http://localhost:5173)
npm run dev

# 3. Type-check and create an optimized production build in ./dist
npm run build

# 4. Preview the production build locally (http://localhost:4173)
npm run preview
```

## Where to host

Because `npm run build` outputs a static `dist/` directory, any static host works. Recommended options:

| Host | How to deploy | Notes |
| --- | --- | --- |
| **Vercel** | Import the repo on [vercel.com/new](https://vercel.com/new). Framework preset: **Vite**. Build: `npm run build`. Output: `dist`. | Zero-config, free tier, automatic preview deploys per PR. |
| **Netlify** | Connect the repo at [app.netlify.com](https://app.netlify.com/). Build: `npm run build`. Publish directory: `dist`. | Free tier, branch previews, built-in forms/redirects. |
| **Cloudflare Pages** | Create a project at [pages.cloudflare.com](https://pages.cloudflare.com/). Framework preset: **Vite**. Build: `npm run build`. Output: `dist`. | Generous free tier and global edge CDN. |
| **GitHub Pages** | Build locally or in CI, then publish `dist/`. Add `base: "/<repo-name>/"` to `vite.config.ts` when serving from a project page. | Good for a no-cost static site tied to the repo. |
| **Firebase Hosting** | `npm i -g firebase-tools && firebase init hosting` (public dir: `dist`, SPA: yes), then `npm run build && firebase deploy`. | Useful if you want Google Cloud integration later. |

### Recommendation

Use **Vercel** or **Cloudflare Pages** for the fastest path: connect this GitHub repo, accept the detected Vite defaults (build `npm run build`, output `dist`), and every push to `main` will deploy automatically.

## Supabase backend

Products, collections, blog posts and user accounts can be backed by
[Supabase](https://supabase.com/). When `VITE_SUPABASE_URL` and
`VITE_SUPABASE_ANON_KEY` are defined at build time, the app reads its catalog
from the `products`, `collections`, and `blog_posts` tables, and auth is
delegated to Supabase Auth. Without those env vars the site still renders the
bundled seed catalog and keeps accounts in `localStorage`.

### One-time setup

1. Create a new project at [app.supabase.com](https://app.supabase.com/).
2. In the SQL editor, run [`supabase/schema.sql`](supabase/schema.sql) to create
   tables, RLS policies and the `auth.users → public.profiles` trigger.
3. Regenerate and apply the seed:

   ```bash
   npx tsx supabase/seed.ts > supabase/seed.sql
   # then paste into the SQL editor, or pipe via supabase CLI
   ```

4. Copy `.env.example` to `.env.local` and fill in:

   ```bash
   VITE_SUPABASE_URL=https://<project>.supabase.co
   VITE_SUPABASE_ANON_KEY=<anon-public-key>
   VITE_ADMIN_INVITE_CODE=<your-atelier-code>
   ```

5. Create the first admin by registering with the invite code. Subsequent
   admins can be added the same way.

## Shop, payments and newsletter

Once Supabase is provisioned the site can operate as a fully functional shop
backed by Stripe and Resend. The serverless endpoints live under `/api/` and
are picked up automatically by Vercel.

### Environment variables

Fill these in the Vercel project settings (for production) and `.env.local`
(for local `vercel dev`). Only the `VITE_*` vars are bundled into the client.

| Variable | Purpose |
| --- | --- |
| `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` | Client Supabase read-only access |
| `VITE_ADMIN_INVITE_CODE` | Secret required to self-provision an admin account |
| `VITE_STRIPE_CHECKOUT_URL` | Defaults to `/api/checkout` — override only when testing |
| `VITE_SITE_URL` | Canonical origin used for absolute URLs (checkout success, emails) |
| `STRIPE_SECRET_KEY` | Server-only. `sk_test_…` in test mode |
| `STRIPE_WEBHOOK_SECRET` | Server-only. Copied from `stripe listen` or the Stripe dashboard |
| `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Server-only. Used by the webhook + newsletter endpoints |
| `RESEND_API_KEY`, `RESEND_FROM` | Server-only. Resend API key and the verified sender |

### Stripe setup

1. Create a product-less Stripe account (we build Checkout line items ad-hoc
   from the live `products` table — so Stripe doesn't need to know about them).
2. Copy the secret key to `STRIPE_SECRET_KEY`.
3. Locally: `stripe listen --forward-to localhost:3000/api/stripe-webhook` and
   paste the `whsec_…` it prints into `STRIPE_WEBHOOK_SECRET`.
4. In production: add an endpoint for `checkout.session.completed` and
   `charge.refunded` pointing at `https://<domain>/api/stripe-webhook`.

### Resend setup

1. Sign up at [resend.com](https://resend.com/) and verify your sending domain.
2. Create an API key and set it as `RESEND_API_KEY`.
3. Set `RESEND_FROM="Brand <hello@yourdomain.com>"` — must match the verified
   domain, or emails will be rejected.

### Admin panel

Sign in with an admin account and open `/admin`. The panel includes:

- **Products / Collections** — CRUD with image upload to the `product-images`
  Supabase Storage bucket. Changes appear on the shop instantly.
- **Orders** — list of paid orders from the Stripe webhook. Admins can change
  status (`paid → fulfilled → shipped`) and add tracking numbers.
- **Subscribers** — everyone on the newsletter list, with CSV export.
- **Campaigns** — compose bilingual letters and send them to the confirmed
  subscribers via Resend (with a one-click unsubscribe link attached).
