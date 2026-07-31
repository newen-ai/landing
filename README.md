# Synergy AI Landing

[![Deploy to GitHub Pages](https://github.com/silkking/landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/silkking/landing/actions/workflows/deploy.yml)

Landing page built with Next.js + TypeScript + Tailwind.

## Local development

```bash
npm install
npm run dev
```

`npm run dev` uses webpack mode for stability. If you want to test Turbopack explicitly, run:

```bash
npm run dev:turbo
```

## GitHub Pages deployment (`main` branch)

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Files used for deployment

- `.github/workflows/deploy.yml`: builds and deploys `out` to GitHub Pages
- `next.config.ts`: static export mode and Pages path handling

### One-time GitHub setup

1. Go to your repository settings.
2. Open **Pages**.
3. Set **Source** to **GitHub Actions**.
4. In **Custom domain**, set `newen.solutions`.

After that, each push to `main` triggers deployment.

### DNS setup for `newen.solutions`

At your DNS provider, point the apex domain to GitHub Pages:

- `A` -> `185.199.108.153`
- `A` -> `185.199.109.153`
- `A` -> `185.199.110.153`
- `A` -> `185.199.111.153`
- optional `AAAA` -> `2606:50c0:8000::153`
- optional `AAAA` -> `2606:50c0:8001::153`
- optional `AAAA` -> `2606:50c0:8002::153`
- optional `AAAA` -> `2606:50c0:8003::153`

### Branch behavior

- Push to `main` -> deploys to GitHub Pages
- Push to any other branch -> no deployment workflow is triggered

### 1) Point domain to Hostinger hosting

In Hostinger hPanel:

1. Add/connect `newen.solutions` to the hosting plan.
2. Ensure the site root is `public_html` (or note your custom root path).

### 2) Create FTP account for the site

In Hostinger hPanel, create or find FTP credentials for this website:

- FTP host (server)
- FTP username
- FTP password
- FTP port (usually `21` for FTP/Explicit FTPS)
- Remote directory (usually `/public_html/`)

### 3) Add GitHub repository secrets

In GitHub: **Settings -> Secrets and variables -> Actions -> New repository secret**

- `HOSTINGER_FTP_SERVER`
- `HOSTINGER_FTP_USERNAME`
- `HOSTINGER_FTP_PASSWORD`
- `HOSTINGER_FTP_PORT` (optional; defaults to `21`)
- `HOSTINGER_SERVER_DIR` (optional; defaults to `/public_html/`)

### 4) Push to main

Every push to `main` will:

1. Build the Next.js static export (`out/`)
2. Upload `out/` to Hostinger

### Notes

- The app is configured as a static export (`output: "export"`), so no Node server is needed on Hostinger.
- `next.config.ts` now uses `DEPLOY_TARGET=github-pages` before applying GitHub Pages `basePath`, so Hostinger deploys are served from domain root correctly.

## Production build (static export)

```bash
npm run build
```

The static site is generated in the `out/` folder.
