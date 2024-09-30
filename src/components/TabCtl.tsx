import * as Tabs from '@radix-ui/react-tabs'; // Importa Tabs de Radix UI
import ProductSectionList from './ProductSectionsList';
import { Settings, BarChart, Calculator, Sliders, PlusCircle } from 'lucide-react'
import { ReactNode } from 'react';
// Componente que contiene las pestañas y el listado de secciones
interface TabCtlProps {
    sections: { section: string; title: string; icon: ReactNode; items: string[] }[];
  }
  
  const TabCtl: React.FC<TabCtlProps> = ({ sections }) => {
    return (
      <Tabs.Root className="w-full" defaultValue={sections[0].section}>
        <Tabs.List className="flex border-b border-gray-300">
          {sections.map((sectionData) => (
            <Tabs.Trigger
              key={sectionData.section}
              value={sectionData.section}
              className={`
                flex-1 flex flex-col items-center py-4 px-2 text-sm font-medium
                text-gray-500 hover:text-[#8B1C1C] hover:bg-gray-200 focus:outline-none transition-colors
                data-[state=active]:border-b-2 data-[state=active]:border-[#8B1C1C]
                data-[state=active]:text-[#8B1C1C] data-[state=active]:bg-gray-100
                data-[state=active]:font-semibold data-[state=active]:shadow-md
              `}
            >
              {sectionData.icon}{sectionData.title}
              </Tabs.Trigger>
          ))}
        </Tabs.List>
  
        {sections.map((sectionData) => (
          <Tabs.Content 
            key={sectionData.section} 
            value={sectionData.section} 
            className="mt-4">
            <ProductSectionList
              section={sectionData.section}
              title={sectionData.title}
              items={sectionData.items}
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    );
  };
  
  export default TabCtl;