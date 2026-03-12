export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
  coverImage?: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  readingTimeMinutes: number;
};
