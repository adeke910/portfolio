import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./fonts.css";
import "./globals.css";
import App from "./app";
import { ThemeProvider } from "@/shared/components/theme-provider";
import ScrollTop from "@/shared/components/scroll-top";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import ScrollBar from "./shared/components/scroll-bar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider storageKey="vite-ui-theme" defaultTheme="system">
      <ScrollBar />
      <ScrollTop />
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>,
);
