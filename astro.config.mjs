import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";


export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": new URL("./src", import.meta.url).pathname,
            },
        },
    },

    integrations: [icon()],

    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"]
    },
    base: "/portfolio/",
    site: "https://shad9611.github.io"

});