import { Routes, Route } from "react-router-dom";
import { LayoutComponent } from "./components/layout.component";
import { HomePage } from "./pages/home.page";
import { BlogPostPage } from "./pages/blog-post.page";
import { NotFoundPage } from "./pages/not-found.page";
import { AboutPage } from "./pages/about.page";

export const App = (): React.ReactElement => {
  return (
    <LayoutComponent>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LayoutComponent>
  );
}
