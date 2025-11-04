import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

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

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 px-6 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl text-gray-600">{t('hero.description')}</p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 md:mb-16">{t('packages.title')}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => {
              const features = tHome.raw(`packages.${pkg}.features`) as string[];
              const hasBadge = pkg === 'takeoff';

              return (
                <Card key={pkg} className={pkg === 'takeoff' ? 'border-2 border-primary' : ''}>
                  {hasBadge && (
                    <div className="mb-4">
                      <Badge variant="warning" size="sm">
                        {tHome(`packages.${pkg}.badge`)}
                      </Badge>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tHome(`packages.${pkg}.name`)}</h3>
                  <p className="text-gray-600 mb-4">{tHome(`packages.${pkg}.description`)}</p>
                  <div className="text-3xl font-bold gradient-text mb-6">
                    {tHome(`packages.${pkg}.price`)}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${locale}/contacto`}
                    className="block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                  >
                    {locale === 'es' ? 'Solicitar' : 'Request'}
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('custom.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('custom.description')}</p>
          <Link
            href={`/${locale}/contacto`}
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition"
          >
            {t('custom.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
