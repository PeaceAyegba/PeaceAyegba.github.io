# Peace Ayegba — Astro website

A responsive, static portfolio and technical writing site, configured for **https://peaceayegba.github.io**. Hosting on GitHub Pages is free.

## Preview on your computer

Requires Node.js 20.19+ or 22.12+ (or a newer compatible version).

```bash
npm install
npm run dev
```

Open the address shown in the terminal, usually http://localhost:4321.

## Deploy to GitHub Pages

1. Back up the contents of your existing **peaceayegba.github.io** repository before replacing anything.
2. Copy **all files in this folder** (including the hidden `.github` folder) into the root of that GitHub repository. Do not upload the ZIP itself as a single file.
3. Open GitHub repository **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Commit the files on `main`; the workflow in `.github/workflows/deploy.yml` builds and publishes your website.
5. Your public address remains https://peaceayegba.github.io/.

## Publish a blog post (from GitHub's website)

1. In your repository, open `src/pages/writing/`.
2. Click **Add file → Create new file** (or the `+` menu) and name the new file `your-article.md`.
3. Copy this template, replace the title and text, and click **Commit changes**:

```markdown
---
layout: ../../layouts/Post.astro
title: My New Article
description: A short description of the article.
category: Graph Algorithms
date: 2026-11-06
---

# Your article heading

Here is an inline equation $G=(V,E)$.

$$
\min_{x \in X} f(x)
$$

![My graph sketch](/images/my-graph.png)
```

4. To use a diagram, export the drawing from your iPad to PNG and upload it into `public/images` through GitHub's **Add file → Upload files**. Then reference the image as shown above.
5. Every new `.md` article in `src/pages/writing` is automatically included in the Writing & Ideas listing when GitHub rebuilds the site.

The example post is **not an actual published article**; delete or replace it when ready. Mathematical notation is typeset using KaTeX, via Astro Markdown plugins. No CMS or subscription is required.

## Contact

Email: poayegba@gmail.com
