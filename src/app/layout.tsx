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

const baseUrl = process.env.NEXT_PUBLIC_APP_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Lucas Castro - Full Stack Developer",
    template: `%s | Lucas Castro`,
  },
  description:
    "Full Stack Developer specializing in React, Angular, Vue.js, and modern web technologies. View my portfolio and get in touch.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Angular",
    "Vue.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Frontend Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Lucas Castro", url: baseUrl }],
  creator: "Lucas Castro",
  publisher: "Lucas Castro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Lucas Castro - Full Stack Developer",
    title: "Lucas Castro - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Angular, Vue.js, and modern web technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucas Castro - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Castro - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Angular, Vue.js, and modern web technologies.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-us",
      "pt-BR": "/pt-br",
    },
  },
  manifest: "/manifest.ts",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  const gaId = process.env.NEXT_PUBLIC_GA_TAG;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lucas Castro",
              url: baseUrl,
              jobTitle: "Full Stack Developer",
              sameAs: ["https://github.com/lucascastroa99"],
              knowsAbout: [
                "React",
                "Angular",
                "Vue.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Python",
                "C#",
              ],
            }),
          }}
        />
      </head>
      {process.env.NODE_ENV === 'production' && gaId && (
        <GoogleAnalytics gaId={gaId} />
      )}
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
