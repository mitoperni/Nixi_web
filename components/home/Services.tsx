'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { motion } from 'framer-motion';

export default function Services() {
  const t = useTranslations('Home.services');
  const locale = useLocale();

  const packages = [
    {
      key: 'impulse',
      featured: false,
    },
    {
      key: 'takeoff',
      featured: true,
    },
    {
      key: 'ecommerce',
      featured: false,
    },
  ];

  return (
    <section className="min-h-[100vh] flex items-center justify-center py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => {
            const features = t.raw(`packages.${pkg.key}.features`) as string[];
            const hasBadge = pkg.key === "takeoff";

            return (
              <motion.div
                key={pkg.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className={pkg.featured ? "border-2 border-primary" : ""}>
                  {hasBadge && (
                    <div className="mb-4">
                      <Badge variant="warning" size="sm">
                        {t(`packages.${pkg.key}.badge`)}
                      </Badge>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">
                    {t(`packages.${pkg.key}.name`)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(`packages.${pkg.key}.description`)}
                  </p>
                  <div className="text-3xl font-bold gradient-text mb-6">
                    {t(`packages.${pkg.key}.price`)}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
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
                    {locale === "es" ? "Solicitar" : "Request"}
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
