import type { Translation } from "@/i18n";
import type { Architectures } from "../shared/architectures";
import type { Technologies } from "../shared/technologies";

export type Technology =
    (typeof Technologies)[keyof typeof Technologies];

export type Architectory =
    (typeof Architectures)[keyof typeof Architectures];

type ProjectTranslationKey =
    keyof Translation["projects"]["items"];

export interface Project {
    translationKey: ProjectTranslationKey
    id: number;
    technologies: Technology[];
    architectures?: Architectory[]
    image?: string;
    demoUrl?: string;
    githubUrl?: string;
    status: "completed" | "inProgress";
}