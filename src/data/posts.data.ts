import type { PostType } from "@/types/post.type";

export const postsData: readonly PostType[] = [
	{
		content: `Building a blog with modern tooling requires discipline. We chose:

- **Vite** — Fast, lean build tool
- **React** — Component-based UI
- **TypeScript** — Type safety and better DX
- **Tailwind CSS** — Utility-first styling, no extra UI library

Strict black and white. No grays. No gradients. Just content.`,
		date: "2026-03-12",
		excerpt: "With Vite and Tailwind.",
		slug: "building-a-blog",
		title: "Building a Blog",
	},
	{
		content: `Welcome to the software development blog. This is a minimal, strict black and white design built with Vite, React, TypeScript, and Tailwind CSS.

No distractions. Focus on content and best practices.`,
		date: "2026-03-12",
		excerpt: "Introduction to the blog.",
		slug: "hello-world",
		title: "Hello World",
	},
	{
		content: `TypeScript's built-in utility types help you transform existing types without writing boilerplate. Here are the most useful ones.

## Pick and Omit

Extract or exclude properties from an object type:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Pick<User, "name" | "email">;

type CreateUserInput = Omit<User, "id">;
\`\`\`

## Partial and Required

Make all properties optional or required:

\`\`\`typescript
type UserUpdate = Partial<User>;

type StrictConfig = Required<Config>;
\`\`\`

## Record

Build an object type with specific keys and value type:

\`\`\`typescript
type Status = "pending" | "success" | "error";
type StatusMessages = Record<Status, string>;

const messages: StatusMessages = {
  pending: "Please wait...",
  success: "Done!",
  error: "Something went wrong.",
};
\`\`\`

Use these utilities to keep your types DRY and expressive.`,
		date: "2026-03-11",
		excerpt: "Pick, Omit, Partial, and more.",
		slug: "typescript-utility-types",
		title: "TypeScript Utility Types You Should Know",
	},
	{
		content: `Extract logic into custom hooks to keep components focused on rendering. Here's a pattern for form handling.

## Custom Hook: useFormField

\`\`\`tsx
import { useState, useCallback } from "react";

function useFormField(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onBlur = useCallback(() => setTouched(true), []);

  const reset = useCallback(() => {
    setValue(initialValue);
    setTouched(false);
  }, [initialValue]);

  return { value, touched, onChange, onBlur, reset };
}
\`\`\`

## Using the Hook

\`\`\`tsx
function LoginForm() {
  const email = useFormField("");
  const password = useFormField("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email: email.value, password: password.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email.value}
        onChange={email.onChange}
        onBlur={email.onBlur}
      />
      <input
        type="password"
        value={password.value}
        onChange={password.onChange}
        onBlur={password.onBlur}
      />
      <button type="submit">Sign in</button>
    </form>
  );
}
\`\`\`

One hook per field. Composable. Testable.`,
		date: "2026-03-10",
		excerpt: "Custom hooks and composition.",
		slug: "react-hooks-patterns",
		title: "React Hooks Patterns for Clean Components",
	},
	{
		content: `Tailwind uses a mobile-first approach. Base classes apply to all screens; prefixes apply from that breakpoint up.

## Breakpoints

| Prefix | Min Width |
|--------|-----------|
| (none) | 0px      |
| sm:    | 640px    |
| md:    | 768px    |
| lg:    | 1024px   |
| xl:    | 1280px   |
| 2xl:   | 1536px   |

## Example: Responsive Layout

\`\`\`html
<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col gap-4 md:flex-row md:gap-8">
  <aside class="w-full md:w-64">Sidebar</aside>
  <main class="flex-1">Content</main>
</div>
\`\`\`

## Typography Scaling

\`\`\`html
<h1 class="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>
\`\`\`

## Container with Max Width

\`\`\`html
<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
  <p>Centered content that breathes on larger screens.</p>
</div>
\`\`\`

No custom CSS. No media queries. Just utility classes.`,
		date: "2026-03-09",
		excerpt: "Mobile-first with Tailwind breakpoints.",
		slug: "tailwind-responsive-design",
		title: "Tailwind Responsive Design Without Media Queries",
	},
	{
		content: `Vite's \`import.meta.glob\` lets you import multiple modules matching a pattern. Useful for loading all blog posts, routes, or components.

## Basic Usage

\`\`\`typescript
const modules = import.meta.glob("./posts/*.md");

const modules = import.meta.glob("./posts/*.md", { eager: false });
\`\`\`

## Loading All Markdown Files

\`\`\`typescript
const postModules = import.meta.glob<string>("/content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const posts = Object.entries(postModules).map(([path, content]) => {
  const slug = path.split("/").pop()?.replace(".md", "") ?? "";
  return { slug, content };
});
\`\`\`

## With Query for Raw Content

\`\`\`typescript
const rawFiles = import.meta.glob("/content/**/*.md", {
  query: "?raw",
  import: "default",
});
\`\`\`

The pattern is resolved at build time. Only matching files are included in the bundle.`,
		date: "2026-03-08",
		excerpt: "Load modules by pattern at build time.",
		slug: "vite-import-meta-glob",
		title: "Vite import.meta.glob for Dynamic Imports",
	},
] as const;

export function getPostBySlug(slug: string): PostType | undefined {
	return postsData.find((post) => post.slug === slug);
}
