# Arjun Sharma — Portfolio

Responsive portfolio built with React, TypeScript, and Vite.

## Local development

Use Node.js 22.12+ and npm. Run `npm install`, then `npm run dev`.
On Windows PowerShell with script restrictions, use `npm.cmd` instead of `npm`.

`npm run build` checks TypeScript and builds static files into `dist/`.
`npm run preview` previews the production build.

## GitHub Pages

In repository Settings → Pages, select **GitHub Actions** as the source. Push to `main` or manually run the deployment workflow to publish the build to https://arjunsharma-py.github.io/Portfolio/.

The Vite base is `/Portfolio/`. Change it in `vite.config.ts` if you rename the repository or use a custom domain.

## Updating content

Edit projects in `src/projects.ts`, and biography, skills, and contact in `src/main.tsx`. Styles live in `src/style.css`. Existing images are imported from `images/`; legacy `css/`, `js/`, and `fonts/` are retained but not loaded.

Content comes from the original portfolio. Confirm current biography and project URLs before publishing. The Amazon UI study has no live link because the original linked to Amazon itself. Contact uses email and clipboard actions, without a backend. Google Fonts have system fallbacks.

Additional projects were verified against public GitHub repositories: PixelForge (README), TownVibe (README), ecommerce-admin (README), and house-hotel-client (source tree). Project data lives in `src/projects.ts`. New project covers are typographic artwork, not product screenshots. Starter-only repositories are not presented as completed projects. Repository homepage URLs are included where available; they do not guarantee backend availability.
