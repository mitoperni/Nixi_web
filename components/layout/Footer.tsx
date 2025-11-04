'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Logo from '@/components/ui/Logo';
import FooterLanguageSwitcher from './FooterLanguageSwitcher';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Logo variant="white" width={120} height={36} />
            </Link>
            <p className="text-gray-400 mb-4">{t("description")}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("links.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition"
                >
                  {tNav("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white transition"
                >
                  {tNav("portfolio")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition"
                >
                  {tNav("blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  {tNav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("legal.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacidad"
                  className="text-gray-400 hover:text-white transition"
                >
                  {t("legal.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-gray-400 hover:text-white transition"
                >
                  {t("legal.terms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-400 hover:text-white transition"
                >
                  {t("legal.cookies")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-4 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              &copy; {currentYear} Nixi - Miguel Toyas Pernichi. {t("rights")}
            </p>
            <FooterLanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
