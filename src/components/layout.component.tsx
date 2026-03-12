import type { ReactNode } from "react";
import { FooterComponent } from "./footer.component";
import { HeaderComponent } from "./header.component";

interface LayoutProps {
	readonly children: ReactNode;
}

export const LayoutComponent = ({ children }: LayoutProps): React.ReactElement => {
	return (
		<div className="min-h-screen flex flex-col">
			<HeaderComponent />
			<main className="flex-1">{children}</main>
			<FooterComponent />
		</div>
	);
};
