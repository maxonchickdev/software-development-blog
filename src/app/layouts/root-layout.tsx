import { Outlet } from "react-router-dom";

import { Footer } from "@/src/components/footer";
import { Header } from "@/src/components/header";

export function RootLayout(): React.ReactElement {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
