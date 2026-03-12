# Creating a New Post

Each blog post is a **Markdown (.md) file** in this directory. To add a new post:

## 1. Create a new file

Create a new `.md` file in `content/posts/`. Use a descriptive filename (e.g. `my-post-title.md`). The filename does not affect the URL—the `slug` in frontmatter does.

## 2. Add frontmatter

At the top of the file, add YAML frontmatter between `---` delimiters. All four fields are required:

```yaml
---
slug: my-post-slug
title: My Post Title
excerpt: Short description shown on the home page.
date: 2026-03-12
---
```

| Field   | Description                                      |
|---------|--------------------------------------------------|
| `slug`  | URL path (e.g. `/blog/my-post-slug`). Use hyphens. |
| `title` | Post title displayed in the header.             |
| `excerpt` | Brief summary for the home page list.         |
| `date`  | Publication date in `YYYY-MM-DD` format.        |

## 3. Write the content

Below the frontmatter, write your post in Markdown. Supported features:

- **Headers**: `#`, `##`, `###`
- **Lists**: `-` or `1.` for ordered
- **Bold**: `**text**`
- **Links**: `[text](url)`
- **Code blocks** with syntax highlighting:

````markdown
```typescript
const greeting = "Hello, world!";
console.log(greeting);
```
````

Supported languages: `typescript`, `tsx`, `javascript`, `jsx`, `html`, `css`, `bash`, `json`, `markdown`, and more.

- **Inline code**: `` `code` ``

## 4. Regenerate posts

Run:

```bash
npm run generate-posts
```

This updates `src/data/posts.data.ts` from all `.md` files. The `dev` and `build` scripts run this automatically.

## Example

See `hello-world.md` or `typescript-utility-types.md` for complete examples with code blocks.
