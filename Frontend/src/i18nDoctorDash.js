import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/enDD.json";
import hiTranslations from "./locales/hiDD.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    hi: {
      translation: hiTranslations,
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language in case the user's language is not available
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
