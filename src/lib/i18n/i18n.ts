"use client"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Import translations
import translationEN from "./locales/en.json"
import translationRO from "./locales/ro.json"

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
    ro: {
        translation: translationRO,
    },
}

i18n
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next
    .use(initReactI18next)
    // init i18next
    .init({
        resources,
        fallbackLng: "ro",
        lng:"ro",
        debug: process.env.NODE_ENV === "development",

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        // language detector options
        detection: {
            order: ["localStorage", "navigator"],
            lookupLocalStorage: "i18nextLng",
            caches: ["localStorage"],
        },
    })

export default i18n

