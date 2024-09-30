// components/Navbar.tsx
import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';

interface NavbarProps {
  toggleLanguage: () => void;
  language: string;
  //icon?: React.FC; // Propiedad Icono que es un componente funcional
  navItems: { products: string; services: string; contact: string };
}

export const Navbar = ({ toggleLanguage, language, navItems }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambiar el estado para abrir o cerrar el menú
  };
  const handleMenuItemClick = () => {
    setIsOpen(false); // Cerrar el menú al seleccionar un elemento
  };
  return (
    <header className="fixed top-0 left-10 right-10 z-50 px-4 lg:px-6 h-20 flex items-center bg-white">
      <Link className="flex items-center justify-center" href={`/#`}>
        <Image src="/images/absw_logo.png" alt="Logo" width={80} height={80} className="rounded-full" />
        <span className="ml-2 text-2xl font-bold text-[#8B1C1C]">Abauntz Software</span>
      </Link>

        {/* Botón Burger para pantallas pequeñas */}
        <button onClick={toggleMenu} className="ml-auto text-[#8B1C1C] sm:hidden">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menú normal para pantallas grandes */}
      <nav className={`ml-auto hidden sm:flex gap-4 sm:gap-6 text-[#8B1C1C]`}>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href={`/?#productos`}>
          {navItems.products}
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href={`/?#servicios`}>
          {navItems.services}
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href={`/?#contacto`}>
          {navItems.contact}
        </Link>
        <button onClick={toggleLanguage} className="flex items-center text-sm font-medium tooltip-container">
          <Globe className="w-4 h-4 mr-1" />
          <span className="tooltip-text">Español/Euskara</span>
          {language === 'es' ? 'ES' : 'EU'}
        </button>
      </nav>

      {/* Menú emergente para pantallas pequeñas */}
      {isOpen && (
        <div className="absolute right-0 top-20 w-48 bg-white shadow-md z-10 max-h-60 overflow-y-auto text-[#8B1C1C]">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-200" onClick={handleMenuItemClick}>
              <Link href={`/?#productos`}>{navItems.products}</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200" onClick={handleMenuItemClick}>
              <Link href={`/?#servicios`}>{navItems.services}</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200" onClick={handleMenuItemClick}>
              <Link href={`/?#contacto`}>{navItems.contact}</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200" onClick={handleMenuItemClick}>
              <button onClick={toggleLanguage} className="flex items-center text-sm font-medium">
                <Globe className="w-4 h-4 mr-1" />
                {language === 'es' ? 'ES' : 'EU'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
