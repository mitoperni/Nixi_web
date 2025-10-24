'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  const t = useTranslations('Home.cta');
  const locale = useLocale();

  return (
    <section className="min-h-[100vh] flex items-center justify-center py-20 px-6 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-white/90 mb-8">{t("description")}</p>
          <Link
            href={`/${locale}/contacto`}
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            {t("button")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
