export default {
    navbar: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects"
    },
    about: {
        title: "Shadai Barraza",
        description: "Full Stack Developer specializing in modern backend and frontend. I focus on building scalable, well-structured, and production-ready systems, integrating SQL/NoSQL databases, authentication, and decoupled architectures.",
    },
    experience: {
        title: "Experience",
        items: {
            gaman: {
                role: "Full Stack Developer",
                period: "Febrary 2025 - Present",
                description: "Development and maintenance of high-impact business platforms for the e-commerce, logistics and digital transformation sectors, building modern web applications with Angular and TypeScript, as well as the design and implementation of scalable RESTful APIs with Node.js and Express, using hexagonal architecture."
            },
            inroute: {
                role: "Full Stack Developer",
                period: "Octuber 2023 - Febrary 2025",
                description: "I participated in the development of telematics and IoT solutions focused on vehicle tracking and fleet management. I was part of the team responsible for Mobox, a real-time monitoring and geolocation platform developed with Vue 3, Quasar, and Ruby on Rails. I collaborated closely with business, UX/UI, and operations teams to transform requirements into scalable functionalities, applying best development practices and agile methodologies. I also provided technical support for the integration of IoT devices and contributed to the development of the Movo IoT Solutions corporate website."
            }
        }
    },
    skills: {
        title: "Skills",
        categories: {
            frontend: "Frontend",
            backend: "Backend",
            database: "Databases",
            architecture: "Architecture",
            tools: "Tools",
            softskills: "Soft Skills",
        },
        softSkills: {
            teamWork: "Team work",
            communication: "Communication"
        }
    },
    projects: {
        title: "Projects",
        status: {
            completed: "Completed",
            inProgress: "In progress",
        },
        items: {
            nutrition: {
                title: "Nutritional Monitoring System",
                description: "Full-stack platform for patient management, diets, and nutritional monitoring with PDF/Excel report generation and delivery via email or WhatsApp."
            },
            crypto: {
                title: "Crypto Trading Bot (Hexagonal)",
                description: "Cryptocurrency bot with hexagonal architecture and a single repository, separated into domains and adapters using Node.js and Python."
            },
            authFirebase: {
                title: "Firebase Authentication API",
                description: "REST API with social authentication (Google and Facebook) using Firebase and middleware integration in Express."
            },
            portfolio: {
                title: "Personal Portfolio",
                description: "Modern portfolio built with Astro, a reusable component system, and dynamic icon integration."
            },
            gestionPx: {
                title: "Patient Management System",
                description: "Backend for patient management with weight control, medical records and historical tracking using SQL and decoupled services."
            },
            procesingData: {
                title: "Data Processing Microservice",
                description: "Independent service for real-time data processing and normalization, ready for horizontal scalability."
            },
            mobox: {
                title: "MoboMx",
                description: "Sass to view available devices for sale, first version",
            },
            biew: {
                title: "Biew",
                description: "Page to create your online store using Google Sheets as a data source",
            }
        }
    },
    built: {
        with: "Built with Astro"
    }
} as const