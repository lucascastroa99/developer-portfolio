"use client";

import { Button } from "@/libraries/shadcn/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/libraries/shadcn/components/dropdown-menu";
import { Icon } from "@iconify-icon/react";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

const RESUME_OPTIONS = {
  enUS: {
    url: "https://github.com/lucascastroa99/curriculum-vitae/raw/main/LucasCastro_FullStackDeveloper_Resume-ENUS_02-02-2026.pdf",
    flag: "circle-flags:us",
    label: "English",
  },
  ptBR: {
    url: "https://github.com/lucascastroa99/curriculum-vitae/raw/main/LucasCastro_DesenvolvedorFullStack_Curriculo-PTBR_02-02-2026.pdf",
    flag: "circle-flags:br",
    label: "Português",
  },
};

export default function DownloadResume() {
  const t = useTranslations("Components.HeaderBody");
  const handleDownload = (lang: "enUS" | "ptBR") => {
    window.open(RESUME_OPTIONS[lang].url, "_blank");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primary text-black hover:bg-primary/90">
          {t("resume")}
          <Download className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(RESUME_OPTIONS).map(([code, option]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleDownload(code as "enUS" | "ptBR")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Icon icon={option.flag} className="h-3.5 w-3.5" />
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
