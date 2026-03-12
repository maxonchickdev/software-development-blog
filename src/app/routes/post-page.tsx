import * as React from "react";
import { useParams } from "react-router-dom";

import { PostHeader } from "@/src/components/post-header";
import { useDocumentTitle } from "@/src/hooks/use-document-title";
import { getPostBySlug } from "@/src/lib/content";

export function PostPage(): React.ReactElement {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = React.useState<{
    Component: React.ComponentType;
    frontmatter: import("@/src/types/post").PostFrontmatter;
  } | null>(null);
  const [error, setError] = React.useState<Error | null>(null);

  const pageTitle = post
    ? `${post.frontmatter.title} | Software Development Blog`
    : error
      ? "Error | Software Development Blog"
      : "Loading | Software Development Blog";
  useDocumentTitle(pageTitle);

  React.useEffect(() => {
    if (!slug) return;
    getPostBySlug(slug)
      .then((result) => { setPost(result ?? null); })
      .catch((err: unknown) => { setError(err instanceof Error ? err : new Error(String(err))); });
  }, [slug]);

  if (error) {
    return (
      <div className="py-12 text-center">
        <p className="text-destructive">Failed to load post: {error.message}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  const { Component, frontmatter } = post;
  const wordCount = frontmatter.description.split(/\s+/).length + 500;
  const readingTimeMinutes = Math.ceil(wordCount / 200);

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <PostHeader
        title={frontmatter.title}
        date={frontmatter.date}
        tags={frontmatter.tags}
        readingTimeMinutes={readingTimeMinutes}
      />
      <div className="mt-8">
        <Component />
      </div>
    </article>
  );
}
