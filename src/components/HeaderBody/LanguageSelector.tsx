"use client";

import { Button } from "@/libraries/shadcn/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/libraries/shadcn/components/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/libraries/shadcn/components/tooltip";
import { LANGUAGES_OPTIONS } from "@/constants/navigation";
import { Icon } from "@iconify-icon/react";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

export default function LanguageSelector() {
  const t = useTranslations("Components.HeaderBody");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000; Secure; SameSite=Strict`;
      globalThis.location.reload();
    });
  };

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" disabled={isPending} aria-label={t("language")}>
              <Languages className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>{t("language")}</TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end">
        {Object.entries(LANGUAGES_OPTIONS).map(([code, lang]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code)}
            disabled={locale === code}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Icon icon={lang.flag} className="h-3.5 w-3.5" />
            {lang.name}
            {locale === code && " ✓"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
