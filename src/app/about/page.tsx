import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/libraries/shadcn/components/avatar";
import { Badge } from "@/libraries/shadcn/components/badge";
import { Card, CardContent } from "@/libraries/shadcn/components/card";
import { PERSONAL_QUALITIES, SKILL_CATEGORIES } from "@/constants/data";
import { GenerateMetadataProps } from "@/types/GenerateMetadataProps";
import { Icon } from "@iconify-icon/react";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.aboutPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const t = await getTranslations("Pages.About");
  
  const qualities =
    PERSONAL_QUALITIES[locale as keyof typeof PERSONAL_QUALITIES] ??
    PERSONAL_QUALITIES["en-us"];
  const isEnglish = locale === "en-us";

  return (
    <div className="container mx-auto max-w-6xl px-4 py-6 2xl:max-w-7xl">
      <div className="space-y-10 2xl:space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl 2xl:text-6xl">
            {t("title")}
          </h1>
        </div>

        <Card className="border-2 py-0">
          <CardContent className="p-6 sm:p-8 2xl:p-10">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start 2xl:gap-8">
              <Avatar className="h-32 w-32 border-4 border-primary sm:h-40 sm:w-40 2xl:h-48 2xl:w-48">
                <AvatarImage
                  src="https://github.com/lucascastroa99.png"
                  alt="Lucas Castro"
                />
                <AvatarFallback className="text-4xl font-bold 2xl:text-5xl">
                  LC
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-4 text-center sm:text-left 2xl:space-y-5">
                <div>
                  <h2 className="text-2xl font-bold sm:text-3xl 2xl:text-4xl">
                    Lucas Castro
                  </h2>
                  <p className="text-lg text-primary sm:text-xl 2xl:text-2xl">
                    {t("role")}
                  </p>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg 2xl:text-xl">
                  {t("summary")}
                </p>

                <div className="flex flex-wrap gap-2 justify-center sm:justify-start 2xl:gap-3">
                  {qualities.map((quality) => (
                    <Badge
                      key={quality}
                      className="text-sm bg-primary text-primary-foreground hover:bg-primary/90 2xl:text-base"
                    >
                      {quality}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-10 2xl:space-y-12">
          {SKILL_CATEGORIES.map((category) => (
            <section key={category.titleEN} className="space-y-5 2xl:space-y-6">
              <h3 className="text-xl font-semibold sm:text-2xl 2xl:text-3xl border-b border-border pb-2">
                {isEnglish ? category.titleEN : category.titlePT}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 2xl:gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg transition-all hover:bg-secondary group 2xl:gap-4"
                  >
                    <div className={skill.monotone ? "dark:invert" : ""}>
                      <Icon
                        icon={skill.icon}
                        style={{ fontSize: "64px" }}
                        className="transition-transform group-hover:scale-110"
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-center font-medium 2xl:text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
