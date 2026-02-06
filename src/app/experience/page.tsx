import { Badge } from "@/libraries/shadcn/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/libraries/shadcn/components/card";
import { EXPERIENCES } from "@/constants/data";
import { GenerateMetadataProps } from "@/types/GenerateMetadataProps";
import { Briefcase } from "lucide-react";
import { differenceInMonths, format, parseISO } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";
import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Metadata.experiencePage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ExperiencePage() {
  const t = useTranslations("Pages.Experience");
  const locale = useLocale();
  const isEnglish = locale === "en-us";

  const locales: Record<string, typeof enUS> = { "en-us": enUS, "pt-br": ptBR };

  const formatDate = (date: string) => {
    if (date === "present") {
      return t("present");
    }

    try {
      return format(parseISO(date), "MMM yyyy", { locale: locales[locale] });
    } catch {
      return date;
    }
  };

  const getDuration = (start: string, end: string) => {
    try {
      const startDate = parseISO(start);
      const endDate = end === "present" ? new Date() : parseISO(end);

      const totalMonths = differenceInMonths(endDate, startDate) + 1;
      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      // Map next-intl locales to Intl.RelativeTimeFormat locales
      const rtfLocale = locale === "en-us" ? "en-US" : "pt-BR";
      const rtf = new Intl.RelativeTimeFormat(rtfLocale, {
        numeric: "auto",
        style: "long",
      });

      const parts: string[] = [];
      if (years > 0) {
        // Format with relative time formatter and remove the "in" prefix
        const yearStr = rtf.format(years, "year").replace(/^(in\s+|.*?\s+)?/i, "").trim();
        parts.push(yearStr);
      }
      if (months > 0) {
        // Format with relative time formatter and remove the "in" prefix
        const monthStr = rtf.format(months, "month").replace(/^(in\s+|.*?\s+)?/i, "").trim();
        parts.push(monthStr);
      }

      return parts.join(", ");
    } catch {
      return "";
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-6 2xl:max-w-7xl">
      <div className="space-y-10 2xl:space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl 2xl:text-6xl">
            {t("title")}
          </h1>
        </div>

        <div className="relative space-y-8 2xl:space-y-10">
          <div className="absolute left-1 top-0 h-full w-0.5 bg-border sm:left-6 2xl:left-7" />

          {EXPERIENCES.map((exp) => (
            <div
              key={`${exp.company}-${exp.startDate}`}
              className="relative pl-6 sm:pl-16 2xl:pl-20"
            >
              <div className="absolute left-0 top-6 h-3 w-3 rounded-full border-2 border-primary bg-background sm:left-4.5 2xl:left-5.5 2xl:h-4 2xl:w-4" />

              <Card className="border-2 transition-all hover:border-primary py-0">
                <CardHeader className="p-4 pb-0! sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between 2xl:gap-3">
                    <div className="space-y-1 2xl:space-y-1.5">
                      <h3 className="text-xl font-bold sm:text-2xl 2xl:text-3xl">
                        {isEnglish ? exp.positionEN : exp.positionPT}
                      </h3>
                      <p className="text-base font-medium text-primary sm:text-lg 2xl:text-xl">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground 2xl:text-base">
                        {isEnglish ? exp.locationEN : exp.locationPT}
                      </p>
                    </div>

                    <div className="flex shrink-0 flex-col items-start gap-1 text-sm text-muted-foreground sm:items-end 2xl:text-base">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 2xl:h-5 2xl:w-5" />
                        <span>
                          {formatDate(exp.startDate) +
                            " - " +
                            formatDate(exp.endDate)}
                        </span>
                      </div>
                      <span className="text-xs 2xl:text-sm">
                        {getDuration(exp.startDate, exp.endDate)}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-2 p-4 pt-0! sm:p-6 2xl:space-y-3">
                  <ul className="space-y-2 text-sm text-muted-foreground sm:text-base 2xl:text-lg">
                    {(isEnglish ? exp.descriptionEN : exp.descriptionPT).map(
                      (item, i) => (
                        <li
                          key={`${exp.company}-desc-${i}`}
                          className="flex gap-2"
                        >
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="flex flex-wrap gap-2 2xl:gap-3">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 2xl:text-base"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
