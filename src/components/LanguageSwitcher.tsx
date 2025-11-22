'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    // Remove the current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    // Navigate to the new locale path
    router.push(`/${newLocale}${pathWithoutLocale || '/'}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
        aria-label="Switch language"
      >
        <Globe size={20} />
        <span className="font-medium">{locale === 'ar' ? 'العربية' : 'English'}</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 min-w-[150px]">
          <button
            onClick={() => switchLanguage('ar')}
            className={`w-full px-4 py-3 text-right hover:bg-gray-700 transition-colors ${
              locale === 'ar' ? 'bg-gray-700 font-bold' : ''
            }`}
          >
            العربية
          </button>
          <button
            onClick={() => switchLanguage('en')}
            className={`w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors ${
              locale === 'en' ? 'bg-gray-700 font-bold' : ''
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}