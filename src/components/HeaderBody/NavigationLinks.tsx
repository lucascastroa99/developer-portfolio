"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVIGATION_ITEMS = [
  { href: "/", localeKey: "home" },
  { href: "/about", localeKey: "about" },
  { href: "/experience", localeKey: "experience" },
  { href: "/contact", localeKey: "contact" },
];

export default function NavigationLinks() {
  const t = useTranslations("Components.HeaderBody");
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-secondary ${
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
  );
}
