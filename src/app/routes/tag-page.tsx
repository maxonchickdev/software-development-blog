import { useLoaderData, useParams } from "react-router-dom";

import { PostCard } from "@/src/components/post-card";
import { useDocumentTitle } from "@/src/hooks/use-document-title";
import type { Post } from "@/src/types/post";

export function TagPage(): React.ReactElement {
  const allPosts = useLoaderData() as Post[];
  const { tag } = useParams<{ tag: string }>();
  const decodedTag = tag ? decodeURIComponent(tag) : "";
  const posts = allPosts.filter((post) => post.tags.includes(decodedTag));

  useDocumentTitle(
    decodedTag ? `Tag: ${decodedTag} | Software Development Blog` : "Software Development Blog",
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Posts tagged &quot;{decodedTag}&quot;
        </h1>
        <p className="mt-2 text-muted-foreground">
          {posts.length} post{posts.length === 1 ? "" : "s"} found
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
