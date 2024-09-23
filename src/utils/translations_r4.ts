import { NavItems } from './types';

export interface R4Translations {
  nav: NavItems;
  r4: {
    title: string;
    subtitle: string;
    description: string;
    features: {
      title: string;
      list: string[];
    };
    benefits: {
      title: string;
      list: string[];
    };
    cta: string;
  };
}

export const r4Translations: Record<string, R4Translations> = {
  es: {
    nav: {
      home: "Inicio",
      products: "Productos",
      services: "Servicios",
      contact: "Contacto",
    },
    r4: {
      title: "R4 - Software para Bar-Restaurante",
      subtitle: "Gestión completa para tu negocio de hostelería",
      description: "R4 es un software de gestión integral diseñado específicamente para bares y restaurantes. Ofrece todas las herramientas necesarias para administrar eficientemente tu negocio, desde la gestión de ventas hasta la emisión de tickets y reservas.",
      features: {
        title: "Características Principales",
        list: [
          "Gestión de ventas y caja",
          "Emisión de tickets y facturas",
          "Control de mesas y reservas",
          "Gestión de camareros y comandas",
          "Informes y estadísticas detalladas",
          "Integración con dispositivos móviles"
        ]
      },
      benefits: {
        title: "Beneficios",
        list: [
          "Aumenta la eficiencia operativa",
          "Mejora el control financiero",
          "Agiliza el trabajo en Barra y Cocina",
          "Mejora la experiencia del cliente",
          "Facilita la toma de decisiones basada en datos"
        ]
      },
      cta: "Solicitar una demo"
    }
  },
  eu: {
    nav: {
        home: "Hasiera",
        products: "Produktuak",
        services: "Zerbitzuak",
        contact: "Kontaktua",
      },    
      r4: {
        title: "R4 - Taberna-Jatetxeetarako Softwarea",
        subtitle: "Zure ostalaritza negoziorako kudeaketa integrala",
        description: "R4 taberna eta jatetxeetarako bereziki diseinatutako soluzio osoa da. Zure eguneroko eragiketak optimizatzen ditu, salmenten kudeaketatik tiketen jaulkipenera eta hornaitzealeen kontrolera.",
        features: {
          title: "Ezaugarri nagusiak",
          list: [
            "Salmenta eta fakturazio kudeaketa",
            "Mahaien eta erreserben kontrola",
            "Eskaeren eta sukaldearen kudeaketa",
            "Hornitzaileen ordinketak kontrola",
            "Salmenta txostenak eta analisiak",
            "Ordainketa sistemekin integrazioa",
            "Bezeroen fideltasuna",
          ],
        },
        benefits: {
          title: "Onurak",
          list: [
            "Eraginkortasun operatiboa handitzen du",
            "Bezeroaren esperientzia hobetzen du",
            "Tabernan eta sukaldean lana errazten du",
            "Hornitzaileen kudeaketa optimizatzen du",
            "Erabakiak hartzea errazten du txosten zehatzekin",
          ],
        },
        cta: "Demo bat eskatu",
      },
    },
  };
  
  export default r4Translations;