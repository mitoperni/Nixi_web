'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Pricing } from '@/components/ui/Pricing';

export default function Services() {
  const t = useTranslations('Home.services');
  const locale = useLocale();

  // Transform the translation data into the pricing component format
  const plans = [
    {
      name: t('packages.impulse.name'),
      price: t('packages.impulse.price'),
      features: t.raw('packages.impulse.features') as string[],
      description: t('packages.impulse.description'),
      buttonText: locale === 'es' ? 'Solicitar' : 'Request',
      href: '/contact',
      isPopular: false,
    },
    {
      name: t('packages.takeoff.name'),
      price: t('packages.takeoff.price'),
      features: t.raw('packages.takeoff.features') as string[],
      description: t('packages.takeoff.description'),
      buttonText: locale === 'es' ? 'Solicitar' : 'Request',
      href: '/contact',
      isPopular: true,
    },
    {
      name: t('packages.ecommerce.name'),
      price: t('packages.ecommerce.price'),
      features: t.raw('packages.ecommerce.features') as string[],
      description: t('packages.ecommerce.description'),
      buttonText: locale === 'es' ? 'Solicitar' : 'Request',
      href: '/contact',
      isPopular: false,
    },
  ];

  return (
    <section className="min-h-[100vh] flex items-center justify-center py-20 px-6 bg-white">
      <Pricing
        plans={plans}
        title={t('title')}
        description={t('subtitle')}
      />
    </section>
  );
}
