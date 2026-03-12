# Software Development Blog

Strict black and white blog built with Vite, React, TypeScript, and Tailwind CSS.

## Stack

- **Vite** — Build tool
- **React 18** — UI
- **TypeScript** — Strict mode, full type safety
- **Tailwind CSS** — Utility-first styling (no other UI library)

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Type-check + production build
npm run preview  # Preview production build
npm run lint     # TypeScript check
```

## Creating a Post

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter: `slug`, `title`, `excerpt`, `date`
3. Write content in Markdown (code blocks supported)
4. Run `npm run generate-posts` (or `npm run dev` / `npm run build`)

See [content/posts/README.md](content/posts/README.md) for the full guide.

## Structure

```
content/posts/   # Markdown source files
src/
├── components/  # Layout, Header, Footer, MarkdownRenderer
├── data/        # Generated posts (from content/posts/*.md)
├── pages/       # Route pages
├── types/       # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css    # Tailwind directives
```
