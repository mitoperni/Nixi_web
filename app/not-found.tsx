import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NotFoundClient from '@/components/NotFoundClient';
import './globals.css';
import { getLocaleFromRequest } from '@/lib/server-utils';

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
