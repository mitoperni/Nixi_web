import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import KitDigital from '@/components/home/KitDigital';
import WhyCodeReal from '@/components/home/WhyCodeReal';
import Process from '@/components/home/Process';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Nixi - Desarrollo Web en Granada | React y Next.js',
  description: 'Desarrollo web profesional en Granada. Páginas y aplicaciones web con código real, no plantillas. React, Next.js, SEO optimizado. Kit Digital disponible.',
};

export default function HomePage() {
  // Schema.org structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Nixi',
    description: 'Desarrollo web profesional en Granada con código real',
    url: 'https://nixi.es',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Granada',
      addressRegion: 'Andalucía',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.1773,
      longitude: -3.5986,
    },
    priceRange: '€€',
    openingHours: 'Mo-Fr 09:00-18:00',
    founder: {
      '@type': 'Person',
      name: 'Miguel Toyas Pernichi',
    },
    areaServed: {
      '@type': 'City',
      name: 'Granada',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <KitDigital />
      <WhyCodeReal />
      <Process />
      <CTA />
    </>
  );
}
