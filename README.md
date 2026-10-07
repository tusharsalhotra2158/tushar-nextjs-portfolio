# Tushar Salhotra — Next.js Portfolio

**🔗 Live portfolio: https://tusharsalhotra.github.io/tushar-nextjs-portfolio/**

A responsive, SEO-ready portfolio built from the supplied resume.

- **Portfolio:** https://tusharsalhotra.github.io/tushar-nextjs-portfolio/
- **LinkedIn:** https://www.linkedin.com/in/tushar-salhotra-b59382194/
- **GitHub:** https://github.com/TusharSalhotra

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
npm start
```

## Personalize before deployment

1. Put your PDF resume at `public/tushar-salhotra-resume.pdf`.
2. Add real project screenshots under `public/projects/`.
3. Update metadata in `app/layout.tsx` if you want a custom domain/description.

## Deploy

This site is statically exported (`output: "export"` in `next.config.mjs`) and auto-deployed to
**GitHub Pages** via `.github/workflows/deploy.yml` on every push to `main`.

- Live URL: https://tusharsalhotra.github.io/tushar-nextjs-portfolio/
- To deploy elsewhere (Vercel, Netlify, any static host), just run `npm run build` — the
  static site is generated in `out/`.
