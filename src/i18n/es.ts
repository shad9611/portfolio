export default {
    navbar: {
        about: "Sobre mí",
        experience: "Experiencia",
        skills: "Habilidades",
        projects: "Proyectos",
    },
    about: {
        title: "Sobre mí",
        description: "Desarrollador Full Stack especializado en backend y frontend moderno. Me enfoco en construir sistemas escalables, bien estructurados y listos para producción, integrando bases de datos SQL/NoSQL, autenticación y arquitecturas desacopladas.",
    },
    experience: {
        title: "Experiencia",
        items: {
            gaman: {
                role: "FullStack Developer",
                period: "Febrero 2022 - Actualidad",
                description: "Desarrollo y mantenimiento de plataformas empresariales de alto impacto para los sectores de comercio electrónico, logística y transformación digital, construcción de aplicaciones web modernas con Angular y TypeScript, así como del diseño e implementación de APIs RESTful escalables con Node.js y Express, utilizando arquitectura hexagonal.",
            },
            inroute: {
                role: "FullStack Developer",
                period: "Octubre 2023 - Febrero 2025",
                description: "Participé en el desarrollo de soluciones de telemática e IoT enfocadas en rastreo vehicular y gestión de flotillas. Formé parte del equipo responsable de Mobox, una plataforma de monitoreo y geolocalización en tiempo real desarrollada con Vue 3, Quasar y Ruby on Rails. Colaboré estrechamente con áreas de negocio, UX/UI y operaciones para transformar requerimientos en funcionalidades escalables, aplicando buenas prácticas de desarrollo y metodologías ágiles. También brindé soporte técnico para la integración de dispositivos IoT y contribuí al desarrollo del sitio web corporativo de Movo IoT Solutions.",
            },
        },
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
        softSkills: {
            teamWork: "Trabajo en equipo",
            communication: "Comunicacion"
        }
    },
    projects: {
        title: "Proyectos",
        status: {
            completed: "Completado",
            inProgress: "En progreso",
        },
        items: {
            nutrition: {
                title: "Sistema de Seguimiento Nutricional",
                description: "Plataforma fullstack para gestión de pacientes, dietas y seguimiento nutricional con generación de reportes en PDF/Excel y envío por correo o WhatsApp.",
            },
            crypto: {
                title: "Bot de Trading Cripto (Hexagonal)",
                description: "Bot de criptomonedas con arquitectura hexagonal y monorepo, separado en dominio y adaptadores usando Node.js y Python.",
            },
            authFirebase: {
                title: "API de Autenticación Firebase",
                description: "API REST con autenticación social (Google y Facebook) usando Firebase e integración con middleware en Express.",
            },
            portfolio: {
                title: "Portfolio Personal",
                description: "Portfolio moderno construido con Astro, sistema de componentes reutilizables e integración de iconos dinámicos.",
            },
            gestionPx: {
                title: "Sistema de Gestión de Pacientes",
                description: "Backend para administración de pacientes con control de peso, registros médicos y seguimiento histórico usando SQL y servicios desacoplados.",
            },
            procesingData: {
                title: "Microservicio de Procesamiento de Datos",
                description: "Servicio independiente para procesamiento y normalización de datos en tiempo real, preparado para escalabilidad horizontal.",
            },
            mobox: {
                title: "MoboMx",
                description: "Sass para visualizar los dispositivos disposibles a la venta, primera version",
            },
            biew: {
                title: "Biew",
                description: "Pagina para realizar tu tienda en linea utilizando google sheet como fuente de datos",
            }
        }
    },
    built: {
        with: "Contruido con Astro"
    }
} as const;