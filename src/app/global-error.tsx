"use client";

import { Button } from "@/libraries/shadcn/components/button";
import { useTranslations } from "next-intl";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({
  error,
  reset,
}: Readonly<GlobalErrorProps>) {
  const t = useTranslations("Components.Error");

  return (
    <html lang="en" className={jetBrainsMono.variable}>
      <body className={`${jetBrainsMono.className} min-h-screen bg-background text-foreground antialiased`}>
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-destructive"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
              {t("globalDescription")}
            </p>
            {error.digest && (
              <p className="mb-8 text-sm text-muted-foreground">
                {t("errorId")}: <code className="rounded bg-muted px-2 py-1">{error.digest}</code>
              </p>
            )}
            <Button onClick={() => reset()} size="lg">
              {t("tryAgain")}
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
