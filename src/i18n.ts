import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['ar', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  let locale = await requestLocale;
  
  if (!locale || !locales.includes(locale as any)) {
    locale = 'ar'; // default locale
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
    timeZone: 'Africa/Algiers',
    now: new Date()
  };
});

export { locales };