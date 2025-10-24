'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { motion } from 'framer-motion';

export default function KitDigital() {
  const t = useTranslations('Home.kitDigital');
  const locale = useLocale();

  const tiers = ['small', 'medium', 'large'];

  return (
    <section className="min-h-[100vh] flex items-center justify-center py-20 px-6 bg-gradient-to-br from-violet-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="warning">{t("badge")}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-5xl font-bold gradient-text mb-3">
                {t(`tiers.${tier}.amount`)}
              </div>
              <p className="text-gray-600">{t(`tiers.${tier}.employees`)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href={`/${locale}/kit-digital`}
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition"
          >
            {t("cta")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
