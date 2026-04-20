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
