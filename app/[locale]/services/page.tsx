import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ServicesSection } from '@/components/ui/services-pricing';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.pages.services' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ServiciosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Services');
  const tHome = await getTranslations('Home.services');

  const packages = ['impulse', 'takeoff', 'ecommerce'];

  // Preparar los datos para el componente ServicesSection
  const servicePlans = packages.map((pkg) => ({
    name: tHome(`packages.${pkg}.name`),
    description: tHome(`packages.${pkg}.description`),
    price: tHome(`packages.${pkg}.price`),
    features: tHome.raw(`packages.${pkg}.features`) as string[],
    buttonText: locale === 'es' ? 'Solicitar' : 'Request',
    href: `/${locale}/contacto`,
    isPopular: pkg === 'takeoff',
  }));

  // Marquee items - obtener desde traducciones
  const marqueeItems = t.raw('custom.marqueeItems') as string[];

  return (
    <ServicesSection
      hero={{
        title: t('hero.title'),
        description: t('hero.description'),
      }}
      pricing={{
        title: t('packages.title'),
        plans: servicePlans,
      }}
      customCTA={{
        title: t('custom.title'),
        description: t('custom.description'),
        buttonText: t('custom.button'),
        buttonHref: `/${locale}/contacto`,
        marqueeItems,
      }}
    />
  );
}
