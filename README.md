# Mr. Clean Soluciones de Limpieza

Landing page profesional para Mr. Clean — servicios de limpieza para hogares, oficinas, comercios e industrias en Chiapas, México.

## Stack

- **React 19** + **Vite 8** (JSX, sin TypeScript)
- **Tailwind CSS 3** con PostCSS + Autoprefixer
- **ESLint** (flat config)
- Sin router — SPA estático de una sola página con scroll sections

## Scripts

| Comando | Acción |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo con HMR |
| `npm run build` | Build de producción → `dist/` |
| `npm run preview` | Previsualiza build de producción |
| `npm run lint` | ESLint — todo el proyecto |

## Arquitectura

- **10 componentes** en `src/components/`: Navbar, Hero, Nosotros, Servicios, Galeria, Clientes, Curriculum, Certificaciones, Contacto, Footer, WhatsAppFloat, Modal
- Hook personalizado `useInView` para animaciones con IntersectionObserver
- Formularios de cotización y empleo conectados a **Web3Forms** (2 API keys en `.env` para redundancia)
- Número de WhatsApp centralizado en `src/constants.js`
- Botón flotante de WhatsApp con mensaje contextual según la sección

## Variables de entorno

Copiar `.env` y reemplazar:

```
VITE_WEB3FORMS_KEY=tu-access-key
VITE_WEB3FORMS_KEY2=tu-segunda-access-key
```

Registrarse dos veces en [web3forms.com](https://web3forms.com) para obtener dos keys. El envío se duplica para mayor confiabilidad.
