'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Logo from '@/components/ui/Logo';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const getLocalizedPath = (path: string) => `/${locale}${path}`;

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href={getLocalizedPath('/')} className="flex items-center">
            <Logo width={120} height={36} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
            <Link
              href={getLocalizedPath('/servicios')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              {t('services')}
            </Link>
            <Link
              href={getLocalizedPath('/portfolio')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              {t('portfolio')}
            </Link>
            <Link
              href={getLocalizedPath('/sobre-nixi')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              {t('about')}
            </Link>
            <Link
              href={getLocalizedPath('/blog')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              {t('blog')}
            </Link>
            <Link
              href={getLocalizedPath('/contacto')}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link
              href={getLocalizedPath('/servicios')}
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {t('services')}
            </Link>
            <Link
              href={getLocalizedPath('/portfolio')}
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {t('portfolio')}
            </Link>
            <Link
              href={getLocalizedPath('/kit-digital')}
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {t('kitDigital')}
            </Link>
            <Link
              href={getLocalizedPath('/sobre-nixi')}
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {t('about')}
            </Link>
            <Link
              href={getLocalizedPath('/blog')}
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {t('blog')}
            </Link>
            <Link
              href={getLocalizedPath('/contacto')}
              className="block bg-primary text-white px-6 py-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
