import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Nixi - Desarrollo Web en Granada | React y Next.js',
    template: '%s | Nixi'
  },
  description: 'Desarrollo web profesional en Granada. Páginas y aplicaciones web con código real, no plantillas. React, Next.js, SEO optimizado. Kit Digital disponible.',
  keywords: ['desarrollo web Granada', 'programador Granada', 'diseño web Granada', 'React Granada', 'Next.js Granada', 'Kit Digital Granada', 'web developer Granada'],
  authors: [{ name: 'Miguel Toyas Pernichi' }],
  creator: 'Miguel Toyas Pernichi',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://nixi.es',
    title: 'Nixi - Desarrollo Web en Granada',
    description: 'Desarrollo web profesional con código real. React, Next.js, SEO optimizado.',
    siteName: 'Nixi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nixi - Desarrollo Web en Granada',
    description: 'Desarrollo web profesional con código real',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
