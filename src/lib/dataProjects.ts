export const defaultProjects = [
  {
    nameProject: "TesisGaubertMapas",
    descriptionProject:
      "Sistema que permite ver el comportamiento de una zona geográfica y calcula el porcentaje de bosque en esta. Desarrollado con Python usando Django y PyTorch para IA.",
    githubUrl: "https://github.com/CarlosGaubert/TesisGaubertMapas",
    language: "Python",
  },
  {
    nameProject: "Ordenes-de-Trabajo-2017",
    descriptionProject:
      "Sistema de gestión de órdenes de trabajo para proyectos. Desarrollado en Android utilizando Java y REST API con Retrofit.",
    githubUrl: "https://github.com/CarlosGaubert/Ordenes-de-Trabajo-2017",
    language: "Java",
  },
  {
    nameProject: "portafolio-carlos-astro",
    descriptionProject:
      "Portafolio profesional de Carlos Gaubert desarrollado con Astro, Tailwind CSS y View Transitions.",
    githubUrl: "https://github.com/CarlosGaubert/portafolio-carlos-astro",
    language: "Astro",
  },
  {
    nameProject: "CamionesUBB",
    descriptionProject:
      "Sistema de gestión y seguimiento de camiones desarrollado en ReactJS con Material UI.",
    githubUrl: "https://github.com/CarlosGaubert/CamionesUBB",
    language: "JavaScript",
  },
  {
    nameProject: "ServidorCamionesUBB",
    descriptionProject:
      "Servidor backend para el sistema de gestión de camiones. Desarrollado en Node.js con Sequelize ORM.",
    githubUrl: "https://github.com/CarlosGaubert/ServidorCamionesUBB",
    language: "JavaScript",
  },
  {
    nameProject: "calibracion-image-satellite",
    descriptionProject:
      "Algoritmo de calibración de imágenes satelitales para modelos Vision Transformer (ViT). Desarrollado en Python con OpenCV.",
    githubUrl: "https://github.com/CarlosGaubert/calibracion-image-satellite",
    language: "Python",
  },
  {
    nameProject: "ExperimentoModelosSatellite",
    descriptionProject:
      "Entrenamiento y evaluación de modelos satelitales avanzados en Python utilizando PyTorch.",
    githubUrl: "https://github.com/CarlosGaubert/ExperimentoModelosSatellite",
    language: "Python",
  },
];

export function getTechIconUrl(tech: string): string {
  const name = (tech || "").toLowerCase().trim();
  
  // Mapping to official devicon paths
  const mapping: Record<string, string> = {
    python: "python/python-original.svg",
    django: "django/django-plain.svg",
    pytorch: "pytorch/pytorch-original.svg",
    java: "java/java-original.svg",
    android: "android/android-original.svg",
    astro: "astro/astro-original.svg",
    tailwindcss: "tailwindcss/tailwindcss-original.svg",
    tailwind: "tailwindcss/tailwindcss-original.svg",
    react: "react/react-original.svg",
    reactjs: "react/react-original.svg",
    nodejs: "nodejs/nodejs-original.svg",
    "node.js": "nodejs/nodejs-original.svg",
    node: "nodejs/nodejs-original.svg",
    sequelize: "sequelize/sequelize-original.svg",
    opencv: "opencv/opencv-original.svg",
    javascript: "javascript/javascript-original.svg",
    typescript: "typescript/typescript-original.svg",
    html: "html5/html5-original.svg",
    html5: "html5/html5-original.svg",
    css: "css3/css3-original.svg",
    css3: "css3/css3-original.svg",
    github: "github/github-original.svg",
    git: "git/git-original.svg",
    csharp: "csharp/csharp-original.svg",
    "c#": "csharp/csharp-original.svg",
    cplusplus: "cplusplus/cplusplus-original.svg",
    "c++": "cplusplus/cplusplus-original.svg",
    c: "c/c-original.svg",
    go: "go/go-original.svg",
    rust: "rust/rust-original.svg",
    php: "php/php-original.svg",
    ruby: "ruby/ruby-original.svg",
    swift: "swift/swift-original.svg",
    kotlin: "kotlin/kotlin-original.svg",
    dart: "dart/dart-original.svg",
    vue: "vuejs/vuejs-original.svg",
    "vue.js": "vuejs/vuejs-original.svg",
    nextjs: "nextjs/nextjs-original.svg",
    "next.js": "nextjs/nextjs-original.svg",
    docker: "docker/docker-original.svg",
    mysql: "mysql/mysql-original.svg",
    postgresql: "postgresql/postgresql-original.svg",
    postgres: "postgresql/postgresql-original.svg",
    mongodb: "mongodb/mongodb-original.svg",
    mongo: "mongodb/mongodb-original.svg",
    firebase: "firebase/firebase-plain.svg",
    shell: "bash/bash-original.svg",
    bash: "bash/bash-original.svg",
  };

  const path = mapping[name] || `${name}/${name}-original.svg`;
  
  if (mapping[name]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${mapping[name]}`;
  }
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;
}

export function getTechGradient(tech: string): string {
  const name = (tech || "").toLowerCase().trim();
  switch (name) {
    case "python":
      return "from-blue-950/70 via-slate-900/80 to-yellow-950/30";
    case "react":
    case "reactjs":
      return "from-cyan-950/80 via-zinc-900/80 to-blue-950/50";
    case "astro":
      return "from-purple-950/80 via-zinc-900/80 to-orange-950/40";
    case "nodejs":
    case "node.js":
    case "node":
      return "from-emerald-950/80 via-zinc-900/80 to-green-950/40";
    case "typescript":
      return "from-blue-950/80 via-zinc-900/80 to-indigo-950/50";
    case "javascript":
      return "from-yellow-950/70 via-zinc-900/80 to-amber-950/40";
    case "java":
    case "android":
    case "kotlin":
      return "from-amber-950/70 via-zinc-900/80 to-red-950/40";
    case "pytorch":
    case "django":
      return "from-red-950/70 via-zinc-900/80 to-orange-950/40";
    case "opencv":
      return "from-emerald-950/70 via-zinc-900/80 to-blue-950/50";
    default:
      return "from-zinc-900/90 via-zinc-950/90 to-zinc-900/90";
  }
}

export function getMainLanguage(language: string | null, repoName: string = "", description: string = ""): string {
  if (language && language.trim().length > 0) {
    return language.trim();
  }
  const name = (repoName || "").toLowerCase();
  const desc = (description || "").toLowerCase();
  if (name.includes("python") || desc.includes("python")) return "Python";
  if (name.includes("react") || desc.includes("react")) return "JavaScript";
  if (name.includes("astro") || desc.includes("astro")) return "Astro";
  if (name.includes("android") || desc.includes("android")) return "Java";
  if (name.includes("node") || desc.includes("node")) return "JavaScript";
  if (name.includes("typescript") || name.includes("ts")) return "TypeScript";
  return "General";
}
