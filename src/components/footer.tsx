export function Footer(): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-8">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {year} Software Development Blog. Built with React & Rsbuild.
        </p>
      </div>
    </footer>
  );
}
