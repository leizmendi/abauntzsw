// components/Navbar.tsx
import { Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  toggleLanguage: () => void;
  language: string;
  navItems: { products: string; services: string; contact: string };
}

export const Navbar = ({ toggleLanguage, language, navItems }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-10 right-10 z-50 px-4 lg:px-6 h-20 flex items-center bg-white ">
      <Link className="flex items-center justify-center" href={`/?lang=${language}#`}>
        <Image src="/images/absw_logo.png" alt="Logo" width={80} height={80} className="rounded-full" />
        <span className="ml-2 text-2xl font-bold text-[#8B1C1C]">Abauntz Software</span>
      </Link>
      
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href={`/?lang=${language}#productos`}>
          {navItems.products}
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href={`/?lang=${language}#servicios`}>
          {navItems.services}
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href={`/?lang=${language}#contacto`}>
          {navItems.contact}
        </Link>
        <button onClick={toggleLanguage} className="flex items-center text-sm font-medium">
          <Globe className="w-4 h-4 mr-1" />
          {language === 'es' ? 'ES' : 'EU'}
        </button>
      </nav>
    </header>
  );
};
