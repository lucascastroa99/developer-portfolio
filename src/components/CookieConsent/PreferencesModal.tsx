"use client";

import { Button } from "@/libraries/shadcn/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/libraries/shadcn/components/dialog";
import { Label } from "@/libraries/shadcn/components/label";
import { Separator } from "@/libraries/shadcn/components/separator";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface ConsentPreferences {
  essential: boolean;
  analytics: boolean;
}

interface PreferencesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preferences: ConsentPreferences;
  onSave: (preferences: ConsentPreferences) => void;
}

export default function PreferencesModal({
  open,
  onOpenChange,
  preferences: initialPreferences,
  onSave,
}: Readonly<PreferencesModalProps>) {
  const t = useTranslations("Components.CookieConsent.preferences");
  const [preferences, setPreferences] = useState(initialPreferences);

  useEffect(() => {
    setPreferences(initialPreferences);
  }, [initialPreferences]);

  const handleToggle = (key: keyof ConsentPreferences) => {
    if (key === "essential") return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    onSave(preferences);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">
            {t("title")}
          </DialogTitle>
          <DialogDescription className="text-base">
            {t("description")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1 flex-1">
                <Label className="text-base font-semibold">
                  {t("essential.title")}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {t("essential.description")}
                </p>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground italic">
              {t("essential.alwaysActive")}
            </p>
          </div>

          <Separator />

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1 flex-1">
                <Label className="text-base font-semibold">
                  {t("analytics.title")}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {t("analytics.description")}
                </p>
              </div>
              <button
                onClick={() => handleToggle("analytics")}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-colors ${
                  preferences.analytics
                    ? "bg-primary/10 hover:bg-primary/20"
                    : "bg-muted hover:bg-muted/80"
                }`}
                aria-label={
                  preferences.analytics
                    ? t("analytics.disable")
                    : t("analytics.enable")
                }
              >
                {preferences.analytics ? (
                  <Check className="h-5 w-5 text-primary" />
                ) : (
                  <X className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold">{t("analytics.tools")}:</span>{" "}
                Google Analytics
              </p>
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold">{t("analytics.purpose")}:</span>{" "}
                {t("analytics.purposeDescription")}
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto group relative transition-all duration-300 hover:text-foreground before:absolute before:inset-0 before:border-2 before:border-primary before:rounded-md before:scale-100 before:opacity-0 before:transition-all before:duration-300 hover:before:scale-105 hover:before:opacity-100"
          >
            {t("cancel")}
          </Button>
          <Button
            onClick={handleSave}
            className="w-full sm:w-auto transition-all duration-300"
          >
            {t("savePreferences")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
