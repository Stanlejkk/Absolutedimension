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
