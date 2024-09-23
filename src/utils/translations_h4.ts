import { NavItems } from './types';

export interface H4Translations {
  nav: NavItems;
  h4: {
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
    additional: {
      title: string;
      list: string[];
    };
    cta: string;
  };
}

export const h4Translations: Record<string, H4Translations> = {
  es: {
    nav: {
      home: "Inicio",
      products: "Productos",
      services: "Servicios",
      contact: "Contacto",
    },
    h4: {
      title: "H4 - Software de Gestión de Alojamientos",
      subtitle: "Solución completa para hoteles, campings y alojamientos rurales",
      description: "H4 es un software de gestión de alojamientos especialmente diseñado para su utilización en establecimientos hoteleros, campings y alojamientos rurales. Ofrece las capacidades de los mejores programas del sector a un precio sorprendente y es de uso muy fácil.",
      features: {
        title: "Características Principales",
        list: [
          "Panel de Control de Parcelas-Habitaciones",
          "Planning de Reservas-Ocupación",
          "Admisión de Clientes",
          "Ficha de Cliente con Notas personales",
          "Recibo y registro de pagos y adelantos",
          "Emisión de Facturas",
          "Integración con Poli-Checkin para toma de datos del cliente"
        ]
      },
      management: {
        title: "Tareas de Gestión",
        list: [
          "Envío de entrada de viajeros a Policía",
          "Parte de Gobernanta",
          "Listado para el Instituto Nacional de Estadística",
          "Listado de Servicios de Comedor previstos del Día"
        ]
      },
      accounting: {
        title: "Contabilidad",
        list: [
          "Registro de Facturas Emitidas y Otros Ingresos",
          "Registro de Facturas Recibidas",
          "Listado de Caja",
          "Listado de Compras y Gastos",
          "Listado de Ventas e ingresos",
          "Listado Trimestral y anual de IVA"
        ]
      },
      optional: {
        title: "Módulos Opcionales",
        list: [
          "Escaneo y lectura automática de documentos de identidad",
          "Captura de firmas",
          "Enlace a contabilidad",
          "Mantenimiento anual"
        ]
      },
      additional: {
        title: "Características Adicionales",
        list: [
          "Cuadro de disponibilidad - ocupación interactivo (Planning)",
          "Confirmación de reserva y envío por e-mail",
          "Facturación - Presupuestos",
          "Varios idiomas para Conceptos de facturación",
          "Servicios de comedor",
          "Generación de documentos en PDF y envíos por e-mail",
          "Archivo de imágenes en Ficha de estancia"
        ]
      },
      cta: "Solicitar Información"
    }
  },
  eu: {
      nav: {
        home: "Hasiera",
        products: "Produktuak",
        services: "Zerbitzuak",
        contact: "Kontaktua",
      },
      h4: {
        title: "H4 - Ostatu Kudeaketarako Softwarea",
        subtitle: "Hotel, kanpin eta landa-etxeetarako soluzio osoa",
        description: "H4 ostatu-kudeaketarako software bat da, bereziki hotel, kanpin eta landa-etxeetan erabiltzeko diseinatua. Sektoreko programa onenen gaitasunak eskaintzen ditu harrigarriro prezio onean eta oso erabilera errazekoa da.",
        features: {
          title: "Ezaugarri Nagusiak",
          list: [
            "Partzela-Gelen Kontrol Panela",
            "Erreserba-Okupazio Plangintza",
            "Bezeroen Harrera",
            "Bezeroaren Fitxa Ohar pertsonalekin",
            "Ordainketen eta aurrerakinen harrera eta erregistroa",
            "Fakturen Jaulkipena",
            "Poli-Checkin-ekin integrazioa bezeroaren datuak hartzeko"
          ]
        },
        management: {
          title: "Kudeaketa Zereginak",
          list: [
            "Bidaiarien sarrera Poliziara bidaltzea",
            "Gobernantearen Txostena",
            "Estatistika Institutu Nazionalerako Zerrenda",
            "Eguneko Aurreikusitako Jantoki Zerbitzuen Zerrenda"
          ]
        },
        accounting: {
          title: "Kontabilitatea",
          list: [
            "Jaulkitako Fakturen eta Beste Sarreren Erregistroa",
            "Jasotako Fakturen Erregistroa",
            "Kutxako Zerrenda",
            "Erosketa eta Gastuen Zerrenda",
            "Salmenta eta Sarreren Zerrenda",
            "BEZaren Hiruhileko eta Urteko Zerrenda"
          ]
        },
        optional: {
          title: "Aukerako Moduluak",
          list: [
            "Nortasun-agirien eskaneatze eta irakurketa automatikoa",
            "Sinadura hartzea",
            "Kontabilitaterako lotura",
            "Urteko mantentzea"
          ]
        },
        additional: {
          title: "Ezaugarri Gehigarriak",
          list: [
            "Erabilgarritasun - okupazio koadro interaktiboa (Plangintza)",
            "Erreserba-baieztapena eta e-postaz bidaltzea",
            "Fakturazioa - Aurrekontuak",
            "Hainbat hizkuntza fakturazio-kontzeptuetarako",
            "Jantoki zerbitzuak",
            "PDF dokumentuen sorrera eta e-postaz bidaltzea",
            "Irudien artxiboa Egonaldi Fitxan"
          ]
        },
        cta: "Informazioa Eskatu"
      }
    }
  };
  
  export default h4Translations;