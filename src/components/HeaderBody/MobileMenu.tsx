"use client";

import { Button } from "@/libraries/shadcn/components/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/libraries/shadcn/components/sheet";
import { LANGUAGES_ARRAY, NAV_ITEMS } from "@/constants/navigation";
import { Icon } from "@iconify-icon/react";
import { Menu, Moon, Sun } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useTransition } from "react";

export default function MobileMenu() {
  const t = useTranslations("Components.HeaderBody");
  const pathname = usePathname();
  const locale = useLocale();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000; Secure; SameSite=Strict`;
      globalThis.location.reload();
    });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          aria-label={open ? t("closeMenu") : t("openMenu")}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-75 sm:w-100 flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl">{t("menuTitle")}</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-4 mt-8 flex-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors hover:bg-secondary ${
                  isActive
                    ? "text-primary bg-secondary"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {t(item.localeKey)}
              </Link>
            );
          })}
        </nav>

        <div className="space-y-4 pt-4 px-3 pb-3 border-t border-border">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground px-2">
              {t("language")}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGES_ARRAY.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  disabled={locale === lang.code || isPending}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-md border-2 font-medium transition-all ${
                    locale === lang.code
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary hover:bg-secondary"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <Icon icon={lang.flag} className="h-5 w-5" />
                  <span className="text-sm">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground px-2">
              {t("theme")}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setTheme("light")}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-md border-2 font-medium transition-all ${
                  resolvedTheme === "light"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary hover:bg-secondary"
                }`}
                aria-label={t("lightTheme")}
              >
                <Sun className="h-5 w-5" />
                <span className="text-sm">{t("light")}</span>
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-md border-2 font-medium transition-all ${
                  resolvedTheme === "dark"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary hover:bg-secondary"
                }`}
                aria-label={t("darkTheme")}
              >
                <Moon className="h-5 w-5" />
                <span className="text-sm">{t("dark")}</span>
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
