import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Barlow_Semi_Condensed,
  Geist,
  Geist_Mono,
  Inter,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/app/shared/lib/utils";
import { ThemeProvider } from "./shared/components/theme-provider";
import { ScrollBar } from "./shared/components/scroll-bar";
import ScrollTop from "./shared/components/scroll-top";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow-condensed",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adekemi's Portfolio",
  description: "Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        barlowSemiCondensed.variable,
        barlowCondensed.variable,
      )}
    >
      <body
        className="h-dvh w-dvw flex flex-col overflow-hidden min-h-0 relative"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollBar />
          <ScrollTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
