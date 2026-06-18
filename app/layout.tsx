import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/app/shared/lib/utils";
import { ThemeProvider } from "./shared/components/theme-provider";
import { ScrollIndicator } from "./shared/components/scroll-indicator";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
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
        anton.variable,
      )}
    >
      <body className="h-dvh w-dvw flex flex-col overflow-hidden min-h-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollIndicator />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
