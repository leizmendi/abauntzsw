import React from 'react';
import { Check } from 'lucide-react'; // Ícono de Check

interface FeaturesProps {
  features: string[][];
  currentIndex: number; // Índice actual del carrusel
}

const Features: React.FC<FeaturesProps> = ({ features, currentIndex }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-[#8B1C1C]">Características destacadas</h2>
      <ul className="mt-4 space-y-2">
        {features[currentIndex] && features[currentIndex].length > 0 ? (
          features[currentIndex].map((feature, index) => (
            <li key={index} className="flex items-center font-bold"> {/* Negrita para las características */}
              <Check className="h-5 w-5 text-[#8B1C1C] mr-2" />
              {feature}
            </li>
          ))
        ) : (
          <p>No hay características destacadas para esta imagen</p>
        )}
      </ul>
    </div>
  );
};

export default Features;
