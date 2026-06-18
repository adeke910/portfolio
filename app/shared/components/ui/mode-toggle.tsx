"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Button onClick={() => setTheme(isDark ? "light" : "dark")} size="icon-lg">
      <Sun
        className={`h-5 w-5 transition-all ${
          isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"
        }`}
      />

      <Moon
        className={`absolute h-5 w-5 transition-all ${
          isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        }`}
      />
    </Button>
  );
}
