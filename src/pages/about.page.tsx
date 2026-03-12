export const AboutPage = (): React.ReactElement => {
  return (
    <article className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed">
        <p>
          A minimal software development blog built with Vite, React, TypeScript,
          and Tailwind CSS.
        </p>
        <p>
          Strict black and white design. No distractions. Focus on content and
          best practices.
        </p>
      </div>
    </article>
  );
}
