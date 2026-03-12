import React from "react";
import ReactDOM from "react-dom/client";

import { AppRouter } from "@/src/app/router";
import { ThemeProvider } from "@/src/app/providers/theme-provider";

import "@/src/styles/globals.css";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
