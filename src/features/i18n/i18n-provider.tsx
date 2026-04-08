"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { dictionaries } from "@/locales";
import { Locale } from "@/types/i18n";

interface I18nContextValue {
  dictionary: (typeof dictionaries)[Locale];
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("id");

  const value = useMemo(
    () => ({
      dictionary: dictionaries[locale],
      locale,
      setLocale,
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
