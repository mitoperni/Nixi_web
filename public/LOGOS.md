# Logos de Nixi

## Archivos Creados

### 1. **logo.svg** (200x60px)
Logo completo con icono + texto "Nixi" + subtítulo "WEB DEV"
- **Uso:** Header, documentos, marketing
- **Colores:** Gradiente violeta (#7C3AED) a rosa (#EC4899)
- **Fondo:** Transparente / Fondos claros

### 2. **logo-white.svg** (200x60px)
Logo completo en blanco
- **Uso:** Footer, fondos oscuros
- **Colores:** Blanco con opacidad
- **Fondo:** Fondos oscuros (#1F2937, etc.)

### 3. **logo-icon.svg** (60x60px)
Solo el icono hexagonal con símbolos de código
- **Uso:** Redes sociales, avatar, favicon grande
- **Colores:** Gradiente violeta a rosa
- **Formato:** Cuadrado

### 4. **app/icon.svg** (32x32px)
Favicon simplificado
- **Uso:** Favicon del navegador
- **Colores:** Gradiente violeta a rosa
- **Formato:** Cuadrado, optimizado para tamaños pequeños
- **Nota:** Next.js 15 lo usa automáticamente como favicon

## Componente React: Logo.tsx

Ubicación: `components/ui/Logo.tsx`

### Uso básico:

```tsx
import Logo from '@/components/ui/Logo';

// Logo por defecto (con texto)
<Logo />

// Logo blanco para fondos oscuros
<Logo variant="white" />

// Solo el icono
<Logo variant="icon" />

// Con tamaño personalizado
<Logo width={150} height={45} />

// Con clases adicionales
<Logo className="hover:opacity-80 transition" />
```

### Props:

- `variant`: 'default' | 'white' | 'icon'
- `width`: número (opcional)
- `height`: número (opcional)
- `className`: string (opcional)

## Concepto del Logo

### Elementos del diseño:

1. **Hexágono**
   - Representa estabilidad y estructura
   - Forma geométrica moderna
   - Asociada con tecnología y desarrollo

2. **Símbolos de código < / >**
   - Representan el desarrollo web
   - Código real, no plantillas
   - Expertise técnico

3. **Gradiente Violeta-Rosa**
   - #7C3AED (Violeta) → #EC4899 (Rosa)
   - Colores modernos y profesionales
   - Distintivo y memorable

4. **Tipografía**
   - "Nixi" en negrita (bold)
   - Subtítulo "WEB DEV" en mayúsculas
   - Limpia y profesional

## Implementación Actual

✅ **Header**: Logo completo (120x36px)
✅ **Footer**: Logo blanco (120x36px)
✅ **Favicon**: Automático desde app/icon.svg

## Variaciones Adicionales Posibles

Si necesitas más variaciones, puedes crear:

1. **Logo horizontal compacto** (sin subtítulo)
2. **Logo vertical** (icono arriba, texto abajo)
3. **Logo monocromo** (para impresión B&N)
4. **Logo con claim** ("Tu web con código real")

## Exportar a otros formatos

Para convertir los SVG a PNG/JPG si lo necesitas:

### Opción 1: Online
- https://cloudconvert.com/svg-to-png
- Subir el archivo SVG
- Elegir resolución (ej: 1000px ancho)

### Opción 2: Figma/Illustrator
- Importar SVG
- Exportar como PNG en diferentes tamaños

### Opción 3: Comandos (si tienes ImageMagick)
```bash
# Instalar ImageMagick
brew install imagemagick

# Convertir
convert logo.svg -resize 1000x logo.png
```

## Tamaños Recomendados para Redes Sociales

- **Twitter/X**: 400x400px (usar logo-icon.svg)
- **LinkedIn**: 300x300px (usar logo-icon.svg)
- **Facebook**: 180x180px (usar logo-icon.svg)
- **Instagram**: 320x320px (usar logo-icon.svg)
- **Open Graph**: 1200x630px (crear banner con logo + texto)

## Colores de Marca

```css
/* Principales */
--primary: #7C3AED;        /* Violeta principal */
--primary-dark: #6D28D9;   /* Violeta oscuro */
--primary-light: #A78BFA;  /* Violeta claro */

--secondary: #1F2937;      /* Gris oscuro */
--accent: #EC4899;         /* Rosa */

/* Gradiente del logo */
background: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%);
```

---

**Diseñado por:** Claude Code Assistant
**Fecha:** Octubre 2025
**Licencia:** Todos los derechos reservados © Nixi
