"use client";

import { Button } from "@/libraries/shadcn/components/button";
import { Spinner } from "@/libraries/shadcn/components/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/libraries/shadcn/components/tooltip";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeSelectorProps {
  onClick?: () => void;
}

export default function ThemeSelector({
  onClick,
}: Readonly<ThemeSelectorProps>) {
  const t = useTranslations("Components.HeaderBody");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Theme">
        <Spinner className="text-muted-foreground" />
      </Button>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            onClick?.();
          }}
        >
          {theme === "dark" && <Sun className="h-5 w-5" />}
          {theme === "light" && <Moon className="h-5 w-5" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{t("theme")}</TooltipContent>
    </Tooltip>
  );
}
