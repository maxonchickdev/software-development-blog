import { Route, Routes } from "react-router-dom";
import { LayoutComponent } from "./components/layout.component";
import { AboutPage } from "./pages/about.page";
import { BlogPostPage } from "./pages/blog-post.page";
import { HomePage } from "./pages/home.page";
import { NotFoundPage } from "./pages/not-found.page";

export const App = (): React.ReactElement => {
	return (
		<LayoutComponent>
			<Routes>
				<Route element={<HomePage />} path="/" />
				<Route element={<AboutPage />} path="/about" />
				<Route element={<BlogPostPage />} path="/blog/:slug" />
				<Route element={<NotFoundPage />} path="*" />
			</Routes>
		</LayoutComponent>
	);
};
