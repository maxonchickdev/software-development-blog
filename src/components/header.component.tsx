import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
	{ label: "Home", path: "/" },
	{ label: "About", path: "/about" },
] as const;

export const HeaderComponent = (): React.ReactElement => {
	const location = useLocation();

	return (
		<header className="border-b border-black">
			<nav aria-label="Main navigation" className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
				<ul className="flex gap-6">
					{NAV_ITEMS.map(({ path, label }) => {
						const isActive = location.pathname === path;
						return (
							<li key={path}>
								<Link
									aria-current={isActive ? "page" : undefined}
									className={`text-sm font-medium uppercase tracking-wider transition-colors ${
										isActive ? "text-black underline underline-offset-4" : "text-black hover:underline hover:underline-offset-4"
									}`}
									to={path}
								>
									{label}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};
