import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LEGAL_PAGES = ["/legal/terms-of-service", "/legal/privacy-policy"];

export default function Footer() {
  const t = useTranslations("Components.Footer");
  const pathname = usePathname();
  const isLegalPage = pathname && LEGAL_PAGES.some((page) => pathname.startsWith(page));

  if (isLegalPage) {
    return null;
  }

  return (
    <footer className="w-full border-t border-border/40 bg-background py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>{t("madeWith")}</span>
            <Link
              href="https://github.com/lucascastroa99"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              {t("author")}
            </Link>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <Link
              href="/legal/terms-of-service"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("termsOfService")}
            </Link>
            <Link
              href="/legal/privacy-policy"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("privacyPolicy")}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
