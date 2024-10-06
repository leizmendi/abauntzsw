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
    management: {
      title: string;
      list: string[];
    };
    accounting: {
      title: string;
      list: string[];
    };
    optional: {
      title: string;
      list: string[];
    };
    benefits: {
      title: string;
      list: string[];
    };
    cta: string;
    altTextImg: string[];
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
      description: "R4 es un software de gestión integral diseñado específicamente para bares y restaurantes. Ofrece todas las herramientas necesarias para administrar eficientemente tu negocio, desde la emisión de tiques y el registro de reservas hasta el envío de comandas a cocina y el control de presencia de emplead@s",
      features: {
        title: "Características Principales",
        list: [
          "Gestión de ventas y caja: Emite tickets y facturas de forma sencilla, con diferentes tarifas configurables (Barra, Mesa, Noche, Clientes, etc.). Ofrece un registro diario de ventas automático (Z) con totales por formas de pago.",
          "Control de mesas y reservas: Permite configurar pantallas para visualizar la situación de las mesas y gestionar reservas.",
          "Gestión de comandas: Envía comandas a la impresora o pantalla de cocina.",
          "Informes y estadísticas detalladas: Genera informes de ventas con totales, detalles y totales por artículo, puesto y cliente.",
          "Integración con dispositivos móviles"
        ]
      },
      management: {
        title: "Gestión Operativa",
        list: [
          "Paneles de artículos para la venta:  Organizados por familias y personalizados para facilitar la elaboración del ticket de venta.",
          "Gestión de camareros:  Permite la gestión de camareros/as y control de presencia.",
          "Posibilidad de mantener un tique abierto: Permite mantener un tique abierto en una mesa hasta su pago.",
          "Gestión de clientes: Permite la gestión de clientes y el envío de facturas por email.",
          "Centralización de ventas: Permite centralizar las ventas de diferentes puestos.",
          "Personalización: El programa es adaptable a necesidades concretas y personalizaciones"
        ]
      },
      accounting: {
        title: "Gestión Contable",
        list: [
          "Control de Caja: Realiza el arqueo diario.",
          "Enlace a Contabilidad:  Facilita la gestión contable y la generación de informes financieros.",
          "Acceso controlado a opciones de contabilidad."
        ]
      },
      optional: {
        title: "Módulos Opcionales",
        list: [
          "Comandas a cocina: Módulo opcional para enviar comandas a la cocina.",
          "Conexión a CashLogy/CashGuard: Módulo opcional para la gestión del efectivo.",
          "Presencia de empleados: Módulo opcional para el control de presencia del personal.",
          "Reservas Restaurante: Módulo opcional para gestionar las reservas del restaurante."
        ]
      },
      benefits: {
        title: "Beneficios",
        list: [
          "Aumenta la eficiencia operativa: Agiliza las ventas, la gestión de mesas, el envío de comandas y el control del personal.",
          "Mejora el control financiero: Facilita el control de caja, el seguimiento de ventas y la gestión contable.",
          "Agiliza el trabajo en barra y cocina:  Simplifica la toma de pedidos, el envío de comandas y la gestión de cobros.",
          "Mejora la experiencia del cliente: Ofrece un servicio más rápido, personalizado y eficiente.",
          "Facilita la toma de decisiones basada en datos:  Proporciona informes detallados sobre las ventas, el rendimiento del personal y otros aspectos clave del negocio."
        ]
      },
      cta: "Solicitar información",
      altTextImg:[
        'Punto de Ventas',
        'Plano de Mesas',
        'Punto de Ventas',
        'Pintxos Comandero',
        'Menú del Día',
        'Artículos',
        'Plano de Mesas',
        'Listados',
        'Listados Z',
        'Listado de Ventas Diario'
      ]
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
        subtitle: "Zure ostalaritza negozioaren kudeaketa osoa",
      description: "R4 taberna eta jatetxeetarako bereziki diseinatutako kudeaketa software integrala da. Zure negozioa modu eraginkorrean kudeatzeko beharrezko tresna guztiak eskaintzen ditu, tiketak igortzen eta erreserbak grabatzen hasi eta sukaldera eskaerak bidaltzen eta langileen presentzia kontrolatzen.",
      features: {
        title: "Ezaugarri nagusiak",
        list: [
          "Salmentak eta kutxa kudeatzea: Igorri txartelak eta fakturak modu errazean, tarifa konfiguragarri ezberdinekin (Taberna, Mahaia, Gaua, Bezeroak, etab.). Eguneroko salmenten erregistro automatikoa (Z) eskaintzen du, guztirako ordainketa moduen arabera.",
          "Taulen eta erreserben kontrola: mahaien egoera ikusteko eta erreserbak kudeatzeko pantailak konfiguratzeko aukera ematen du.",
          "Komandoen kudeaketa: bidali komandoak inprimagailura edo sukaldeko pantailara.",
          "Txosten zehatzak eta estatistikak: Sortu salmenta-txostenak guztira, xehetasunak eta guztizkoak elementu, posizio eta bezeroaren arabera.",
          "Gailu mugikorrekin integratzea"
        ]
      },
      management: {
        title: "Kudeaketa Operatiboa",
        list: [
          "Salgai dauden elementuen panelak: Familiek antolatuta eta pertsonalizatuak salmenta-txartelaren prestaketa errazteko.",
          "Zamarriaren kudeaketa: zerbitzarien kudeaketa eta presentzia kontrolatzeko aukera ematen du.",
          "Txartel bat irekita mantentzeko aukera: txartel bat mahai gainean irekita mantentzeko aukera ematen du, ordaindu arte.",
          "Bezeroen kudeaketa: bezeroen kudeaketa eta fakturak posta elektronikoz bidaltzeko aukera ematen du.",
          "Salmenta zentralizazioa: posizio ezberdinetako salmentak zentralizatzeko aukera ematen du.",
          "Pertsonalizazioa: programa behar eta pertsonalizazio zehatzetara moldagarria da"
        ]
      },
      accounting: {
        title: "Kontabilitate Zuzendaritza",
        list: [
          "Diru-kontrola: egin eguneroko diru-zenbaketa.",
          "Kontabilitatearen esteka: kontabilitate kudeaketa eta finantza-txostenak sortzea errazten du.",
          "Kontabilitate aukeretarako sarbide kontrolatua."
        ]
      },
      optional: {
        title: "Aukerako Moduluak",
        list: [
          "Sukalderako aginduak: sukaldera eskaerak bidaltzeko aukerako modulua.",
          "CashLogy/CashGuard-ekin konexioa: eskudirua kudeatzeko aukerako modulua.",
          "Langileen presentzia: Langileen presentzia kontrolatzeko aukerako modulua.",
          "Jatetxeen erreserbak: jatetxeen erreserbak kudeatzeko aukerako modulua."
        ]
      },
      benefits: {
        title: "Onurak",
        list: [
          "Efizientzia operatiboa areagotzen du: salmentak, mahaien kudeaketa, eskaerak bidaltzea eta langileen kontrola errazten ditu.",
          "Finantza-kontrola hobetzen du: kutxaren kontrola, salmenten jarraipena eta kontabilitate kudeaketa errazten ditu.",
          "Speedlines-ek tabernan eta sukaldean egiten du lan: eskaerak hartzea, eskaerak bidaltzea eta bildumak kudeatzea errazten du.",
          "Bezeroaren esperientzia hobetzen du: zerbitzu azkarragoa, pertsonalizatuagoa eta eraginkorragoa eskaintzen du.",
          "Datuetan oinarritutako erabakiak hartzeko aukera ematen du: salmentei, langileen errendimenduari eta negozioaren beste funtsezko alderdiei buruzko txosten zehatzak eskaintzen ditu."
        ]
      },
      cta: "Informazioa eskatu",
      altTextImg:[
        'Salmenta Tokia',
        'Mahaien Plana',
        'Salmenta tokia',
        '',
        'Eguneko Menu',
        'Artikuluak',
        '',
        'Zerrendak',
        'Z Zerrendak',
        ''
      ]
    }
  },
};
  
  export default r4Translations;