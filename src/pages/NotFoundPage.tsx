import { Link } from "react-router-dom";

export function NotFoundPage(): React.ReactElement {
  return (
    <article className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        404 — Not Found
      </h1>
      <p className="mt-4 text-lg leading-relaxed">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block border-b border-black font-medium hover:underline"
      >
        Return home
      </Link>
    </article>
  );
}
