import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['es', 'en'],

  // Used when no locale matches
  defaultLocale: 'es',

  // Prefix the default locale
  localePrefix: 'always',

  // Enable locale detection from browser
  localeDetection: true,

  // Localized pathnames
  pathnames: {
    '/': '/',
    '/services': {
      es: '/servicios',
      en: '/services'
    },
    '/portfolio': '/portfolio',
    '/kit-digital': '/kit-digital',
    '/about': {
      es: '/sobre-nixi',
      en: '/about'
    },
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/contact': {
      es: '/contacto',
      en: '/contact'
    },
    '/privacidad': {
      es: '/privacidad',
      en: '/privacy'
    },
    '/terminos': {
      es: '/terminos',
      en: '/terms'
    },
    '/cookies': {
      es: '/cookies',
      en: '/cookies'
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
