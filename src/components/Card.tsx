// components/Card.tsx
import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from './ui/button'; // Asegúrate de que el componente Button esté correctamente importado

interface CardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  href: string;
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none'; // Nueva prop para el estilo del borde
  borderWidth?: string;
}

const Card: React.FC<CardProps> = ({ icon, title, subtitle, description, cta, href, borderStyle, borderWidth }) => {
    //const borderClasses = `border border-4 border-[#8B1C1C] ${borderStyle === 'dashed' ? 'border-dashed' : borderStyle === 'dotted' ? 'border-dotted' : 'border-solid'} border-4`;
    const borderClasses = `border border-${borderWidth} border-[#8B1C1C] border-${borderStyle} `; // Ajusta el grosor y color


  return (
    <div className={`flex flex-col items-center space-y-2 p-4 rounded-lg bg-white shadow-custom-light ${borderClasses}`}>
      <div className="w-12 h-12 text-[#8B1C1C]">{icon}</div>
      <h2 className="text-2xl font-bold text-[#8B1C1C]">{title}</h2>
      <h3 className="text-2xl font-bold">{subtitle}</h3>
      <p className="text-sm text-gray-500 text-center">{description}</p>
      <Link href={href} passHref>
        <Button showEyeOnHover className="mt-4 text-base font-bold">{cta}</Button>
      </Link>
    </div>
  );
};

export default Card;
