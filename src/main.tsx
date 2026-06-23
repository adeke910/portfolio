import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/shared/components/theme-provider";
import { ScrollBar } from "@/shared/components/scroll-bar";
import ScrollTop from "@/shared/components/scroll-top";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import "./fonts.css";
import "./globals.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ScrollBar />
      <ScrollTop />
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>,
);
