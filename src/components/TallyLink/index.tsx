"use client";

import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const TALLY_FORMS = [
  {
    code: "68eMXk",
    isEnglish: true,
    isLight: true,
  },
  {
    code: "ODlrv8",
    isEnglish: true,
    isLight: false,
  },
  {
    code: "yPNgL4",
    isEnglish: false,
    isLight: true,
  },
  {
    code: "GxKkWo",
    isEnglish: false,
    isLight: false,
  },
];

export function TallyLink() {
  const locale = useLocale();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isTallyFormEnglish = locale === "en-us";
  const isTallyFormLight = mounted ? theme === "light" : true;

  const selectedTallyForm = TALLY_FORMS.find(
    (form) => form.isEnglish === isTallyFormEnglish && form.isLight === isTallyFormLight
  );
  const contactFormUrl = selectedTallyForm?.code || TALLY_FORMS[0].code;

  return (
    <a
      href={`https://tally.so/r/${contactFormUrl}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-lg border-2 p-4 transition-all hover:border-primary hover:bg-secondary 2xl:gap-4 2xl:p-5"
    >
      <div className="w-fit h-fit">
        <Image
          src="/images/tally-logo.png"
          alt="Tally"
          width={42}
          height={42}
        />
      </div>
      <span className="font-medium 2xl:text-lg">Tally</span>
    </a>
  );
}
