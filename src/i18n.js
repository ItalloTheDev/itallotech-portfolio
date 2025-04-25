// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

//Translation
import translationPT from "./locales/pt/translation.json";
import translationEN from "./locales/en/translation.json";

i18n
  // Detects the browser/LocalStorage language
  .use(LanguageDetector)
  //Connect to React
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: translationPT },
      en: { translation: translationEN },
    },

    fallbackLng: "pt",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
