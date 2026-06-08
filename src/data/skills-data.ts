
import type { Translation } from "@/i18n";
import { Icons } from "../shared/icons";

export interface Skill {
    translationKey?: string;
    name: string;
    icon: keyof typeof Icons;
    category:
    | "frontend"
    | "backend"
    | "database"
    | "architecture"
    | "tools"
    | "softskills";
}

export const getSkils = (t: Translation): Skill[] => ([
    { name: "Angular", icon: "angular", category: "frontend" },
    { name: "Astro", icon: "astro", category: "frontend" },
    { name: "TypeScript", icon: "typescript", category: "frontend" },
    { name: "React", icon: "react", category: "frontend" },
    { name: "Vue", icon: "vue", category: "frontend" },
    { name: "Quasar", icon: "quasar", category: "frontend" },

    { name: "Node.js", icon: "nodejs", category: "backend" },
    { name: "Express", icon: "express", category: "backend" },
    { name: "NestJS", icon: "nestjs", category: "backend" },
    { name: "TypeScript", icon: "typescript", category: "backend" },
    { name: "Java", icon: "java", category: "backend" },
    { name: "SpringBoot", icon: "spring", category: "backend" },
    { name: "Redis", icon: "redis", category: "backend" },

    { name: "MongoDB", icon: "mongodb", category: "database" },
    { name: "SQL Server", icon: "sqlServer", category: "database" },
    { name: "MySQL", icon: "mysql", category: "database" },

    { name: "Hexagonal Architecture", icon: "hexagonal", category: "architecture" },
    { name: "Clean Architecture", icon: "cleanArchitecture", category: "architecture" },
    { name: "SOLID", icon: "solid", category: "architecture" },

    { name: "Docker", icon: "docker", category: "tools" },
    { name: "Git", icon: "git", category: "tools" },
    { name: "SCRUM", icon: "scrum", category: "tools" },

    { name: t.skills.softSkills.teamWork, icon: "coworker", category: "softskills" },
    { name: t.skills.softSkills.communication, icon: "Communication", category: "softskills" },
]);