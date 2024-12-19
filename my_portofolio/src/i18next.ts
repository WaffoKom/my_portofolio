import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    backend: {
      loadPath: "src/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["about", "navbar", "projet", "skills", "testimonials", "experience"],
    interpolation: { escapeValue: false },
  });

export default i18n;
