export const getSocialLinks = (lang: string) => [
    {
        href: "https://github.com/shad9611",
        icon: "lucide:github",
        label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/shadai-barraza/",
        icon: "lucide:linkedin",
        label: "LinkedIn",
    },
    {
        href: "mailto:elohim.shadai26@gmail.com",
        icon: "lucide:mail",
        label: "Email",
    },
    {
        href:
            lang === "en"
                ? "/cv-Shadai-barraza-en.pdf"
                : "/cv-Shadai-barraza.pdf",
        icon: "lucide:file-text",
        label: "CV",
        download:
            lang === "en"
                ? "Shadai-Barraza-CV-English.pdf"
                : "CV-Shadai-Barraza.pdf",
    },
];