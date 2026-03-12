import { createHashRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "@/src/app/layouts/root-layout";
import { AboutPage } from "@/src/app/routes/about-page";
import { HomePage } from "@/src/app/routes/home-page";
import { NotFoundPage } from "@/src/app/routes/not-found-page";
import { PostPage } from "@/src/app/routes/post-page";
import { TagPage } from "@/src/app/routes/tag-page";
import { getAllPosts } from "@/src/lib/content";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => getAllPosts(),
      },
      { path: "post/:slug", element: <PostPage /> },
      {
        path: "tags/:tag",
        element: <TagPage />,
        loader: () => getAllPosts(),
      },
      { path: "about", element: <AboutPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export function AppRouter(): React.ReactElement {
  return <RouterProvider router={router} />;
}
