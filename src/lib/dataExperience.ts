export interface Experience {
  dateExperience: string;
  companyExperience: string;
  cityCompanyExperience: string;
  titleExperience: string;
  descriptionExperience: string;
  isCurrent?: boolean;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    dateExperience: "Julio 2024 – Presente",
    companyExperience: "IT-CONSULTING SPA",
    cityCompanyExperience: "Santiago, Chile",
    titleExperience: "Ingeniero de Software",
    descriptionExperience:
      "Desarrollo y mantenimiento de sistema de gestión de inventario empresarial basado en arquitectura MVC. Optimización de consultas complejas y operaciones críticas mediante procedimientos almacenados en base de datos, garantizando alta disponibilidad y consistencia de datos.",
    isCurrent: true,
    technologies: ["JavaScript", "PHP", "MySQL", "MVC", "HTML5", "CSS3"],
  },
  {
    dateExperience: "Marzo 2023 – Marzo 2024",
    companyExperience: "Universidad del Bío-Bío",
    cityCompanyExperience: "Concepción, Chile",
    titleExperience: "Investigador & Desarrollador IA",
    descriptionExperience:
      "Participación en proyecto FIC regional enfocado en visión por computadora e inteligencia artificial. Desarrollo de modelos Vision Transformer (ViT) para clasificación de imágenes satelitales y estimación de cobertura forestal. Implementación de plataforma web interactiva para visualización y análisis de comportamiento de los modelos.",
    isCurrent: false,
    technologies: ["Python", "PyTorch", "Django", "OpenCV", "Machine Learning"],
  },
  {
    dateExperience: "Octubre 2021 – Enero 2022",
    companyExperience: "IT-CONSULTING SPA",
    cityCompanyExperience: "Santiago, Chile",
    titleExperience: "Ingeniero de Software (Líder de Proyecto)",
    descriptionExperience:
      "Liderazgo y desarrollo integral de software de gestión logística y trazabilidad de frutas para empresa agroexportadora. Diseño de base de datos relacional y lógica de negocio bajo patrón MVC, optimizando flujos de despacho y control de calidad.",
    isCurrent: false,
    technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap", "MVC"],
  },
  {
    dateExperience: "Abril 2020 – Junio 2020",
    companyExperience: "IT-CONSULTING SPA",
    cityCompanyExperience: "Santiago, Chile",
    titleExperience: "Ingeniero de Software",
    descriptionExperience:
      "Diseño e implementación de módulos CRUD de alta concurrencia para gestión de inventarios y bodegas. Creación de procedimientos almacenados en MySQL para asegurar integridad transaccional y rendimiento óptimo en la manipulación masiva de registros.",
    isCurrent: false,
    technologies: ["JavaScript", "PHP", "MySQL", "CSS3"],
  },
  {
    dateExperience: "Junio 2018 – Julio 2018",
    companyExperience: "Hospital Las Higueras",
    cityCompanyExperience: "Talcahuano, Chile",
    titleExperience: "Soporte Técnico & Redes TI",
    descriptionExperience:
      "Gestión de infraestructura informática en entorno hospitalario de alta exigencia: configuración de equipos clínicos, enrutamiento IP, despliegue de software médico y atención de incidencias críticas para asegurar la continuidad operativa de los servicios de salud.",
    isCurrent: false,
    technologies: ["Redes", "Soporte TI", "Hardware", "Linux", "Windows"],
  },
];
