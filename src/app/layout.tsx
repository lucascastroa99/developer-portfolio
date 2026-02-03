import GoogleAnalytics from "@/components/CookieConsent/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent/index";
import PageTemplate from "@/components/PageTemplate/index";
import { ThemeProvider } from "@/providers/ThemeProvider";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { JetBrains_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lucas Castro",
    template: `%s | Lucas Castro`,
  },
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  const gaId = process.env.NEXT_PUBLIC_GA_TAG;

  return (
    <html lang="en" suppressHydrationWarning>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      <body className={`${jetBrainsMono.className} antialiased`}>
        <ThemeProvider>
          <NextIntlClientProvider>
            <NextTopLoader color="#00FF00" height={3} showSpinner={false} />
            <PageTemplate>{children}</PageTemplate>
            <CookieConsent />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
