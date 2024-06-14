import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: 'pt', //efinir linguagem inicial
        fallbacking: 'en',// Definir o idioma de fallback
        resources: {
            en: {
                translation: enTranslation,
            },
            pt: {
                translation: ptTranslation,
            },
            interpolation:{
                escapeValue: false // Evitar a necessidade de escapart essa sequencia em traduções
            },
        }
    });
 export default i18n;