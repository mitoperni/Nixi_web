'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Logo from '@/components/ui/Logo';
import FooterLanguageSwitcher from './FooterLanguageSwitcher';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  const locale = useLocale();

  const getLocalizedPath = (path: string) => `/${locale}${path}`;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={getLocalizedPath('/')} className="inline-block mb-4">
              <Logo variant="white" width={120} height={36} />
            </Link>
            <p className="text-gray-400 mb-4">
              {t('description')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('location')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('links.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={getLocalizedPath('/servicios')}
                  className="text-gray-400 hover:text-white transition"
                >
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/portfolio')}
                  className="text-gray-400 hover:text-white transition"
                >
                  {tNav('portfolio')}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/sobre-nixi')}
                  className="text-gray-400 hover:text-white transition"
                >
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/blog')}
                  className="text-gray-400 hover:text-white transition"
                >
                  {tNav('blog')}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/contacto')}
                  className="text-gray-400 hover:text-white transition"
                >
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('legal.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={getLocalizedPath('/privacidad')}
                  className="text-gray-400 hover:text-white transition"
                >
                  {t('legal.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/terminos')}
                  className="text-gray-400 hover:text-white transition"
                >
                  {t('legal.terms')}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/cookies')}
                  className="text-gray-400 hover:text-white transition"
                >
                  {t('legal.cookies')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              &copy; {currentYear} Nixi - Miguel Toyas Pernichi. {t('rights')}
            </p>
            <FooterLanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
