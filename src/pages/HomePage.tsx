import { Link } from "react-router-dom";
import { POSTS } from "@/data/posts";

export function HomePage(): React.ReactElement {
  return (
    <article className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Software Development Blog
      </h1>
      <p className="mt-4 text-lg leading-relaxed">
        Welcome. Writing about software, design, and best practices.
      </p>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Recent Posts</h2>
        <ul className="mt-4 space-y-4">
          {POSTS.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="block border-b border-black pb-2 hover:underline"
              >
                <span className="font-medium">{post.title}</span>
                <span className="ml-2 text-sm">— {post.excerpt}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
