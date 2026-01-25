import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translations from "./localization/translations.json";

const resources = {
  en: {
    translation: Object.fromEntries(
      Object.entries(translations).map(([key, value]) => [key, value.en])
    )
  },
  zh: {
    translation: Object.fromEntries(
      Object.entries(translations).map(([key, value]) => [key, value.zh])
    )
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "zh",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    }
  });

export default i18n;
