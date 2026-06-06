export default {
    navbar: {
        about: "Sobre mí",
        experience: "Experiencia",
        skills: "Habilidades",
        projects: "Proyectos",
    },

    hero: {
        title: "Shadai Barraza",
        description:
            "Full Stack Developer enfocado en la creación de aplicaciones web y sistemas escalables. Experiencia en Node.js, TypeScript, React, Angular y Vue.js. Diseño soluciones mantenibles aplicando Arquitectura Hexagonal, Clean Architecture y principios SOLID.",
        yearsExperience: "Años de experiencia",
        deliveredProjects: "Proyectos entregados",
    },

    about: {
        title: "Sobre mí",
        description:
            "Desarrollador Full Stack especializado en backend y frontend moderno. Me enfoco en construir sistemas escalables, bien estructurados y listos para producción, integrando bases de datos SQL/NoSQL, autenticación y arquitecturas desacopladas.",
    },

    experience: {
        title: "Experiencia",
        jobs: [
            {
                company: "Tech Solutions Inc.",
                position: "Senior Full Stack Developer",
                duration: "Ene 2022 - Presente",
                description:
                    "Desarrollo de aplicaciones empresariales escalables con Node.js, TypeScript y React. Implementación de arquitectura de microservicios, CI/CD y optimización de performance en backend.",
            },
            {
                company: "Innovatech Labs",
                position: "Full Stack Developer",
                duration: "Jun 2019 - Dic 2021",
                description:
                    "Desarrollo de aplicaciones web con Angular, Vue.js y Node.js. Integración de APIs REST, diseño de interfaces responsivas y colaboración en equipos ágiles.",
            },
        ],
    },

    skills: {
        title: "Habilidades",
        categories: {
            frontend: "Frontend",
            backend: "Backend",
            database: "Bases de Datos",
            architecture: "Arquitectura",
            tools: "Herramientas",
            softskills: "Soft Skills",
        },
    },

    projects: {
        title: "Proyectos",
        list: [
            {
                name: "Sistema de Seguimiento Nutricional",
                description:
                    "Plataforma fullstack para gestión de pacientes, dietas y seguimiento nutricional con generación de reportes en PDF/Excel y envío por correo o WhatsApp.",
            },
            {
                name: "Bot de Trading Cripto (Hexagonal)",
                description:
                    "Bot de criptomonedas con arquitectura hexagonal y monorepo, separado en dominio y adaptadores usando Node.js y Python.",
            },
            {
                name: "API de Autenticación Firebase",
                description:
                    "API REST con autenticación social (Google y Facebook) usando Firebase e integración con middleware en Express.",
            },
            {
                name: "Portfolio Personal",
                description:
                    "Portfolio moderno construido con Astro, sistema de componentes reutilizables e integración de iconos dinámicos.",
            },
        ],
    },

    tech: {
        node: "Node.js",
        frontendStack: "React / Angular / Vue",
        backendStack: "Node.js / Express",
        architecture: "Arquitecturas limpias y escalables",
    },
} as const;