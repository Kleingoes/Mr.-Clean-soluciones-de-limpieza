# Mr. Clean Soluciones de Limpieza

<p align="center">
  <a href="https://mr-clean-soluciones-de-limpieza.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/deployed%20on-Vercel-000000?logo=vercel&style=flat-square" alt="Deployed on Vercel" />
  </a>
</p>

Landing page profesional para **Mr. Clean Soluciones de Limpieza** — servicios de limpieza para hogares, oficinas, comercios e industrias en Tuxtla Gutiérrez, Chiapas, México.

**Sitio en vivo:** [mr-clean-soluciones-de-limpieza.vercel.app](https://mr-clean-soluciones-de-limpieza.vercel.app/)

## Stack

- **React 19** + **Vite 8** (JSX, sin TypeScript)
- **Tailwind CSS 3** con PostCSS + Autoprefixer
- **ESLint** (flat config)
- **Lucide React** para iconografía vectorial
- Sin router — SPA estático de una sola página con scroll sections

## Características

- Diseño responsivo (móvil, tableta, escritorio)
- Barra de navegación fija con menú hamburguesa
- Galería de trabajos con slider interactivo antes/después
- Carrusel animado de logos de clientes (23 empresas)
- Sección de currículum con empresas atendidas
- Certificación REPSE visible
- Formulario de cotización (10 servicios) y formulario de empleo
- Sistema de seguridad anti-spam de 4 capas (honeypot, time gate, rate limit, validación de correo)
- Sanitización XSS en todos los formularios
- Envío doble a Web3Forms para redundancia
- Meta tags OG para redes sociales
- Lazy loading en imágenes
- Botón flotante de WhatsApp con mensaje contextual

## Scripts

| Comando | Acción |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo con HMR |
| `npm run build` | Build de producción → `dist/` |
| `npm run preview` | Previsualiza build de producción |
| `npm run lint` | ESLint — todo el proyecto |

## Arquitectura

- **16 componentes** en `src/components/`: Navbar, Hero, Nosotros, Servicios, Galeria, Clientes, Curriculum, Cotizacion, Contacto, FormCotizacion, FormEmpleo, formHelpers, Modal, TrabajaConNosotros, WhatsAppFloat, Footer
- Hook personalizado `useInView` para animaciones con IntersectionObserver
- Formularios de cotización y empleo conectados a **Web3Forms** (2 API keys en `.env` para redundancia)
- Número de WhatsApp centralizado en `src/constants.js`
- Botón flotante de WhatsApp con mensaje contextual según la sección

## Despliegue

El sitio está desplegado en **Vercel** con integración continua desde GitHub:

```
https://mr-clean-soluciones-de-limpieza.vercel.app/
```

Para generar el build de producción localmente:

```bash
npm run build
```

## Variables de entorno

Copiar `.env` y reemplazar:

```
VITE_WEB3FORMS_KEY=tu-access-key
VITE_WEB3FORMS_KEY2=tu-segunda-access-key
```

Registrarse dos veces en [web3forms.com](https://web3forms.com) para obtener dos keys. El envío se duplica para mayor confiabilidad.
