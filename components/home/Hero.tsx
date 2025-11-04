'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';

export default function Hero() {
  const t = useTranslations('Home.hero');
  const locale = useLocale();

  const getLocalizedPath = (path: string) => `/${locale}${path}`;

  return (
    <section className="min-h-[100vh] flex items-center justify-center py-20 px-6 bg-gradient-to-b from-violet-50 to-white items-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6">
            <Badge variant="primary">{t("badge")}</Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {t("title.normal")}{" "}
            <span className="gradient-text">{t("title.highlight")}</span>,{" "}
            {t("title.end")}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={getLocalizedPath("/contacto")}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition"
            >
              {t("cta.primary")}
            </Link>
            <Link
              href={getLocalizedPath("/servicios")}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition"
            >
              {t("cta.secondary")}
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {["100%", "A+", "SEO", "24h"].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat}
              </div>
              <div className="text-sm text-gray-600">{t(`stats.${idx}`)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
