'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Logo from '@/components/ui/Logo';

interface LanguageModalProps {
  isOpen: boolean;
  currentLanguage: string;
  onConfirm: () => void;
  onSwitch: () => void;
}

const oppositeLanguage = {
  es: 'en',
  en: 'es',
};

export const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  currentLanguage,
  onConfirm,
  onSwitch,
}) => {
  const t = useTranslations('languageModal');
  const tLang = useTranslations('languages');

  const currentLangName = tLang(currentLanguage as 'es' | 'en');
  const oppositeLangCode = oppositeLanguage[currentLanguage as keyof typeof oppositeLanguage];
  const oppositeLangName = tLang(oppositeLangCode as 'es' | 'en');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[51]"
            onClick={onConfirm}
          />

          {/* Modal */}
          <div className="fixed inset-4 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:inset-auto sm:w-full sm:max-w-md z-[52] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.2, ease: 'easeOut', delay: 0.5 }
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
                transition: { duration: 0.2, ease: 'easeOut' }
              }}
              className="bg-white border border-primary/20 rounded-2xl shadow-2xl p-6 sm:p-8 w-full"
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <Logo variant="default" width={120} height={60} />
              </div>

              {/* Título */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-3 sm:mb-4">
                {t('title')}
              </h2>

              {/* Mensaje */}
              <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8 leading-relaxed">
                {t('message', { language: currentLangName })}
              </p>

              {/* Botones */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={onConfirm}
                  className="w-full px-4 sm:px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 text-sm sm:text-base active:scale-95"
                >
                  {t('keep', { language: currentLangName })}
                </button>

                <button
                  onClick={onSwitch}
                  className="w-full px-4 sm:px-6 py-3 bg-transparent border border-primary/30 text-gray-700 font-medium rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 text-sm sm:text-base active:scale-95"
                >
                  {t('switch', { language: oppositeLangName })}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
