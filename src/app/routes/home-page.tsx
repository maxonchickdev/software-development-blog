import * as React from "react";
import { useLoaderData } from "react-router-dom";

import { PostCard } from "@/src/components/post-card";
import { useDocumentTitle } from "@/src/hooks/use-document-title";
import type { Post } from "@/src/types/post";

const POSTS_PER_PAGE = 10;

export function HomePage(): React.ReactElement {
  useDocumentTitle("Software Development Blog");
  const allPosts = useLoaderData() as Post[];
  const [page, setPage] = React.useState(1);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const posts = allPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
        <p className="mt-2 text-muted-foreground">
          Thoughts on software development, architecture, and more.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="flex items-center justify-between border-t pt-6">
          <button
            type="button"
            onClick={() => { setPage((p) => Math.max(1, p - 1)); }}
            disabled={page <= 1}
            className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); }}
            disabled={page >= totalPages}
            className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </nav>
      )}
    </div>
  );
}
