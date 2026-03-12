---
slug: tailwind-responsive-design
title: Tailwind Responsive Design Without Media Queries
excerpt: Mobile-first with Tailwind breakpoints.
date: 2026-03-09
---

Tailwind uses a mobile-first approach. Base classes apply to all screens; prefixes apply from that breakpoint up.

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

```html
<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col gap-4 md:flex-row md:gap-8">
  <aside class="w-full md:w-64">Sidebar</aside>
  <main class="flex-1">Content</main>
</div>
```

## Typography Scaling

```html
<h1 class="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>
```

## Container with Max Width

```html
<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
  <p>Centered content that breathes on larger screens.</p>
</div>
```

No custom CSS. No media queries. Just utility classes.
