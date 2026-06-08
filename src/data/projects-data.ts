import { Architectures } from "../shared/architectures";
import { Technologies } from "../shared/technologies";
import type { Project } from "../types/projects";


export const PROJECTS: Project[] = [
    {
        id: 1,
        translationKey: 'nutrition',
        technologies: [
            Technologies.NodeJS,
            Technologies.TypeScript,
            Technologies.MySQL,
            Technologies.MongoDB,
            Technologies.Express,
            Technologies.Git,
            Technologies.PDF,
            Technologies.Excel
        ],
        githubUrl: "",
        status: "inProgress",
    },
    {
        translationKey: 'authFirebase',
        id: 2,
        technologies: [
            Technologies.NodeJS,
            Technologies.TypeScript,
            Technologies.Express,
            Technologies.Firebase,
        ],
        githubUrl: "",
        status: "completed",
    },
    {
        translationKey: 'crypto',
        id: 3,
        technologies: [
            Technologies.NodeJS,
            Technologies.Python,
            Technologies.TypeScript
        ],
        architectures: [
            Architectures.Hexagonal,
            Architectures.Monorepo
        ],
        githubUrl: "",
        status: "inProgress",
    },
    {
        translationKey: 'portfolio',
        id: 4,
        technologies: [
            Technologies.Astro,
            Technologies.TypeScript,
            Technologies.Tailwind
        ],
        githubUrl: "",
        status: "completed",
    },
    {
        translationKey: 'gestionPx',
        id: 5,
        technologies: [
            Technologies.NodeJS,
            Technologies.Express,
            Technologies.MySQL
        ],
        architectures: [Architectures.Hexagonal],
        githubUrl: "",
        status: "completed",
    },
    {
        translationKey: 'procesingData',
        id: 6,
        technologies: [
            Technologies.NodeJS,
            Technologies.TypeScript,
            Technologies.Redis,
            Technologies.Docker],
        githubUrl: "",
        status: "inProgress",
    },
    {
        translationKey: 'mobox',
        id: 7,
        technologies: [
            Technologies.Pug,
            Technologies.JavaScript,
            Technologies.Sass
        ],
        demoUrl: "https://movomx.com/",
        status: "completed"

    },
    {
        translationKey: 'biew',
        id: 8,
        technologies: [
            Technologies.vue2,
            Technologies.TypeScript,
            Technologies.Nextjs
        ],
        demoUrl: "https://getbiew.com/",
        status: "completed"

    }
];