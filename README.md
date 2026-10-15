# amysuperchinski.com

My portfolio, rebuilt from scratch with [Astro](https://astro.build).

## First-time setup

Open the Terminal app, then run these one at a time:

```bash
cd ~/new-portfolio
npm install        # installs Astro and the fonts (1–2 minutes)
npm run images     # copies my images and CV from the current site
npm run dev        # starts the preview
```

Open http://localhost:4321 in your browser. Leave the Terminal window open while previewing;
press `Ctrl + C` to stop.

## Editing content

| What | Where |
|---|---|
| Hero, about, services, work experience, links | `src/data/site.ts` |
| Case studies | `src/content/work/*.mdx` |
| Colors, fonts, spacing | `src/styles/tokens.css` |
| Images | `public/images/` (case study covers in `public/images/work/`) |
| CV | `public/cv/Amanda_Superchinski_CV.pdf` |

To find every bit of content still missing, search the project for `<Placeholder`.

### Adding a case study

Copy an existing file in `src/content/work/`, rename it (the file name becomes the URL,
e.g. `new-project.mdx` → `/work/new-project/`), update the frontmatter and write the content.
Set `draft: true` to hide it while you work on it.

## Publishing

1. Create a repository on GitHub and push this folder.
2. Import the repository on vercel.com (or netlify.com). The defaults for Astro work as-is.
3. Check the preview URL, then point amysuperchinski.com to it in your domain settings.
