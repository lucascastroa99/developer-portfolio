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
    namespace: "Metadata.termsOfService",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function TermsOfServicePage() {
  const t = useTranslations("Pages.TermsOfService");

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
            {t("sections.acceptance.title")}
          </h2>
          <p className="mb-4">{t("sections.acceptance.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.description.title")}
          </h2>
          <p className="mb-4">{t("sections.description.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.intellectualProperty.title")}
          </h2>
          <p className="mb-4">{t("sections.intellectualProperty.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.userConduct.title")}
          </h2>
          <p className="mb-4">{t("sections.userConduct.content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("sections.userConduct.prohibitions.0")}</li>
            <li>{t("sections.userConduct.prohibitions.1")}</li>
            <li>{t("sections.userConduct.prohibitions.2")}</li>
            <li>{t("sections.userConduct.prohibitions.3")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.disclaimer.title")}
          </h2>
          <p className="mb-4">{t("sections.disclaimer.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.limitationLiability.title")}
          </h2>
          <p className="mb-4">{t("sections.limitationLiability.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.externalLinks.title")}
          </h2>
          <p className="mb-4">{t("sections.externalLinks.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.modifications.title")}
          </h2>
          <p className="mb-4">{t("sections.modifications.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.governingLaw.title")}
          </h2>
          <p className="mb-4">{t("sections.governingLaw.content")}</p>
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
