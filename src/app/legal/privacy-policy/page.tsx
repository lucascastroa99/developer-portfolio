import { Button } from "@/libraries/shadcn/components/button";
import { GenerateMetadataProps } from "@/types/GenerateMetadataProps";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Metadata.privacyPolicy",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PrivacyPolicyPage() {
  const t = useTranslations("Pages.PrivacyPolicy");

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <Button asChild variant="ghost" className="mb-8 -ml-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("backToHome")}
        </Link>
      </Button>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t("title")}</h1>

        <p className="text-muted-foreground mb-8">
          {t("lastUpdated")}: {t("date")}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.introduction.title")}
          </h2>
          <p className="mb-4">{t("sections.introduction.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.informationCollection.title")}
          </h2>
          <p className="mb-4">{t("sections.informationCollection.content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("sections.informationCollection.items.0")}</li>
            <li>{t("sections.informationCollection.items.1")}</li>
            <li>{t("sections.informationCollection.items.2")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.cookies.title")}
          </h2>
          <p className="mb-4">{t("sections.cookies.content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>{t("sections.cookies.types.essential.title")}:</strong>{" "}
              {t("sections.cookies.types.essential.description")}
            </li>
            <li>
              <strong>{t("sections.cookies.types.analytics.title")}:</strong>{" "}
              {t("sections.cookies.types.analytics.description")}
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.googleAnalytics.title")}
          </h2>
          <p className="mb-4">{t("sections.googleAnalytics.content")}</p>
          <p className="mb-4">
            {t("sections.googleAnalytics.optOut")}{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80"
            >
              {t("sections.googleAnalytics.optOutLink")}
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.dataUse.title")}
          </h2>
          <p className="mb-4">{t("sections.dataUse.content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("sections.dataUse.purposes.0")}</li>
            <li>{t("sections.dataUse.purposes.1")}</li>
            <li>{t("sections.dataUse.purposes.2")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.dataSharing.title")}
          </h2>
          <p className="mb-4">{t("sections.dataSharing.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.dataSecurity.title")}
          </h2>
          <p className="mb-4">{t("sections.dataSecurity.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.yourRights.title")}
          </h2>
          <p className="mb-4">{t("sections.yourRights.content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("sections.yourRights.rights.0")}</li>
            <li>{t("sections.yourRights.rights.1")}</li>
            <li>{t("sections.yourRights.rights.2")}</li>
            <li>{t("sections.yourRights.rights.3")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.thirdPartyLinks.title")}
          </h2>
          <p className="mb-4">{t("sections.thirdPartyLinks.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.changes.title")}
          </h2>
          <p className="mb-4">{t("sections.changes.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.contact.title")}
          </h2>
          <p className="mb-4">
            {t("sections.contact.content")}{" "}
            <a
              href="mailto:lucascastro.a99@gmail.com"
              className="text-primary underline hover:text-primary/80"
            >
              lucascastro.a99@gmail.com
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}
