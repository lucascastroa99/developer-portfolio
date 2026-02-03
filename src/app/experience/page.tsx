import { Badge } from "@/libraries/shadcn/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/libraries/shadcn/components/card";
import { GenerateMetadataProps } from "@/types/GenerateMetadataProps";
import { Briefcase } from "lucide-react";
import { DateTime } from "luxon";
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

const EXPERIENCES = [
  {
    company: "Marttech - Desenvolvimento de Software",
    positionEN: "Mid-level Front-end Developer",
    positionPT: "Desenvolvedor Front-end Pleno",
    locationEN: "Toledo, Paraná, Brazil",
    locationPT: "Toledo, Paraná, Brasil",
    startDate: "2024-07",
    endDate: "2025-08",
    descriptionEN: [
      "Gathered technical requirements from clients and documented system impacts.",
      "Prioritized tasks and organized sprints in Azure DevOps.",
      "Implemented user interfaces in React.js following usability guidelines.",
      "Developed reusable components with Material UI.",
      "Optimized MapBox polygon and layer implementations, reducing load time by 80% and memory usage from 6GB to 2GB.",
      "Refactored parts of the application architecture, addressing performance and usability issues.",
    ],
    descriptionPT: [
      "Levantei requisitos técnicos junto ao cliente e documentei os impactos no sistema.",
      "Priorizei demandas e organizei sprints no Azure DevOps.",
      "Implementei interfaces em React.js seguindo diretrizes de usabilidade.",
      "Desenvolvi componentes reutilizáveis com Material UI.",
      "Otimizei a implementação de polígonos e camadas no MapBox, reduzindo o tempo de carregamento em 80% e o uso de memória de 6GB para 2GB.",
      "Refatorei partes da arquitetura da aplicação, corrigindo problemas de desempenho e usabilidade.",
    ],
    technologies: [
      "React.js",
      "Material UI",
      "MapBox",
      "Azure DevOps",
      "TypeScript",
    ],
  },
  {
    company: "Ibrowse Consultoria e Informática",
    positionEN: "Mid-level Development Analyst",
    positionPT: "Analista de Desenvolvimento Pleno",
    locationEN: "Porto Alegre, Rio Grande do Sul, Brazil",
    locationPT: "Porto Alegre, Rio Grande do Sul, Brasil",
    startDate: "2023-08",
    endDate: "2024-01",
    descriptionEN: [
      "Supported internal and external teams with technical demands.",
      "Developed and fixed features in Angular applications.",
      "Defined architecture and design patterns for the application and new modules.",
      "Configured CI/CD pipelines and managed GitLab repositories.",
      "Created unit tests using Karma with 77% overall code coverage.",
      "Reviewed code and tracked deliveries in ClickUp, ensuring compliance with internal standards.",
    ],
    descriptionPT: [
      "Apoiei equipes internas e externas no atendimento de demandas técnicas.",
      "Desenvolvi e corrigi funcionalidades em aplicações Angular.",
      "Defini arquitetura e padrões de design para a aplicação e novos módulos.",
      "Configurei pipelines de CI/CD e administrei repositórios no GitLab.",
      "Criei testes unitários usando Karma com 77% de cobertura global de código.",
      "Revisei código e acompanhei entregas no ClickUp, garantindo conformidade com os padrões internos.",
    ],
    technologies: [
      "Angular",
      "GitLab",
      "CI/CD",
      "Karma",
      "ClickUp",
      "TypeScript",
    ],
  },
  {
    company: "INOVA - Polo de Inovação IFAM",
    positionEN: "Angular Front-end Web Developer",
    positionPT: "Desenvolvedor Web Front-end Angular",
    locationEN: "Manaus, Amazonas, Brazil",
    locationPT: "Manaus, Amazonas, Brasil",
    startDate: "2023-03",
    endDate: "2023-07",
    descriptionEN: [
      "Refactored outdated Angular pages and components.",
      "Created new screens and workflows to expand the application.",
      "Fixed critical bugs reported by end users.",
      "Mentored three students on technical activities, supervising deliveries and professional development.",
    ],
    descriptionPT: [
      "Refatorei páginas e componentes Angular desatualizados.",
      "Criei novas telas e fluxos para ampliar a aplicação.",
      "Corrigi bugs críticos reportados pelos usuários finais.",
      "Orientei 3 alunos em atividades técnicas, supervisionando entregas e capacitação profissional.",
    ],
    technologies: ["Angular", "TypeScript", "Angular Material"],
  },
  {
    company: "ClearSale",
    positionEN: "Information Technology Analyst",
    positionPT: "Analista de Tecnologia da Informação",
    locationEN: "São Paulo, São Paulo, Brazil",
    locationPT: "São Paulo, São Paulo, Brasil",
    startDate: "2022-01",
    endDate: "2022-12",
    descriptionEN: [
      "Created interfaces and components in Vue.js.",
      "Maintained and enhanced features in C# and jQuery.",
      "Modeled and managed data in SQL Server.",
      "Documented application workflows for development teams.",
      "Analyzed production errors and reported moderate failures.",
      "Developed unit tests to ensure code quality.",
    ],
    descriptionPT: [
      "Criei interfaces e componentes em Vue.js.",
      "Mantive e evoluí funcionalidades em C# e jQuery.",
      "Modelei e gerenciei dados no SQL Server.",
      "Documentei fluxos da aplicação para equipes de desenvolvimento.",
      "Analisei erros em produção e reportei falhas moderadas.",
      "Desenvolvi testes unitários para garantir qualidade do código.",
    ],
    technologies: ["Vue.js", "C#", "jQuery", "SQL Server"],
  },
  {
    company: "INOVA - Polo de Inovação IFAM",
    positionEN: "Angular Front-end Web Developer",
    positionPT: "Desenvolvedor Web Front-end Angular",
    locationEN: "Manaus, Amazonas, Brazil",
    locationPT: "Manaus, Amazonas, Brasil",
    startDate: "2021-09",
    endDate: "2022-03",
    descriptionEN: [
      "Developed screens and components in Angular.",
      "Improved application design and layout with Angular Material.",
      "Analyzed visual errors and corrected UI/UX inconsistencies.",
      "Collaborated with back-end team to align integrations.",
    ],
    descriptionPT: [
      "Desenvolvi telas e componentes em Angular.",
      "Melhorei design e layout da aplicação com Angular Material.",
      "Analisei erros visuais e corrigi inconsistências de UI/UX.",
      "Colaborei com equipe de back-end para alinhar integrações.",
    ],
    technologies: ["Angular", "Angular Material", "TypeScript"],
  },
  {
    company: "BeeApp",
    positionEN: "Vue Front-end Web Developer",
    positionPT: "Desenvolvedor Web Front-end Vue",
    locationEN: "Primavera do Leste, Mato Grosso, Brazil",
    locationPT: "Primavera do Leste, Mato Grosso, Brasil",
    startDate: "2021-10",
    endDate: "2021-12",
    descriptionEN: [
      "Created modular Vue.js components using Vuetify.",
      "Adapted pages for mobile devices, ensuring responsiveness.",
      "Migrated legacy PHP systems to Vue.js.",
      "Developed SSR with Nuxt, increasing Lighthouse SEO score from 65 to 80.",
      "Modeled front-end architecture for a new project.",
      "Configured UI libraries to standardize the application.",
    ],
    descriptionPT: [
      "Criei componentes Vue.js modulares usando Vuetify.",
      "Adaptei páginas para dispositivos mobile, garantindo responsividade.",
      "Migrei sistemas legados de PHP para Vue.js.",
      "Desenvolvi SSR com Nuxt, aumentando nota de SEO no Lighthouse de 65 para 80.",
      "Modelei a arquitetura de front-end para o novo projeto.",
      "Configurei bibliotecas de UI para padronizar a aplicação.",
    ],
    technologies: ["Vue.js", "Vuetify", "Nuxt.js", "PHP"],
  },
];

export default function ExperiencePage() {
  const t = useTranslations("Pages.Experience");
  const locale = useLocale();
  const isEnglish = locale === "en-us";

  const formatDate = (date: string) => {
    if (date === "present") {
      return t("present");
    }

    return DateTime.fromISO(date).setLocale(locale).toFormat("MMM yyyy");
  };

  const getDuration = (start: string, end: string) => {
    const startDate = DateTime.fromISO(start);
    const endDate = end === "present" ? DateTime.now() : DateTime.fromISO(end);

    return endDate
      .diff(startDate, ["years", "months"])
      .plus({ months: 1 })
      .rescale()
      .reconfigure({ locale })
      .toHuman({ unitDisplay: "long" });
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
