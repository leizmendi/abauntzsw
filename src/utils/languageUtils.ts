import { Language } from './types';

const LANGUAGE_KEY = 'preferred_language';

export const getStoredLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem(LANGUAGE_KEY);
    return (storedLang === 'es' || storedLang === 'eu') ? storedLang : 'es';
  }
  return 'es';
};

export const setStoredLanguage = (language: Language): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LANGUAGE_KEY, language);
  }
};