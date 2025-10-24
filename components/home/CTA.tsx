'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, MessageCircle } from 'lucide-react';

export default function CTA() {
  const t = useTranslations('Home.cta');
  const locale = useLocale();

  const badges = [
    { icon: CheckCircle, text: t('badges.noCommitment') },
    { icon: Clock, text: t('badges.fastResponse') },
    { icon: MessageCircle, text: t('badges.freeConsulting') },
  ];

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center py-20 px-6 bg-gradient-to-br from-primary via-purple-600 to-accent overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-8"
          >
            <span className="px-6 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-medium shadow-lg">
              {t('topBadge')}
            </span>
          </motion.div>

          {/* Glassmorphism container */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('title')}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('description')}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-medium"
                >
                  <badge.icon className="w-4 h-4" />
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center"
            >
              <Link
                href={`/${locale}/contacto`}
                className="group inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-xl text-lg font-bold shadow-2xl hover:shadow-white/25 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                {t('button')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
