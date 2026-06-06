import type { Architectures } from '../shared/architectures';
import { Technologies } from '../shared/technologies';

export type Technology =
    (typeof Technologies)[keyof typeof Technologies];

export type Architecture =
    (typeof Architectures)[keyof typeof Architectures];

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    technologies: Technology[];
    architecture: Architecture[];
    logo?: string;
}