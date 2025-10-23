# Nixi Website

Web corporativa profesional de Nixi - Desarrollo web en Granada con código real.

## Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Internacionalización**: next-intl (Español/Inglés)
- **Formularios**: React Hook Form + Zod
- **Validación**: Zod

## Características

- Diseño responsive y moderno
- Multiidioma (ES/EN)
- SEO optimizado con metadata y Schema.org
- Formulario de contacto con validación
- Blog preparado para MDX
- Animaciones suaves con Framer Motion
- Paleta de colores morados profesionales
- Kit Digital información destacada

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## Estructura del Proyecto

```
nixi-website/
├── app/
│   ├── [locale]/           # Rutas internacionalizadas
│   ├── api/                # API routes
│   └── globals.css         # Estilos globales
├── components/
│   ├── layout/             # Header, Footer, etc.
│   ├── home/               # Componentes de homepage
│   ├── ui/                 # Componentes UI reutilizables
│   └── forms/              # Formularios
├── messages/               # Archivos de traducción
├── public/                 # Archivos estáticos
└── lib/                    # Utilidades

```

## Variables de Entorno

Copia `.env.example` a `.env.local` y configura las variables:

```env
# Resend API (para emails de contacto)
RESEND_API_KEY=your_api_key_here

# URL del sitio
NEXT_PUBLIC_SITE_URL=https://nixi.es
```

## Configuración de Email

Para que el formulario de contacto envíe emails, necesitas:

1. Crear una cuenta en [Resend](https://resend.com)
2. Obtener tu API key
3. Configurarla en `.env.local`
4. Descomentar el código en `app/api/contact/route.ts`

## Páginas Implementadas

- `/` - Homepage con todas las secciones
- `/servicios` - Detalle de paquetes de servicios
- `/portfolio` - Proyectos (con placeholders)
- `/kit-digital` - Información sobre ayudas Kit Digital
- `/sobre-nixi` - Historia, valores y tecnologías
- `/blog` - Listado de artículos (preparado para MDX)
- `/blog/[slug]` - Plantilla para posts individuales
- `/contacto` - Formulario de contacto

## SEO

- Metadata optimizada en cada página
- Schema.org structured data (LocalBusiness)
- Open Graph tags
- Robots.txt configurado
- Sitemap automático

## Desarrollo

El proyecto usa:
- TypeScript para type safety
- ESLint para linting
- Prettier (recomendado configurar)

## Despliegue

Recomendado en Vercel:

```bash
# Push a GitHub
git push origin main

# Conecta el repositorio en Vercel
# Configura las variables de entorno
# Deploy automático
```

## Personalización

### Colores

Los colores están definidos en `tailwind.config.ts` y `app/globals.css`:

```css
--primary: #7C3AED;        /* Violeta principal */
--primary-dark: #6D28D9;   /* Violeta oscuro */
--primary-light: #A78BFA;  /* Violeta claro */
```

### Traducciones

Edita `messages/es.json` y `messages/en.json` para cambiar textos.

## Autor

**Miguel Toyas Pernichi**
Desarrollo web profesional en Granada
[nixi.es](https://nixi.es)

## Licencia

Todos los derechos reservados © 2024 Nixi
