import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import NotFoundClient from '@/components/NotFoundClient';
import './globals.css';

async function getLocaleFromRequest() {
  // First, check if user has a saved locale preference in cookies
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');

  if (localeCookie?.value && ['es', 'en'].includes(localeCookie.value)) {
    return localeCookie.value;
  }

  // Fallback to Spanish
  return 'es';
}

export default async function NotFound() {
  const locale = await getLocaleFromRequest();
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <main className="min-h-screen">
            <NotFoundClient />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
