# 🚀 Mi Portafolio Profesional — Carlos Gaubert

<div align="center">
  
  [![Astro](https://img.shields.io/badge/Astro-v4.10-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-v5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Bun](https://img.shields.io/badge/Bun-v1.1-fbf0df?style=for-the-badge&logo=bun&logoColor=black)](https://bun.sh/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

  <p align="center">
    <strong>Un portafolio web moderno, rápido y altamente optimizado que presenta mis proyectos de ingeniería de software, investigación en inteligencia artificial y experiencia laboral.</strong>
  </p>

  <h4>
    <a href="https://carlosgaubertq.github.io/portafolio_carlos_astro/">✨ Ver Demo en Vivo</a>
    ·
    <a href="https://github.com/CarlosGaubertQ/portafolio_carlos_astro/issues">🐛 Reportar un Problema</a>
  </h4>
</div>

---

## 📖 Sobre el Proyecto

Este es mi portafolio digital personal, diseñado para mostrar mis habilidades como ingeniero de software e investigador. Está desarrollado utilizando **Astro**, un framework moderno orientado a la velocidad y la optimización de recursos, con **Tailwind CSS** para un diseño visualmente atractivo y responsivo, y **TypeScript** para asegurar la calidad y robustez del código.

### 🌟 Características Destacadas

*   **⚡ Rendimiento Excepcional:** Carga instantánea gracias al renderizado estático de Astro y la eliminación de JavaScript innecesario en el cliente.
*   **🔄 Navegación Fluida (View Transitions):** Transición de páginas sin parpadeos mediante el uso de la API nativa de View Transitions.
*   **🌌 Fondo de Estrellas Persistente:** Efecto dinámico de estrellas animadas en el fondo. El progreso de la animación se persiste entre transiciones de páginas (gracias a `transition:persist` de Astro y una sincronización en JavaScript por medio de la API de Animaciones Web (`getAnimations()`)), logrando un flujo de movimiento ininterrumpido.
*   **🖱️ Efecto Feedback de Mouse:** Indicador luminoso sutil que sigue el cursor del usuario, mejorando la interactividad del sitio.
*   **📱 Totalmente Responsivo:** Diseñado desde cero para adaptarse perfectamente a dispositivos móviles, tablets y pantallas de escritorio.
*   **🎨 Animaciones Modernas:** Tarjetas con efectos de rotación de bordes gradientes (`linear-gradient`) y escalado suave al pasar el cursor.

---

## 🛠️ Tecnologías y Herramientas

| Tecnología | Descripción | Propósito |
| :--- | :--- | :--- |
| [Astro](https://astro.build/) | Framework web moderno para velocidad | Estructura, Enrutamiento y Generación Estática |
| [Tailwind CSS](https://tailwindcss.com/) | Framework de CSS utility-first | Estilos, Responsive Design y Maquetación |
| [TypeScript](https://www.typescriptlang.org/) | Superconjunto tipado de JavaScript | Lógica de componentes e interactividad segura |
| [Bun](https://bun.sh/) | Entorno de ejecución y gestor de paquetes de alto rendimiento | Gestión de dependencias y scripts de desarrollo |
| [Web Animations API](https://developer.mozilla.org/es/docs/Web/API/Web_Animations_API) | API nativa del navegador para animaciones | Persistencia de la animación de las estrellas |

---

## 📁 Estructura del Proyecto

El proyecto sigue una estructura organizada típica de un proyecto Astro con TypeScript:

```bash
├── public/                 # Archivos estáticos y activos públicos (imágenes, iconos)
│   ├── stars/              # Recursos gráficos para el fondo de estrellas
│   └── repositories/       # Logotipos de las tecnologías de proyectos
├── src/
│   ├── components/         # Componentes UI reutilizables
│   │   ├── Icons/          # Componentes de iconos SVG
│   │   ├── CardProject.astro      # Tarjeta interactiva de proyectos
│   │   ├── ItemExperience.astro   # Elemento para la línea de tiempo de experiencia
│   │   ├── Navbar.astro           # Barra de navegación superior
│   │   ├── ProfileImage.astro     # Imagen de perfil con sombra y efectos
│   │   └── StarBackground.astro   # Componente base de estrellas (para referencia)
│   ├── layouts/
│   │   └── Layout.astro           # Estructura HTML base, estilos globales y scripts persistentes
│   ├── lib/
│   │   ├── dataExperience.ts      # Datos estructurados de historial laboral y educación
│   │   └── dataProjects.ts        # Datos estructurados de proyectos expuestos
│   └── pages/              # Páginas del sitio web (enrutamiento basado en archivos)
│       ├── contact/        # Página de Contacto
│       ├── experience/     # Página de Experiencia (Línea de tiempo)
│       ├── projects/       # Página de Proyectos
│       └── index.astro     # Página de Inicio
├── astro.config.mjs        # Configuración de Astro (sitio, base de ruta e integraciones)
├── package.json            # Dependencias del proyecto y scripts
├── tsconfig.json           # Configuración del compilador de TypeScript
└── bun.lockb               # Archivo de bloqueo de dependencias de Bun
```

---

## 🚀 Configuración y Ejecución Local

Sigue estos sencillos pasos para clonar y ejecutar el proyecto en tu máquina local:

### Prerrequisitos

Se recomienda tener instalado [Bun](https://bun.sh/) para un rendimiento más rápido, pero también puedes usar `npm`, `yarn` o `pnpm`.

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/CarlosGaubertQ/portafolio_carlos_astro.git
cd portafolio_carlos_astro
```

### Paso 2: Instalar Dependencias

Instala las dependencias necesarias mediante Bun:

```bash
bun install
```

*(Si utilizas npm, ejecuta `npm install` en su lugar).*

### Paso 3: Servidor de Desarrollo

Inicia el entorno de desarrollo local:

```bash
bun run dev
```

El proyecto estará disponible en [http://localhost:4321/portafolio_carlos_astro](http://localhost:4321/portafolio_carlos_astro).

### Paso 4: Construir para Producción

Para compilar el proyecto y generar los archivos estáticos listos para producción:

```bash
bun run build
```

El resultado de la compilación se generará dentro del directorio `/dist`. Puedes previsualizar la compilación localmente usando:

```bash
bun run preview
```

---

## ⚙️ Configuración Adicional

Si deseas desplegar este portafolio en una ruta diferente o dominio personalizado, edita el archivo `astro.config.mjs`:

```javascript
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://tu-dominio.com/", // Reemplaza con tu URL de producción
  base: "/tu-ruta-base",          // Reemplaza con el subdirectorio del repositorio (si aplica)
  integrations: [tailwind()],
});
```

---

## 📬 Contacto y Redes Sociales

Si deseas ponerte en contacto conmigo para discutir oportunidades laborales, proyectos colaborativos o simplemente charlar sobre tecnología, puedes encontrarme en:

*   **📧 Correo Electrónico:** [carlosgaubertquijada@gmail.com](mailto:carlosgaubertquijada@gmail.com)
*   **💼 LinkedIn:** [Carlos Gaubert Quijada](https://www.linkedin.com/in/carlos-gaub-quijada/)
*   **💻 GitHub:** [@CarlosGaubertQ](https://github.com/CarlosGaubertQ)
