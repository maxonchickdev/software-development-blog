import { Link } from "react-router-dom";

import { Button } from "@/src/components/ui/button";
import { useDocumentTitle } from "@/src/hooks/use-document-title";

export function NotFoundPage(): React.ReactElement {
  useDocumentTitle("404 | Software Development Blog");
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
      <p className="text-xl text-muted-foreground">Page not found</p>
      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}
