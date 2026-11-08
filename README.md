# PhD Materials Archive

Public, read-only archive of PhD application research materials (U.S. programs by state, funding/fee notes, past Sweden/EU cover letters).

**Not** the private tracker app in `../tracker/`.

## Privacy

Excluded forever from this site and repo:

- `Personal/`
- `LoR/`
- Passport, visa, ID, and recommendation letter files

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

Regenerate JSON indexes after changing `public/materials`:

```bash
node scripts/generate-data.mjs
```

## Stack

Vite + React + TypeScript, react-router, react-markdown.

## Live

- Local: `npm run preview` ? http://127.0.0.1:4173/
- GitHub Pages (after Actions deploy): https://injoker645.github.io/phd-materials-archive/
