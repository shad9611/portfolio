import { Icons } from "./icons";

type Architecture = {
    name: string,
    icon: keyof typeof Icons;
}

export const Architectures: Record<string, Architecture> = {
    Hexagonal: {
        name: "Hexagonal Architecture",
        icon: "hexagonal",
    },
    Clean: {
        name: "Clean Architecture",
        icon: "cleanArchitecture",
    },
    MVC: {
        name: "MVC Architecture",
        icon: "mvc"
    },
    Monorepo: {
        name: "Monorepo",
        icon: "monorepo"
    },
    Solid: {
        name: "SOLID",
        icon: "solid"
    }
} as const;