import { en } from "./en";
import { ar } from "./ar";
import { de } from "./de";

/**
 * To add a new language: create src/i18n/<code>.ts satisfying the
 * `Translation` type, then register it in both maps below and add the
 * locale code to astro.config.mjs's `i18n.locales`. Nothing else in the
 * codebase needs to change — every component reads through getTranslations().
 */
export const translations = { en, ar, de };

export type Locale = keyof typeof translations;

export const locales: Locale[] = ["en", "ar", "de"];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  ar: "AR",
  de: "DE",
};

export const rtlLocales: Locale[] = ["ar"];

function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export function getTranslations(locale: string | undefined) {
  return isLocale(locale ?? "") ? translations[locale as Locale] : translations[defaultLocale];
}

export function isRtl(locale: string | undefined): boolean {
  return isLocale(locale ?? "") && rtlLocales.includes(locale as Locale);
}
