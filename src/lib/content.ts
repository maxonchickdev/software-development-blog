import type { Post, PostFrontmatter } from "@/src/types/post";

type MDXModule = {
  default: React.ComponentType;
  frontmatter?: PostFrontmatter;
};

const postContext = import.meta.webpackContext<MDXModule>("../../content/posts", {
  recursive: false,
  regExp: /\.mdx$/,
  mode: "lazy",
});

function slugFromPath(path: string): string {
  const match = path.match(/\/([^/]+)\.mdx$/);
  return match ? match[1] ?? "" : "";
}

function calculateReadingTime(wordCount: number): number {
  return Math.ceil(wordCount / 200);
}

export async function getAllPosts(): Promise<Post[]> {
  const posts: Post[] = [];
  const keys = postContext.keys();

  for (const path of keys) {
    const slug = slugFromPath(path);
    const mod = await postContext(path);
    const frontmatter = mod.frontmatter;

    if (!frontmatter || !frontmatter.published) continue;

    const wordCount = frontmatter.description.split(/\s+/).length + 500;
    posts.push({
      ...frontmatter,
      slug,
      readingTimeMinutes: calculateReadingTime(wordCount),
    });
  }

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export async function getPostBySlug(slug: string): Promise<{
  Component: React.ComponentType;
  frontmatter: PostFrontmatter;
} | null> {
  const targetKey = `./${slug}.mdx`;
  const keys = postContext.keys();
  if (!keys.includes(targetKey)) return null;

  const mod = await postContext(targetKey);
  const frontmatter = mod.frontmatter;
  if (!frontmatter) return null;

  return {
    Component: mod.default,
    frontmatter,
  };
}

export function getAllTags(posts: Post[]): string[] {
  const tagSet = new Set<string>();
  for (const post of posts) {
    for (const tag of post.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}
