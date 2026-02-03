import TypeWriter from "@/components/TypeWritter/index";
import { Button } from "@/libraries/shadcn/components/button";
import { GenerateMetadataProps } from "@/types/GenerateMetadataProps";
import { ArrowRight, Mail } from "lucide-react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.homePage" });

  return {
    title: t("title") + " | Lucas Castro",
    description: t("description"),
  };
}

export default function HomePage() {
  const t = useTranslations("Pages.Home");

  return (
    <div className="relative flex flex-1 items-center justify-center px-4 py-12 md:py-6">
      <div className="container mx-auto max-w-6xl 2xl:max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:gap-12 2xl:gap-20">
          <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-2 md:gap-16 2xl:gap-24 md:items-center w-full">
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/personal-memoji.png"
                alt="Personal Memoji"
                width={300}
                height={300}
                className="rounded-full md:w-100 md:h-100 2xl:w-137.5 2xl:h-137.5"
                priority
              />
            </div>

            <div className="space-y-6 2xl:space-y-8 text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                {t("greeting")}
              </h1>

              <div className="flex flex-col gap-2 2xl:gap-3">
                <span className="text-xl text-muted-foreground sm:text-2xl lg:text-3xl 2xl:text-4xl">
                  {t("typing")}
                </span>
                <span className="text-xl font-bold text-primary sm:text-2xl lg:text-3xl 2xl:text-4xl">
                  <TypeWriter />
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 2xl:gap-8 text-center max-w-3xl 2xl:max-w-4xl">
            <p className="text-base text-muted-foreground sm:text-lg lg:text-xl 2xl:text-2xl">
              {t("presentation")}
            </p>

            <div className="flex flex-col items-center gap-4 2xl:gap-6 w-full sm:flex-row sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto 2xl:text-lg 2xl:px-8 2xl:py-6"
              >
                <Link href="/about">
                  {t("aboutMe")}
                  <ArrowRight className="ml-2 h-5 w-5 2xl:h-6 2xl:w-6" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto 2xl:text-lg 2xl:px-8 2xl:py-6 group relative transition-all duration-300 hover:text-foreground before:absolute before:inset-0 before:border-2 before:border-primary before:rounded-md before:scale-100 before:opacity-0 before:transition-all before:duration-300 hover:before:scale-105 hover:before:opacity-100"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5 2xl:h-6 2xl:w-6" />
                  {t("contactMe")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
