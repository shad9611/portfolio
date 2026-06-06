import type { Icons } from "./icons";

type Technology = {
    name: string,
    icon: keyof typeof Icons;
}


export const Technologies: Record<string, Technology> = {
    Angular: {
        name: "Angular",
        icon: "angular",
    },
    TypeScript: {
        name: "TypeScript",
        icon: "typescript",
    },
    NodeJS: {
        name: "Node.js",
        icon: "nodejs",
    },
    MongoDB: {
        name: "MongoDB",
        icon: "mongodb",
    },
    MySQL: {
        name: "MySQL",
        icon: "mysql"
    },
    Express: {
        name: "Express",
        icon: "express"
    },
    Vue3: {
        name: "Vue 3",
        icon: "vue"
    },
    vue2: {
        name: "Vue 2",
        icon: "vue",
    },
    Quasar: {
        name: "Quasar",
        icon: "quasar"
    },
    RubyOnRails: {
        name: "Ruby on Rails",
        icon: "rails"
    },
    JavaScript: {
        name: "JavaScript",
        icon: "javascript"
    },
    Git: {
        name: "Git",
        icon: "git"
    },
    React: {
        name: "React",
        icon: "react"
    },
    sqlServer: {
        name: "SQL Server",
        icon: "sqlServer"
    },
    PDF: {
        name: "PDF",
        icon: "pdf"
    },
    Excel: {
        name: "Excel",
        icon: "excel"
    },
    Firebase: {
        name: "Firebase",
        icon: "firebase"
    },
    Python: {
        name: "Python",
        icon: "python"
    },
    Tailwind: {
        name: "TailwindCss",
        icon: "tailwind"
    },
    Astro: {
        name: "Astro",
        icon: "astro"
    },
    Redis: {
        name: "Redis",
        icon: "redis",
    },
    Docker: {
        name: "Docker",
        icon: "docker"
    },
    Pug: {
        name: "Pug",
        icon: "pug"
    },
    Sass: {
        name: "Sass",
        icon: "sass"
    },
    Nextjs: {
        name: "Next js",
        icon: "nextjs"
    }
} as const;