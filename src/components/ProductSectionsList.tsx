import { ReactNode } from 'react';

interface ProductSectionListProps {
  section: string;
  title: string;
  icon: ReactNode; 
  items: string[];
}

const ProductSectionList: React.FC<ProductSectionListProps> = ({ section, title, icon, items }) => {
  return (
    <div>
      <div className="flex justify-between items-center mt-8">
        <h2 className="text-2xl font-bold text-[#8B1C1C]">{title}</h2>
        <span className="text-2xl font-bold text-[#8B1C1C]"></span> {/* Asegúrate de que el ícono esté a la derecha */}
      </div>

        <ul className="mt-4 space-y-2">
          {items.map((item, index) => (
            <li 
              key={index} 
              id={`${section}_${index}`}
              className="flex items-center">
              <span className="mr-2 flex-shrink-0 text-[#8B1C1C]">{icon}</span>
              {/* <Check className="mr-2 flex-shrink-0" style={{ width: '20px', height: '20px', color: '#8B1C1C' }} /> */}

              {item}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default ProductSectionList;
