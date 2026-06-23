import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "../theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      size="icon-lg"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />

      <Moon className="absolute h-5 w-5 scale-0 -rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
