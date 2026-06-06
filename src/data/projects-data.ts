import { Architectures } from "../shared/architectures";
import { Technologies } from "../shared/technologies";
import type { Project } from "../types/projects";


export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Sistema de Seguimiento Nutricional",
        description:
            "Plataforma fullstack para gestión de dietas, pacientes y seguimiento nutricional con generación de reportes en PDF/Excel y envío por correo o WhatsApp.",
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
        status: "in-progress",
    },
    {
        id: 2,
        title: "API de Autenticación con Firebase",
        description:
            "API REST con autenticación social usando Google y Facebook, integración con Firebase y middleware de validación de usuarios en Express.",
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
        id: 3,
        title: "Bot de Trading Cripto (Monorepo Hexagonal)",
        description:
            "Bot de criptomonedas con arquitectura hexagonal, separación de dominio y adaptadores, desarrollado en monorepo con Node.js y Python.",
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
        status: "in-progress",
    },
    {
        id: 4,
        title: "Portfolio Personal Fullstack",
        description:
            "Portfolio moderno con Astro, diseño responsive, sistema de componentes reutilizables e integración de iconos dinámicos.",
        technologies: [
            Technologies.Astro,
            Technologies.TypeScript,
            Technologies.Tailwind
        ],
        githubUrl: "",
        status: "completed",
    },
    {
        id: 5,
        title: "Sistema de Gestión de Pacientes",
        description:
            "Backend para administración de pacientes con control de peso, registros médicos y seguimiento histórico usando SQL y servicios desacoplados.",
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
        id: 6,
        title: "Microservicio de Procesamiento de Datos",
        description:
            "Servicio independiente para procesamiento y normalización de datos en tiempo real, preparado para escalabilidad horizontal.",
        technologies: [
            Technologies.NodeJS,
            Technologies.TypeScript,
            Technologies.Redis,
            Technologies.Docker],
        githubUrl: "",
        status: "in-progress",
    },
    {
        id: 7,
        title: "MoboMx",
        description: "Pagina tipo Sass para visualizar los dispositivos disposibles a la venta, primera version",
        technologies: [
            Technologies.Pug,
            Technologies.JavaScript,
            Technologies.Sass
        ],
        demoUrl: "https://movomx.com/",
        status: "completed"

    },
    {
        id: 8,
        title: "Biew",
        description: "Pagina para realizar tu tienda en linea utilizando google sheet como fuente de datos",
        technologies: [
            Technologies.vue2,
            Technologies.TypeScript,
            Technologies.Nextjs
        ],
        demoUrl: "https://getbiew.com/",
        status: "completed"

    }
];