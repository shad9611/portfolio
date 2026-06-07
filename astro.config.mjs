import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [icon()],

    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"]
    },
    site: "https://shad9611.github.io",
    base: "/portfolio",

});