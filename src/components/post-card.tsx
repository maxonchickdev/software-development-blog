import { Link } from "react-router-dom";

import { Badge } from "@/src/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import type { Post } from "@/src/types/post";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps): React.ReactElement {
  return (
    <Link to={`/post/${post.slug}`}>
      <Card className="transition-colors hover:bg-muted/50">
        <CardHeader>
          <CardTitle className="line-clamp-1">{post.title}</CardTitle>
          <CardDescription>
            {post.date} · {post.readingTimeMinutes} min read
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {post.description}
          </p>
        </CardContent>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" asChild>
                <Link to={`/tags/${encodeURIComponent(tag)}`} onClick={(e) => { e.stopPropagation(); }}>
                  {tag}
                </Link>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
