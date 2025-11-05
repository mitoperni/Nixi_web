import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import WhyCodeReal from '@/components/home/WhyCodeReal';
import Process from '@/components/home/Process';
import CTA from '@/components/home/CTA';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

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
      <WhyCodeReal />
      <Process />
      <CTA />
    </>
  );
}
