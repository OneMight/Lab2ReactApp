import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from './locales/en/traslation.json'
import translationRU from './locales/ru/traslation.json'

const resources ={
  en:{
    translation: translationEN
  },
  ru:{
    translation: translationRU
  }
};
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    lng: "en",
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;