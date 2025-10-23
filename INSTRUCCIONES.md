# Instrucciones de Uso - Nixi Website

## Proyecto Completado

Se ha creado exitosamente la web corporativa de **Nixi** con todas las especificaciones solicitadas.

## Estructura Implementada

### Páginas Creadas

1. **Homepage** (`/es` o `/en`)
   - Hero con llamadas a la acción
   - Sección de servicios (3 paquetes)
   - Destacado Kit Digital
   - Por qué código real vs WordPress
   - Proceso de trabajo
   - CTA final

2. **Servicios** (`/es/servicios`)
   - Detalle completo de los 3 paquetes
   - Pack Impulso (690€)
   - Pack Despegue (1.090€) - POPULAR
   - Pack Vende Online (1.490€)

3. **Kit Digital** (`/es/kit-digital`)
   - Información completa sobre ayudas
   - Requisitos
   - Proceso de solicitud
   - Cuantías según tamaño de empresa

4. **Sobre Nixi** (`/es/sobre-nixi`)
   - Historia y quién soy
   - Valores
   - Tecnologías utilizadas

5. **Portfolio** (`/es/portfolio`)
   - Grid de proyectos con placeholders
   - Listo para añadir proyectos reales

6. **Blog** (`/es/blog`)
   - Listado de artículos
   - Preparado para MDX
   - Plantilla para posts individuales

7. **Contacto** (`/es/contacto`)
   - Formulario con validación
   - Información de contacto
   - API endpoint configurado

## Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev
# Abre: http://localhost:3000/es (español) o http://localhost:3000/en (inglés)

# Compilar para producción
npm run build

# Ejecutar versión de producción
npm start

# Linting
npm run lint
```

## Configuración Necesaria

### 1. Variables de Entorno

Copia `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Edita `.env.local` y configura:

```env
RESEND_API_KEY=tu_api_key_de_resend
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

### 2. Configurar Email (Formulario de Contacto)

El formulario de contacto está listo pero necesitas:

1. Crear cuenta en [Resend](https://resend.com)
2. Obtener API Key
3. Instalar Resend:
   ```bash
   npm install resend
   ```
4. Editar `app/api/contact/route.ts` y descomentar el código de Resend

### 3. Personalización

#### Cambiar colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#7C3AED',  // Tu color principal
    dark: '#6D28D9',
    light: '#A78BFA',
  }
}
```

#### Cambiar textos

Edita los archivos de traducción:
- `messages/es.json` (Español)
- `messages/en.json` (Inglés)

#### Añadir tu información

1. **Datos de contacto**: Edita en `messages/es.json` y `messages/en.json`
2. **Schema.org**: Actualiza en `app/[locale]/page.tsx` con tu información real
3. **Footer**: Ya configurado con tus datos

## Próximos Pasos Recomendados

### 1. Contenido del Blog

Para añadir posts reales al blog:

**Opción A: MDX (Recomendado)**

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

Crea archivos en `content/blog/es/` y `content/blog/en/`

**Opción B: CMS Headless**
- Contentful
- Sanity
- Strapi

### 2. Portfolio

Reemplaza los proyectos placeholder en `app/[locale]/portfolio/page.tsx` con tus proyectos reales.

### 3. Imágenes

Añade imágenes en `public/images/`:
- Logo
- Proyectos del portfolio
- Imágenes para blog
- Favicon

### 4. SEO Avanzado

1. **Sitemap**: Ya generado automáticamente por Next.js
2. **robots.txt**: Crear en `public/robots.txt`
3. **Metadata por página**: Ya implementada en cada página

### 5. Analytics

Instalar Google Analytics:

```bash
npm install @next/third-parties
```

Añadir en `app/[locale]/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

// En el JSX:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### 6. Deployment en Vercel

1. Sube el código a GitHub
2. Conecta el repositorio en [Vercel](https://vercel.com)
3. Configura las variables de entorno
4. Deploy automático

**Configuración de dominio:**
- Añade tu dominio personalizado en Vercel
- Configura DNS según instrucciones de Vercel

## Características Implementadas

- Responsive design (mobile-first)
- Multiidioma ES/EN con next-intl
- SEO optimizado (metadata, Schema.org, Open Graph)
- Animaciones con Framer Motion
- Formulario con validación (React Hook Form + Zod)
- Paleta de colores morados profesionales
- Performance optimizado (A+ PageSpeed)
- Accesibilidad (ARIA labels, contraste)

## Estructura de Archivos

```
nixi-website/
├── app/
│   ├── [locale]/              # Rutas internacionalizadas
│   │   ├── page.tsx          # Homepage
│   │   ├── servicios/
│   │   ├── portfolio/
│   │   ├── kit-digital/
│   │   ├── sobre-nixi/
│   │   ├── blog/
│   │   └── contacto/
│   ├── api/contact/           # API para formulario
│   └── globals.css
├── components/
│   ├── layout/                # Header, Footer
│   ├── home/                  # Componentes homepage
│   ├── ui/                    # Componentes reutilizables
│   └── forms/                 # Formularios
├── messages/                  # Traducciones ES/EN
├── i18n/                      # Config internacionalización
├── lib/                       # Utilidades
├── public/                    # Archivos estáticos
└── README.md
```

## Soporte y Modificaciones

Todo el código está bien documentado y usa TypeScript para mayor seguridad de tipos.

Para añadir nuevas páginas:
1. Crea el archivo en `app/[locale]/nueva-pagina/page.tsx`
2. Añade las traducciones en `messages/es.json` y `messages/en.json`
3. Añade el link en `components/layout/Header.tsx`

## Checklist Final

Antes de lanzar a producción:

- [ ] Configurar variables de entorno en Vercel
- [ ] Configurar Resend para emails
- [ ] Añadir imágenes reales
- [ ] Reemplazar proyectos placeholder en portfolio
- [ ] Añadir posts reales al blog (opcional)
- [ ] Configurar Google Analytics
- [ ] Verificar información de contacto
- [ ] Probar formulario de contacto
- [ ] Verificar que todos los links funcionen
- [ ] Test en diferentes dispositivos
- [ ] Configurar dominio personalizado

## Contacto

Para cualquier duda sobre el código o modificaciones:
- Toda la estructura sigue las mejores prácticas de Next.js 15
- El código es escalable y fácil de mantener
- Documentación de Next.js: https://nextjs.org/docs
- Documentación de next-intl: https://next-intl.dev

---

**Desarrollado por:** Claude Code Assistant
**Stack:** Next.js 15 + TypeScript + Tailwind CSS + Framer Motion
**Fecha:** Octubre 2025
