import { Architectures } from "../shared/architectures";
import { Technologies } from "../shared/technologies";
import type { Experience } from "../types/experience";


export const getExperiences = (): Experience[] => (
    [
        // Gaman
        {
            company: "Gaman Solutions",
            role: "Fullstack Developer",
            period: "Febrero 2025 - Actualidad",
            description:
                "Desarrollo y mantenimiento de plataformas empresariales de alto impacto para los sectores de comercio electrónico, logística y transformación digital, construcción de aplicaciones web modernas con Angular y TypeScript, así como del diseño e implementación de APIs RESTful escalables con Node.js y Express, utilizando arquitectura hexagonal.",
            technologies: [
                Technologies.Angular,
                Technologies.NodeJS,
                Technologies.TypeScript,
                Technologies.MongoDB,
                Technologies.Express,
                Technologies.sqlServer,
                Technologies.Git,
            ],
            architecture: [
                Architectures.Hexagonal,
                Architectures.Clean,
            ],
            logo: "icons/gaman.webp",
        },
        // Inroute
        {
            company: "Inroute Telematics",
            role: "Full Stack Developer",
            period: "Octubre 2023 - Febrero 2025",
            description:
                "Participé en el desarrollo de soluciones de telemática e IoT enfocadas en rastreo vehicular y gestión de flotillas. Formé parte del equipo responsable de Mobox, una plataforma de monitoreo y geolocalización en tiempo real desarrollada con Vue 3, Quasar y Ruby on Rails. Colaboré estrechamente con áreas de negocio, UX/UI y operaciones para transformar requerimientos en funcionalidades escalables, aplicando buenas prácticas de desarrollo y metodologías ágiles. También brindé soporte técnico para la integración de dispositivos IoT y contribuí al desarrollo del sitio web corporativo de Movo IoT Solutions.",
            technologies: [
                Technologies.Vue3,
                Technologies.Quasar,
                Technologies.RubyOnRails,
                Technologies.MySQL,
                Technologies.JavaScript,
                Technologies.Git,
                Technologies.React,
                Technologies.TypeScript
            ],
            architecture: [
                Architectures.MVC
            ],
            logo: "icons/inroute.svg",
        },

    ]
)