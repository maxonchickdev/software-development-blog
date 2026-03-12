import { useDocumentTitle } from "@/src/hooks/use-document-title";

export function AboutPage(): React.ReactElement {
  useDocumentTitle("About | Software Development Blog");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="mt-2 text-muted-foreground">
          Learn more about this blog and its author.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          Welcome to the Software Development Blog. This is a place for thoughts
          on software architecture, development practices, and the craft of
          building great software.
        </p>
        <p>
          Built with React 19, Rsbuild, Tailwind CSS, and shadcn/ui. Content is
          written in MDX with syntax highlighting powered by Shiki.
        </p>
      </div>
    </div>
  );
}
