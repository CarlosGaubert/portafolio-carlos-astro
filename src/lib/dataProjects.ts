export const repositories = [
  {
    patchImage: "/portafolio-carlos-astro/repositories/pytorch.png",
    nameProject: "Clasificación de imágenes VIT.",
    descriptionProject:
      "Sistema que permite ver el comportamiento de una zona geografica y calcula el porcentaje de bosque en esta. Esta desarrollado con Python usando Django y utiliza Pytorch para los modelos de inteligencia artificial.",
    githubUrl: "https://github.com/CarlosGaubert/TesisGaubertMapas",
    tags: ["Python", "Django", "PyTorch"],
  },
  {
    patchImage: "/portafolio-carlos-astro/repositories/javaandroid.jpeg",
    nameProject: "órdenes de trabajo.",
    descriptionProject:
      "Sistema de gestión de órdenes de trabajo para la gestión de proyectos. Desarrollado en android utilizando java y REST API usando retrofit.",
    githubUrl: "https://github.com/CarlosGaubert/Ordenes-de-Trabajo-2017",
    tags: ["Android", "Java"],
  },
  {
    patchImage: "/portafolio-carlos-astro/repositories/astro.webp",
    nameProject: "Portafolio Carlos Gaubert.",
    descriptionProject:
      "Portafolio de proyectos de Carlos Gaubert. Desarrollado con astro y tailwindcss.",
    githubUrl: "https://github.com/CarlosGaubert/portafolio-carlos-astro",
    tags: ["Astro", "TailwindCSS"],
  },
  {
    patchImage: "/portafolio-carlos-astro/repositories/React.png",
    nameProject: "Sistema de camiones (Frontend).",
    descriptionProject:
      "Sistema de gestión de camiones. Este sistema fue desarrollado para reemplazar sistema obsoleto. Desarrollado en ReactJS utilizando material UI.",
    githubUrl: "https://github.com/CarlosGaubert/CamionesUBB",
    tags: ["React"],
  },
  {
    patchImage: "/portafolio-carlos-astro/repositories/node.png",
    nameProject: "Sistema de camiones (Backend).",
    descriptionProject:
      "Sistema de gestión de camiones. Este sistema fue desarrollado para reemplazar sistema obsoleto. Desarrollado en NodeJs. Sequelize como ORM.",
    githubUrl: "https://github.com/CarlosGaubert/ServidorCamionesUBB/",
    tags: ["Node.js", "Sequelize"],
  },
  {
    patchImage: "/portafolio-carlos-astro/repositories/opencv.png",
    nameProject: "Calibración imagenes satelitales.",
    descriptionProject:
      "Algoritmo de calibración de imagenes satelitales, permite ver comportamiento de modelos VIT. Desarrollado en Python utilizando OpenCV.",
    githubUrl: "https://github.com/CarlosGaubert/calibracion-image-satellite",
    tags: ["Python", "OpenCV"],
  },
  {
    patchImage: "/portafolio-carlos-astro/repositories/pytorch.png",
    nameProject: "Modelos satelitales.",
    descriptionProject:
      "Sistema de entrenamiento de modelos satelitales. Desarrollado en Python utilizando Pytorch.",
    githubUrl: "https://github.com/CarlosGaubert/ExperimentoModelosSatellite",
    tags: ["Python", "PyTorch"],
  },
];

export function getTechIconUrl(tech: string): string {
  const name = tech.toLowerCase().trim();
  
  // Mapping to devicon paths
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
  };

  const path = mapping[name] || `${name}/${name}-original.svg`;
  
  if (mapping[name]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${mapping[name]}`;
  }
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;
}

export function getTagsForProject(language: string | null, repoName: string, description: string): string[] {
  const tagsSet = new Set<string>();
  
  const name = (repoName || "").toLowerCase();
  const desc = (description || "").toLowerCase();

  // Add primary language
  if (language) {
    tagsSet.add(language);
  }

  // Inferred tags
  if (name.includes("react") || desc.includes("react")) tagsSet.add("React");
  if (name.includes("node") || desc.includes("node") || desc.includes("express")) tagsSet.add("Node.js");
  if (name.includes("astro") || desc.includes("astro")) tagsSet.add("Astro");
  if (name.includes("android") || desc.includes("android")) {
    tagsSet.add("Android");
    tagsSet.add("Java");
  }
  if (name.includes("pytorch") || desc.includes("pytorch")) tagsSet.add("PyTorch");
  if (name.includes("django") || desc.includes("django")) tagsSet.add("Django");
  if (name.includes("opencv") || desc.includes("opencv")) tagsSet.add("OpenCV");
  if (name.includes("tailwind") || desc.includes("tailwind")) tagsSet.add("TailwindCSS");
  if (name.includes("nextjs") || name.includes("next.js") || desc.includes("nextjs") || desc.includes("next.js")) tagsSet.add("Next.js");
  if (name.includes("vue") || desc.includes("vue")) tagsSet.add("Vue.js");
  if (name.includes("docker") || desc.includes("docker")) tagsSet.add("Docker");
  if (name.includes("sequelize") || desc.includes("sequelize")) tagsSet.add("Sequelize");

  return Array.from(tagsSet);
}


