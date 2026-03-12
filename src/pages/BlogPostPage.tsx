import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "@/data/posts";

export function BlogPostPage(): React.ReactElement {
  const { slug } = useParams<{ slug: string }>();
  const post = slug != null ? getPostBySlug(slug) : undefined;

  if (post == null) {
    return (
      <article className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-8">
        <h1 className="text-3xl font-bold tracking-tight">Post not found</h1>
        <Link
          to="/"
          className="mt-4 inline-block border-b border-black hover:underline"
        >
          Return home
        </Link>
      </article>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-8">
      <Link
        to="/"
        className="text-sm font-medium uppercase tracking-wider hover:underline"
      >
        ← Back
      </Link>
      <header className="mt-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <time
          dateTime={post.date}
          className="mt-2 block text-sm uppercase tracking-wider"
        >
          {post.date}
        </time>
      </header>
      <div className="mt-6 space-y-4 whitespace-pre-wrap text-lg leading-relaxed">
        {post.content}
      </div>
    </article>
  );
}
