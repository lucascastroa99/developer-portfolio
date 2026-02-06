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

export default function ThemeSelector() {
  const t = useTranslations("Components.HeaderBody");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label={t("theme")}>
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
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
          }}
          aria-label={t("theme")}
        >
          {resolvedTheme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{t("theme")}</TooltipContent>
    </Tooltip>
  );
}
