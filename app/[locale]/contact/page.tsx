import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { MapPin, Clock, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import Card from '@/components/ui/Card';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.pages.contact' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ContactoPage() {
  const t = await getTranslations('Contact');

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl text-gray-600">{t('hero.description')}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">{t('info.title')}</h2>

              <div className="space-y-6">
                <Card hover={false}>
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('info.location')}</h3>
                      <p className="text-gray-600">Granada, España</p>
                    </div>
                  </div>
                </Card>

                <Card hover={false}>
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('info.response')}</h3>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">{t('info.whyTitle')}</h3>
                <ul className="space-y-4">
                  {(['why1', 'why2', 'why3'] as const).map((key) => (
                    <li key={key} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{t(`info.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <h2 className="text-3xl font-bold mb-8">{t('form.title')}</h2>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
