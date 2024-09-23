import { Language } from './types';

export interface FooterTranslations {
  rights: string;
  legal: string;
}

const getCurrentYear = () => new Date().getFullYear();

export const footerTranslations: Record<Language, FooterTranslations> = {
  es: {
    rights: `© 2013-${getCurrentYear()} Abauntz Software. Todos los derechos reservados.`,
    legal: "Aviso legal",
  },
  eu: {
    rights: `© 2013-${getCurrentYear()} Abauntz Software. Eskubide guztiak erreserbatuta.`,
    legal: "Lege Oharra",
  }
};