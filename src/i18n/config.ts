export const locales = ['en', 'ar', 'fr', 'ru', 'zh', 'de'] as const;

export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';
