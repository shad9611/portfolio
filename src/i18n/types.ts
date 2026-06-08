import en from "../i18n/en";
import es from "../i18n/es";

export const languages = {
    es,
    en,
};

export type Translation = typeof languages[keyof typeof languages];