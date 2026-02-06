import { Button } from "@/libraries/shadcn/components/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("Components.NotFound");

  return (
    <main 
      id="main-content"
      className="relative flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center p-6 text-center"
    >
      <h1 className="text-7xl font-bold mb-2" aria-label={t("pageNotFound")}>
        404
      </h1>
      <p className="text-muted-foreground mb-6">
        {t("description")}
      </p>
      <Link href="/" passHref>
        <Button variant="default" size="lg" aria-label={t("backToHome")}>
          {t("backToHome")}
        </Button>
      </Link>
    </main>
  );
}
