---
slug: vite-import-meta-glob
title: Vite import.meta.glob for Dynamic Imports
excerpt: Load modules by pattern at build time.
date: 2026-03-08
---

Vite's `import.meta.glob` lets you import multiple modules matching a pattern. Useful for loading all blog posts, routes, or components.

## Basic Usage

```typescript
const modules = import.meta.glob("./posts/*.md");

const modules = import.meta.glob("./posts/*.md", { eager: false });
```

## Loading All Markdown Files

```typescript
const postModules = import.meta.glob<string>("/content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const posts = Object.entries(postModules).map(([path, content]) => {
  const slug = path.split("/").pop()?.replace(".md", "") ?? "";
  return { slug, content };
});
```

## With Query for Raw Content

```typescript
const rawFiles = import.meta.glob("/content/**/*.md", {
  query: "?raw",
  import: "default",
});
```

The pattern is resolved at build time. Only matching files are included in the bundle.
