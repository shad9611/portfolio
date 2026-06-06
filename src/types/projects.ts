import type { Architectures } from "../shared/architectures";
import type { Technologies } from "../shared/technologies";

export type Technology =
    (typeof Technologies)[keyof typeof Technologies];

export type Architectory =
    (typeof Architectures)[keyof typeof Architectures];


export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: Technology[];
    architectures?: Architectory[]
    image?: string;
    demoUrl?: string;
    githubUrl?: string;
    status: "completed" | "in-progress" | "planned";
}