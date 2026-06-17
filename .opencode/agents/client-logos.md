---
name: client-logos
description: Implementa los logos de empresas cliente en la landing page de Mr. Clean. Reemplaza nombres textuales por imágenes SVG con dos secciones: Clientes y Curriculum. Actívalo cuando tengas los ~38 SVGs listos en public/logos/.
---

# Client Logos — Plan de implementación

## Stack del proyecto
- React 19 + Vite 8 (JSX, sin TypeScript)
- Tailwind CSS 3 + PostCSS + Autoprefixer
- Sin router — single-page landing con scroll sections
- `lucide-react` para iconos
- `lang="es"` — todo el UI en español

## Comandos
| Comando | Acción |
|---------|--------|
| `npm run dev` | Dev server con HMR |
| `npm run build` | Build producción → `dist/` |
| `npm run lint` | ESLint check |

## Requisito previo

Antes de ejecutar este agente, **el usuario debe haber colocado los ~38 SVGs** en `public/logos/` con los nombres exactos listados abajo.

Si falta algún archivo, detener y listar los faltantes.

## Archivos a crear/modificar

### 1. Carpeta de assets (verificar existencia)
`public/logos/` — debe contener estos archivos SVG:

#### Grupo 1 — Clientes (24)
```
mcdonalds.svg           chevrolet.svg           liverpool.svg
suzuki.svg              unach.svg               sears.svg
cubox.svg               toyota.svg              dish-network.svg
farrera-inmobiliarium.svg   farrera-collision.svg   ine.svg
hyundai.svg             plastics-technology.svg     umed.svg
interceramic.svg        farrera.svg             diga-suridora.svg
kia.svg                 nissan.svg              bmw.svg
peugeot.svg             isuzu.svg               sfera.svg
```

#### Grupo 2 — Curriculum Melcon (14)
```
fabricas-andrea.svg     amsa.svg                gonac.svg
diga.svg                olam-agro.svg           acnur.svg
casino-jai.svg          meditec-farma.svg       conalep.svg
canal-diez.svg          sagyp.svg               conciliacion-chiapas.svg
fernandez-merida.svg    icheja.svg
```

### 2. Crear `src/components/Clientes.jsx`

Nuevo componente con:
- `<section id="clientes">` con fondo blanco (`bg-white`)
- Título: "Clientes" con subtítulo "Empresas que confían en nosotros"
- Grid responsive: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5`
- Cards con logo + nombre debajo
- Logo renderizado como `<img>` apuntando a `/logos/{id}.svg`
- Efecto: logo en color, card con `hover:-translate-y-1 hover:shadow-lg hover:border-brand-blue/30`

### 3. Crear `src/components/Curriculum.jsx`

Nuevo componente con:
- `<section id="curriculum">` con fondo brand-navy (`bg-brand-navy`)
- Título: "Curriculum" o "Empresas Atendidas" con subtítulo descriptivo
- Grid responsive similar a Clientes
- Cards con fondo semitransparente (`bg-white/5 backdrop-blur-sm border border-white/10`)
- Logo en grayscale por defecto: `grayscale opacity-70`
- Hover: `hover:grayscale-0 hover:opacity-100`
- Nombre de empresa en texto blanco

### 4. Eliminar `src/components/Empresas.jsx`

Ya no se necesita — reemplazado por Clientes.jsx + Curriculum.jsx

### 5. Modificar `src/App.jsx`

- Eliminar `import Empresas from './components/Empresas.jsx'`
- Agregar `import Clientes from './components/Clientes.jsx'`
- Agregar `import Curriculum from './components/Curriculum.jsx'`
- Renderizar en orden: `<Galeria /> <Clientes /> <Curriculum /> <Certificaciones />`

## Diseño visual detallado

### Clientes.jsx
- Fondo: `bg-white`
- Cards: `bg-gray-50 rounded-2xl border border-gray-100 p-6`
- Logo: `<img>` con `h-12 w-auto object-contain mx-auto`
- Nombre: `font-body text-sm text-gray-600 text-center font-medium`
- Hover card: `hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/10 hover:-translate-y-1`

### Curriculum.jsx
- Fondo: `bg-brand-navy`
- Cards: `bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6`
- Logo default: `grayscale opacity-70`
- Logo hover: `hover:grayscale-0 hover:opacity-100 transition-all duration-300`
- Nombre: `font-body text-sm text-white/70 text-center font-medium`
- Hover card: `hover:border-brand-blue/30 hover:-translate-y-1`

## Validación final

1. `npm run dev` — verificar visualmente que las dos secciones se vean bien
2. `npm run lint` — sin errores de ESLint
3. `npm run build` — build exitoso sin warnings

## Output esperado

Al finalizar, reportar:
- ✓ Archivos creados: Clientes.jsx, Curriculum.jsx
- ✓ Archivo eliminado: Empresas.jsx
- ✓ Archivo modificado: App.jsx
- ✓ Logos encontrados en public/logos/: [N] de [38]
- ⚠ Logos faltantes (si alguno): listarlos
- ✓ Dev / Lint / Build: pass/fail
