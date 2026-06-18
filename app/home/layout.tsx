"use client";

import { useTheme } from "next-themes";
import Header from "../shared/components/header";
import Silk from "../shared/components/Silk";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0">
        <Silk
          speed={6}
          scale={1}
          color={isDark ? "#274c77" : "#22577a"}
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="relative z-10 flex h-full flex-col p-4 md:p-10 gap-2 md:gap-5">
        <Header />
        <div className="flex flex-1 flex-col bg-secondary/70 rounded-lg min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
}
