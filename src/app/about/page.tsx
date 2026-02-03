import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/libraries/shadcn/components/avatar";
import { Badge } from "@/libraries/shadcn/components/badge";
import { Card, CardContent } from "@/libraries/shadcn/components/card";
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

const PERSONAL_QUALITIES = {
  "en-us": [
    "Analytical",
    "Self-Directed",
    "Collaborative",
    "Proactive",
    "Organized",
    "Flexible",
  ],
  "pt-br": [
    "Analítico",
    "Autodidata",
    "Colaborativo",
    "Proativo",
    "Organizado",
    "Flexível",
  ],
};

const SKILL_CATEGORIES = [
  {
    titleEN: "Programming Languages",
    titlePT: "Linguagens de Programação",
    skills: [
      { name: "JavaScript", icon: "devicon:javascript" },
      { name: "Python", icon: "devicon:python" },
      { name: "C#", icon: "devicon:csharp" },
    ],
  },
  {
    titleEN: "Libraries & Frameworks",
    titlePT: "Bibliotecas & Frameworks",
    skills: [
      { name: "React.js", icon: "devicon:react" },
      { name: "Angular", icon: "devicon:angular" },
      { name: "Vue.js", icon: "devicon:vuejs" },
      { name: "Next.js", icon: "devicon:nextjs" },
      { name: "Nuxt.js", icon: "devicon:nuxtjs" },
      { name: "TypeScript", icon: "devicon:typescript" },
      { name: "jQuery", icon: "devicon:jquery" },
      { name: "Styled Components", icon: "devicon:styledcomponents" },
      { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
      { name: "Bootstrap", icon: "devicon:bootstrap" },
      { name: "Express", icon: "devicon:express", monotone: true },
      { name: "Prisma", icon: "devicon:prisma" },
      { name: "Socket.io", icon: "devicon:socketio", monotone: true },
      { name: "Nest.js", icon: "devicon:nestjs" },
      { name: "Django", icon: "logos:django-icon" },
      { name: "Flask", icon: "devicon:flask", monotone: true },
      { name: "Entity Framework", icon: "devicon:dotnetcore" },
      { name: "AutoMapper", icon: "devicon:csharp" },
      { name: "Moq", icon: "devicon:csharp" },
      { name: "xUnit", icon: "devicon:dotnetcore" },
    ],
  },
  {
    titleEN: "Databases",
    titlePT: "Bancos de Dados",
    skills: [
      { name: "PostgreSQL", icon: "devicon:postgresql" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "Microsoft SQL Server", icon: "devicon:microsoftsqlserver" },
      { name: "MongoDB", icon: "devicon:mongodb" },
    ],
  },
  {
    titleEN: "Development Tools",
    titlePT: "Ferramentas de Desenvolvimento",
    skills: [
      { name: "Figma", icon: "devicon:figma" },
      { name: "Canva", icon: "devicon:canva" },
      { name: "Postman", icon: "devicon:postman" },
      { name: "DevTools", icon: "devicon:chrome" },
    ],
  },
  {
    titleEN: "Testing & Automation",
    titlePT: "Testes & Automação",
    skills: [
      { name: "Jest", icon: "logos:jest" },
      { name: "Selenium", icon: "devicon:selenium" },
      { name: "Scrapy", icon: "devicon:python" },
    ],
  },
  {
    titleEN: "Infrastructure & DevOps",
    titlePT: "Infraestrutura & DevOps",
    skills: [
      { name: "GitHub Actions", icon: "devicon:githubactions" },
      { name: "Azure DevOps", icon: "devicon:azure" },
      { name: "Docker", icon: "devicon:docker" },
      { name: "Ansible", icon: "devicon:ansible" },
      { name: "NGINX", icon: "logos:nginx" },
      { name: "RabbitMQ", icon: "devicon:rabbitmq" },
    ],
  },
];

export default async function AboutPage() {
  const locale = await getLocale();
  const t = await getTranslations("Pages.About");
  console.log(locale);
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
