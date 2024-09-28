import { Check } from 'lucide-react'; // Importa el ícono de Check desde lucide-react

interface ProductSectionListProps {
  section: string;
  title: string;
  items: string[];
}

const ProductSectionList: React.FC<ProductSectionListProps> = ({ section, title, items }) => {
  return (
    <div>
      <h2 className="mt-8 text-2xl font-bold text-[#8B1C1C]">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((item, index) => (
          <li 
            key={index} 
            id={`${section}_${index}`}
            className="flex items-center">
            <Check className="h-5 w-5 text-[#8B1C1C] mr-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSectionList;
