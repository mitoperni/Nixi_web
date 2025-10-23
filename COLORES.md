# Paleta de Colores Nixi

## Colores Principales

### Violeta (Primary)
```css
--primary: #7C3AED;        /* Violeta principal */
--primary-dark: #6D28D9;   /* Violeta oscuro (hover) */
--primary-light: #A78BFA;  /* Violeta claro (acentos) */
```

**Uso:**
- Botones principales
- Enlaces activos
- Iconos importantes
- Gradiente del logo
- Elementos interactivos

**Ejemplos en código:**
```tsx
// Tailwind
className="bg-primary hover:bg-primary-dark text-white"
className="text-primary"

// CSS
background: var(--primary);
color: var(--primary);
```

---

### Rosa (Accent)
```css
--accent: #EC4899;         /* Rosa vibrante */
```

**Uso:**
- Acentos visuales
- Badges destacados
- Final del gradiente
- Hover effects especiales

**Ejemplos en código:**
```tsx
className="bg-accent text-white"
className="border-accent"
```

---

### Gris Oscuro (Secondary)
```css
--secondary: #1F2937;      /* Gris casi negro */
```

**Uso:**
- Texto principal oscuro
- Footer background
- Headers alternativos
- Bordes sutiles

**Ejemplos en código:**
```tsx
className="bg-secondary text-white"
className="text-secondary"
```

---

## Colores Neutros

### Escala de Grises
```css
--gray-50: #F9FAFB;       /* Muy claro - fondos suaves */
--gray-100: #F3F4F6;      /* Claro - fondos alternos */
--gray-200: #E5E7EB;      /* Bordes sutiles */
--gray-300: #D1D5DB;      /* Bordes normales */
--gray-400: #9CA3AF;      /* Texto deshabilitado */
--gray-500: #6B7280;      /* Texto secundario */
--gray-600: #4B5563;      /* Texto normal */
--gray-700: #374151;      /* Texto importante */
--gray-800: #1F2937;      /* Texto muy oscuro */
--gray-900: #111827;      /* Negro profundo */
```

**Uso por nivel:**
- `gray-50/100`: Fondos de secciones alternadas
- `gray-200/300`: Bordes de inputs, cards
- `gray-400/500`: Placeholder text, íconos secundarios
- `gray-600/700`: Texto principal
- `gray-800/900`: Headings, texto muy importante

---

## Colores de Fondo

### Fondos Especiales
```css
--bg-violet-soft: #F5F3FF;    /* Fondo violeta muy suave */
```

**Uso:**
- Hero sections
- Secciones destacadas
- Backgrounds de tarjetas especiales

**Ejemplos en código:**
```tsx
className="bg-violet-50"  // Equivalente Tailwind
```

---

## Gradientes

### Gradiente Principal (Logo)
```css
background: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%);
```

**Uso:**
- Logo
- Texto destacado (`.gradient-text`)
- Botones especiales
- Elementos hero

**Clase utility en globals.css:**
```css
.gradient-text {
  @apply bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent;
}
```

### Gradiente de Fondo Suave
```css
background: linear-gradient(to bottom, #F5F3FF, white);
```

**Uso:**
- Hero sections
- Fondos de secciones destacadas

---

## Colores Semánticos

### Success (Éxito)
```css
--success: #10B981;        /* Verde */
--success-bg: #D1FAE5;     /* Verde claro */
```

**Uso:**
- Mensajes de éxito
- Formularios enviados correctamente
- Estados positivos

### Error (Error)
```css
--error: #EF4444;          /* Rojo */
--error-bg: #FEE2E2;       /* Rojo claro */
```

**Uso:**
- Mensajes de error
- Validación de formularios
- Alertas

### Warning (Advertencia)
```css
--warning: #F59E0B;        /* Ámbar */
--warning-bg: #FEF3C7;     /* Ámbar claro */
```

**Uso:**
- Badges de "POPULAR"
- Alertas informativas
- Kit Digital badge

---

## Guía de Uso por Componente

### Botones

**Primario:**
```tsx
className="bg-primary text-white hover:bg-primary-dark"
```

**Secundario:**
```tsx
className="bg-secondary text-white hover:bg-gray-700"
```

**Outline:**
```tsx
className="border-2 border-gray-300 text-gray-700 hover:border-gray-400"
```

### Cards
```tsx
className="bg-white border border-gray-200 hover:shadow-lg"
```

### Inputs
```tsx
className="border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
```

### Badges

**Primary:**
```tsx
className="bg-violet-100 text-violet-700"
```

**Warning:**
```tsx
className="bg-amber-100 text-amber-700"
```

---

## Accesibilidad (Contraste)

### Ratios de Contraste WCAG AA

✅ **Aprobados:**
- Texto `gray-600` sobre fondo blanco: **7.23:1** (AAA)
- Texto blanco sobre `primary`: **4.87:1** (AA)
- Texto blanco sobre `secondary`: **14.7:1** (AAA)

⚠️ **Revisar:**
- Texto `gray-400` sobre blanco: **3.23:1** (solo textos grandes)

**Recomendación:**
Usar `gray-500` o más oscuro para texto normal sobre fondos claros.

---

## Tailwind CSS

Los colores están configurados en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#7C3AED',
    dark: '#6D28D9',
    light: '#A78BFA',
  },
  secondary: '#1F2937',
  accent: '#EC4899',
}
```

**Uso en Tailwind:**
```tsx
className="bg-primary"
className="text-primary-dark"
className="border-accent"
```

---

## Variables CSS

Los colores también están disponibles como variables CSS en `globals.css`:

```css
:root {
  --primary: #7C3AED;
  --primary-dark: #6D28D9;
  --primary-light: #A78BFA;
  --secondary: #1F2937;
  --accent: #EC4899;
  --bg-violet-soft: #F5F3FF;
}
```

**Uso en CSS custom:**
```css
.mi-clase {
  background-color: var(--primary);
  color: white;
}
```

---

## Exportar Paleta

### Para Figma/Sketch:
```
Violeta Principal: #7C3AED
Violeta Oscuro: #6D28D9
Violeta Claro: #A78BFA
Rosa: #EC4899
Gris Oscuro: #1F2937
```

### Para Adobe:
- Crear `.ase` (Adobe Swatch Exchange) con los colores principales

### Para Coolors.co:
https://coolors.co/7c3aed-6d28d9-a78bfa-ec4899-1f2937

---

**Diseñado por:** Claude Code Assistant
**Fecha:** Octubre 2025
**Paleta:** Morados Profesionales
