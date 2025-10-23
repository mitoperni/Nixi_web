import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Kit Digital - Ayudas hasta 12.000€',
    description: 'Financia tu web con el Kit Digital. Ayudas del gobierno español de hasta 12.000€ para digitalizar tu negocio.',
  };
}

export default async function KitDigitalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('KitDigital');
  const tHome = await getTranslations('Home.kitDigital');

  const tiers = ['small', 'medium', 'large'];
  const requirements = t.raw('requirements.items') as string[];
  const processSteps = t.raw('process.steps') as string[];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-violet-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="warning" size="md">
            {locale === 'es' ? 'AYUDAS DISPONIBLES' : 'GRANTS AVAILABLE'}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6">{t('hero.title')}</h1>
          <p className="text-xl text-gray-600">{t('hero.description')}</p>
        </div>
      </section>

      {/* What is Kit Digital */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">{t('what.title')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t('what.description')}</p>
        </div>
      </section>

      {/* Amounts */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('amounts.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <Card key={tier} className="text-center">
                <div className="text-5xl font-bold gradient-text mb-4">
                  {tHome(`tiers.${tier}.amount`)}
                </div>
                <p className="text-gray-600 text-lg">{tHome(`tiers.${tier}.employees`)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">{t('requirements.title')}</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ul className="space-y-4">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t('process.title')}</h2>
          <div className="space-y-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex items-start bg-white rounded-xl p-6 shadow-md">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-gray-700 text-lg pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('cta.description')}</p>
          <Link
            href={`/${locale}/contacto`}
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
