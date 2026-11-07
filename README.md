# Peace Ayegba — Astro Personal Website

Responsive personal website configured for GitHub Pages at **https://peaceayegba.github.io**.

## Preview

Install Node.js 22.12 or later, then:

```bash
npm install
npm run dev
```

Open http://localhost:4321. Test production build with `npm run build`.

## Update the website

- `src/pages/index.astro` — homepage
- `src/pages/about.astro` — About and volunteering
- `src/pages/research.astro` — research and publications
- `src/pages/projects.astro` — project cards and external links
- `src/styles/global.css` — colours, fonts, layout
- `src/layouts/Base.astro` — navigation and contact section, shown across pages

## Research group photo

1. Upload your image, e.g. `public/images/research-group.jpg`.
2. In `src/pages/index.astro` and `src/pages/about.astro`, replace the `photo-placeholder` content with `<img src="/images/research-group.jpg" alt="Research group" />`. The existing CSS handles cropping.

## Write a post in GitHub

1. Go to `src/pages/writing` in the GitHub repository.
2. Add a `.md` file (copy the example frontmatter from `understanding-matchings.md`).
3. Write with Markdown, `$...$` / `$$...$$` math, and fenced code blocks.
4. Upload iPad images to `public/images` and use `![Description](/images/your-file.png)` in the post.
5. Commit to `main`. The GitHub Actions workflow builds and publishes automatically.

The Writing & Ideas listing and homepage excerpt update automatically from Markdown posts.

## Deploy to existing GitHub Pages repository

Copy these files into your existing `PeaceAyegba.github.io` repository, including the hidden `.github` folder. Do **not** copy `node_modules` or `dist`. Commit and push to `main`. In GitHub Settings → Pages, set the source to **GitHub Actions**.

The configured GitHub Actions workflow is in `.github/workflows/deploy.yml`.
