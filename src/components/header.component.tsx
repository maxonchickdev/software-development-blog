import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
] as const;

export const HeaderComponent = (): React.ReactElement => {
  const location = useLocation();

  return (
    <header className="border-b border-black">
      <nav
        className="mx-auto max-w-3xl px-4 py-4 sm:px-6"
        aria-label="Main navigation"
      >
        <ul className="flex gap-6">
          {NAV_ITEMS.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-black underline underline-offset-4"
                      : "text-black hover:underline hover:underline-offset-4"
                  }`}
                  aria-current={isActive ? "page" : undefined}
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
}
