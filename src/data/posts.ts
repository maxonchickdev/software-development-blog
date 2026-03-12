import type { Post } from "@/types/post";

export const POSTS: readonly Post[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt: "Introduction to the blog.",
    date: "2026-03-12",
    content: `
Welcome to the software development blog. This is a minimal, strict black and white design built with Vite, React, TypeScript, and Tailwind CSS.

No distractions. Focus on content and best practices.
    `.trim(),
  },
  {
    slug: "building-a-blog",
    title: "Building a Blog",
    excerpt: "With Vite and Tailwind.",
    date: "2026-03-12",
    content: `
Building a blog with modern tooling requires discipline. We chose:

- **Vite** — Fast, lean build tool
- **React** — Component-based UI
- **TypeScript** — Type safety and better DX
- **Tailwind CSS** — Utility-first styling, no extra UI library

Strict black and white. No grays. No gradients. Just content.
    `.trim(),
  },
] as const;

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}
