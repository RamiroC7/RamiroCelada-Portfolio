# Portfolio de Ramiro Celada

Página personal con mis proyectos, en español e inglés.

## Qué hay en cada archivo

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La estructura de la página (las secciones). |
| `data.js` | **Todo el texto.** Para cambiar o sumar un proyecto, se edita acá. |
| `styles.css` | Los colores, tipografías y animaciones. |
| `main.js` | La lógica: arma la página con los textos y cambia el idioma. |
| `assets/img/` | Tu foto. |
| `assets/projects/` | Las capturas de los proyectos. |

## Cómo verla en tu compu

Abrí `index.html` con doble clic y se ve en el navegador. No hace falta instalar nada.

## Cómo publicarla (gratis)

1. Creá un repositorio nuevo en GitHub (por ejemplo `portfolio`) y subí todos estos archivos.
2. Entrá a [vercel.com](https://vercel.com), iniciá sesión con GitHub y tocá **Add New → Project**.
3. Elegí el repositorio y tocá **Deploy**. No hay que configurar nada.
4. Vercel te da un link tipo `portfolio-ramiro.vercel.app`. Cada vez que subas un cambio a GitHub, la página se actualiza sola.

## Cómo sumar un proyecto

En `data.js`, dentro de `projects`, copiá uno de los bloques `{ ... }` y cambiá los textos. Cada texto tiene su versión `es` (español) y `en` (inglés).

## Cómo sumar capturas de un proyecto

1. Guardá las imágenes en `assets/projects/` (por ejemplo `carga-1.png`, `carga-2.png`).
2. En `data.js`, buscá el proyecto y completá `images`, por ejemplo: `images: ["assets/projects/carga-1.png", "assets/projects/carga-2.png"]`.
3. Listo: al abrir el proyecto, en lugar de la demo se ven tus capturas y se pueden deslizar.
