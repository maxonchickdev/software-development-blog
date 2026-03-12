import { Link } from "react-router-dom";

import { Badge } from "@/src/components/ui/badge";

type PostHeaderProps = {
  title: string;
  date: string;
  tags: string[];
  readingTimeMinutes: number;
};

export function PostHeader({
  title,
  date,
  tags,
  readingTimeMinutes,
}: PostHeaderProps): React.ReactElement {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <time dateTime={date}>{formattedDate}</time>
        <span>·</span>
        <span>{readingTimeMinutes} min read</span>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" asChild>
              <Link to={`/tags/${encodeURIComponent(tag)}`}>{tag}</Link>
            </Badge>
          ))}
        </div>
      )}
    </header>
  );
}
