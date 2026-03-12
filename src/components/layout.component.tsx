import type { ReactNode } from "react";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";

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
}
