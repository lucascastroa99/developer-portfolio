import { TallyLink } from "@/components/TallyLink/index";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libraries/shadcn/components/card";
import { GenerateMetadataProps } from "@/types/GenerateMetadataProps";
import { Icon } from "@iconify-icon/react";
import { Briefcase, Clock, Globe, Mail, MapPin } from "lucide-react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Metadata.contactPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: "logos:github-icon",
    url: "https://github.com/lucascastroa99",
    monotone: true,
  },
  {
    name: "LinkedIn",
    icon: "logos:linkedin-icon",
    url: "https://linkedin.com/in/lucascastroa99",
  },
  {
    name: "Email",
    icon: "logos:google-gmail",
    url: "mailto:lucascastro.a99@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: "logos:whatsapp-icon",
    url: "https://wa.me/5592981638283",
  },
  {
    name: "Telegram",
    icon: "logos:telegram",
    url: "https://t.me/lucascastroa99",
  },
];

export default function ContactPage() {
  const t = useTranslations("Pages.Contact");

  return (
    <div className="relative flex flex-1 items-center justify-center px-4 py-12 md:py-6">
      <div className="container mx-auto max-w-6xl 2xl:max-w-7xl">
        <div className="space-y-10 2xl:space-y-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl 2xl:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl 2xl:text-2xl">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid gap-8 lg:gap-10 lg:grid-cols-2 2xl:gap-12">
            <Card className="border-2">
              <CardContent className="space-y-4 p-6 sm:p-8 2xl:space-y-5 2xl:p-10">
                <div className="flex items-start gap-4 2xl:gap-5">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary 2xl:h-6 2xl:w-6" />
                  <div>
                    <h3 className="font-semibold 2xl:text-lg">
                      {t("info.location")}
                    </h3>
                    <p className="text-sm text-muted-foreground 2xl:text-base">
                      Manaus, Amazonas, {t("info.locationValue")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 2xl:gap-5">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-primary 2xl:h-6 2xl:w-6" />
                  <div>
                    <h3 className="font-semibold 2xl:text-lg">
                      {t("info.availability")}
                    </h3>
                    <p className="text-sm text-muted-foreground 2xl:text-base">
                      {t("info.availabilityValue")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 2xl:gap-5">
                  <Briefcase className="mt-1 h-5 w-5 shrink-0 text-primary 2xl:h-6 2xl:w-6" />
                  <div>
                    <h3 className="font-semibold 2xl:text-lg">
                      {t("info.workPreference")}
                    </h3>
                    <p className="text-sm text-muted-foreground 2xl:text-base">
                      {t("info.workPreferenceValue")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 2xl:gap-5">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-primary 2xl:h-6 2xl:w-6" />
                  <div>
                    <h3 className="font-semibold 2xl:text-lg">Email</h3>
                    <a
                      href="mailto:lucascastro.a99@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors 2xl:text-base"
                    >
                      lucascastro.a99@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 2xl:gap-5">
                  <Globe className="mt-1 h-5 w-5 shrink-0 text-primary 2xl:h-6 2xl:w-6" />
                  <div>
                    <h3 className="font-semibold 2xl:text-lg">Phone</h3>
                    <a
                      href="tel:+5592981638283"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors 2xl:text-base"
                    >
                      +55 (92) 9 8163-8283
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="2xl:p-8">
                <CardTitle className="2xl:text-2xl">{t("social")}</CardTitle>
              </CardHeader>
              <CardContent className="2xl:p-8 2xl:pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:gap-5">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border-2 p-4 transition-all hover:border-primary hover:bg-secondary 2xl:gap-4 2xl:p-5"
                    >
                      <div
                        className={social.monotone ? "dark:invert" : ""}
                        style={{ height: "40px" }}
                      >
                        <Icon icon={social.icon} style={{ fontSize: "40px" }} />
                      </div>
                      <span className="font-medium 2xl:text-lg">
                        {social.name}
                      </span>
                    </a>
                  ))}
                  <TallyLink />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
