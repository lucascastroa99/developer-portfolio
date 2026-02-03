"use client";

import { Button } from "@/libraries/shadcn/components/button";
import { Card } from "@/libraries/shadcn/components/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import PreferencesModal from "./PreferencesModal";

interface ConsentPreferences {
  essential: boolean;
  analytics: boolean;
}

const DEFAULT_PREFERENCES: ConsentPreferences = {
  essential: true,
  analytics: false,
};

type GtagCommand = "consent" | "config" | "event" | "js" | "set";
type ConsentArg = "default" | "update";
type ConsentParams = {
  ad_storage?: "granted" | "denied";
  ad_user_data?: "granted" | "denied";
  ad_personalization?: "granted" | "denied";
  analytics_storage?: "granted" | "denied";
  wait_for_update?: number;
};

declare global {
  interface Window {
    gtag?: (
      command: GtagCommand,
      action: ConsentArg,
      params?: ConsentParams | Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export default function CookieConsent() {
  const t = useTranslations("Components.CookieConsent");
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] =
    useState<ConsentPreferences>(DEFAULT_PREFERENCES);

  const updateGoogleConsent = useCallback((prefs: ConsentPreferences) => {
    if (
      typeof globalThis !== "undefined" &&
      globalThis.window?.gtag !== undefined
    ) {
      const consentValue = prefs.analytics ? "granted" : "denied";

      globalThis.window.gtag("consent", "update", {
        ad_storage: consentValue,
        ad_user_data: consentValue,
        ad_personalization: consentValue,
        analytics_storage: consentValue,
      });
    }
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent) {
      const savedPreferences = JSON.parse(consent) as ConsentPreferences;
      Promise.resolve().then(() => {
        setPreferences(savedPreferences);
        updateGoogleConsent(savedPreferences);
      });
    } else {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, [updateGoogleConsent]);

  const savePreferences = useCallback(
    (prefs: ConsentPreferences) => {
      localStorage.setItem("cookie-consent", JSON.stringify(prefs));
      setPreferences(prefs);
      updateGoogleConsent(prefs);
      setShowBanner(false);
    },
    [updateGoogleConsent]
  );

  const handleAcceptAll = useCallback(() => {
    const allAccepted: ConsentPreferences = {
      essential: true,
      analytics: true,
    };
    savePreferences(allAccepted);
  }, [savePreferences]);

  const handleRejectAll = useCallback(() => {
    const allRejected: ConsentPreferences = {
      essential: true,
      analytics: false,
    };
    savePreferences(allRejected);
  }, [savePreferences]);

  const handleSavePreferences = useCallback(
    (prefs: ConsentPreferences) => {
      savePreferences(prefs);
      setShowPreferences(false);
    },
    [savePreferences]
  );

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-5 duration-500 max-sm:left-4 max-sm:right-4 max-sm:max-w-[calc(100vw-2rem)] sm:max-w-2xl">
        <Card className="border-2 border-primary/20 shadow-2xl p-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <h2
                id="cookie-consent-title"
                className="text-xl font-semibold tracking-tight"
              >
                {t("title")}
              </h2>
              <p
                id="cookie-consent-description"
                className="text-sm text-muted-foreground leading-relaxed text-justify"
              >
                {t("description")}{" "}
                <Link
                  href="/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  {t("privacyPolicy")}
                </Link>{" "}
                {t("and")}{" "}
                <Link
                  href="/legal/terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  {t("termsOfService")}
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                onClick={handleAcceptAll}
                size="default"
                className="w-full sm:w-auto"
              >
                {t("acceptAll")}
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                size="default"
                className="w-full sm:w-auto group relative transition-all duration-300 hover:text-foreground before:absolute before:inset-0 before:border-2 before:border-primary before:rounded-md before:scale-100 before:opacity-0 before:transition-all before:duration-300 hover:before:scale-105 hover:before:opacity-100"
              >
                {t("rejectAll")}
              </Button>
              <Button
                onClick={() => setShowPreferences(true)}
                variant="ghost"
                size="default"
                className="w-full sm:w-auto"
              >
                {t("customizePreferences")}
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <PreferencesModal
        open={showPreferences}
        onOpenChange={setShowPreferences}
        preferences={preferences}
        onSave={handleSavePreferences}
      />
    </>
  );
}
