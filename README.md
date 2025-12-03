# Next.js Pages Router + Tailwind Blog (Starter)

This is a starter project implementing your spec:
- Next.js (Pages Router)
- Tailwind CSS
- `getStaticProps` + `getStaticPaths` for static article pages
- Client-side comments fetched from `/api/comments`
- Articles list page and dynamic article pages
- Tailwind-based responsive layout

## Setup

1. Create Next.js app if you don't have one, or copy these files into your project root.
2. Install dependencies:

```bash
npm install next react react-dom tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Add Tailwind directives to `styles/globals.css` (already included here).
4. Run the dev server:

```bash
npm run dev
```

## Notes

- Images are placed into `public/images` in this zip (simple placeholders).
- Comments are returned by `/api/comments?slug=...` which reads `data/articles.json`.
- New comments are appended client-side and not persisted to disk.
