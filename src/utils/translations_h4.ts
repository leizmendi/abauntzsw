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
    benefits: {
      title: string;
      list: string[];
    };
    prices: {
      summary: string;
      list:[
        { product: string;
          prix: string;
          period: string;
        }
      ]
    };
    cta: string;
    altTextImg: string[];
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
      description: `H4 es un software de gestión de alojamientos diseñado específicamente para hoteles, campings y alojamientos rurales.
      Este software busca ofrecer las funcionalidades de programas líderes en el sector a un precio competitivo y con una interfaz fácil de usar.`,
      features: {
        title: "Características Principales",
        list: [
          "El software destaca por su panel de control de parcelas y habitaciones, que facilita el seguimiento de la disponibilidad.",
          "Incorpora un sistema de planificación de reservas que permite visualizar la ocupación y gestionar las reservas de forma eficiente.",
          "Simplifica el proceso de admisión de clientes y almacena la información de cada cliente en una ficha personalizable.",
          "Permite registrar pagos y anticipos, y emitir facturas de forma automatizada.",
          "Se integra con Poli-Checkin para agilizar la toma de datos del cliente."
        ]
      },
      management: {
        title: "Gestión Operativa",
        list: [
          "Facilita el envío de partes de entrada de viajeros a la policía.",
          "Permite generar el parte de gobernanta para el control del estado de las habitaciones.",
          "Simplifica la generación de listados para el Instituto Nacional de Estadística.",
          "Permite elaborar un listado de los servicios de comedor previstos para cada día."
        ]
      },
      accounting: {
        title: "Gestión Contable",
        list: [
          "Registra las facturas emitidas y otros ingresos.",
          "Permite registrar las facturas recibidas.",
          "Genera un listado de caja para el control de ingresos y egresos.",
          "Facilita el seguimiento de las compras y gastos.",
          "Permite obtener un listado de ventas e ingresos.",
          "Genera un listado trimestral y anual del IVA."
        ]
      },
      optional: {
        title: "Motor de reservas Web y Channel manager",
        list: [
          "Integrado con el motor de reservas y channel manager de Wubook, con un servicio de soporte de calidad",
          "El software ofrece otros módulos opcionales como el escaneo y lectura automática de documentos de identidad, la captura de firmas, el enlace a contabilidad y el mantenimiento anual.",
          "Entre sus características adicionales destacan el cuadro de disponibilidad interactivo, la confirmación de reservas por correo electrónico, la generación de presupuestos y facturas en varios idiomas, la gestión de servicios de comedor, la generación de documentos en PDF y el archivo de imágenes en la ficha de estancia."
        ]
      },
      benefits: {
        title: "Beneficios Clave",
        list: [
          "Solución integral que cubre las necesidades operativas y de gestión de diferentes tipos de alojamientos.",
          "Interfaz amigable que facilita su uso a usuarios con diferentes niveles de experiencia.",
          "Ahorro de tiempo y reducción de errores mediante la automatización de tareas.",
          "Información en tiempo real para la toma de decisiones estratégicas.",
          "Mejora de la experiencia del cliente gracias a una gestión más eficiente."
        ]
      },
      prices: {
        summary: '',
        list:[
          {
            product:'',
            prix:'',
            period:''
          }
        ]
      },
      cta: "Solicitar Información",
      altTextImg:[
        'Planing de reservas',
        'Sincronización con motor de reservas Wubook',
        'Ficha de Estancia',
        'Facturas',
        'Parte de Gobernanta',
        'Plano de Parcelas',
        'Planing de reservas',
        'Parámetros Establecimiento',
        'Parámetros Emails',
        'Listado de Ventas'
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
      h4: {
        title: "H4 - Ostatuak kudeatzeko softwarea",
        subtitle: "Hotel, kanpin eta landa ostatuetarako irtenbide osoa",
        description: `H4 hoteletarako, kanpinetarako eta landa-ostatuetarako bereziki diseinatutako ostatuak kudeatzeko softwarea da.
 Software honek sektoreko punta-puntako programen funtzionalitateak prezio lehiakorrean eta erabiltzeko erraza den interfazearekin eskaini nahi ditu`,
        features: {
          title: "Ezaugarri Nagusiak",
          list: [
            "Softwarea lursailaren eta gelaren kontrol panelagatik nabarmentzen da, erabilgarritasunaren jarraipena errazten duena",
            "Erreserbak planifikatzeko sistema bat dauka, okupazioa ikusteko eta erreserbak modu eraginkorrean kudeatzeko aukera ematen duena",
            "Bezeroak onartzeko prozesua errazten du eta bezero bakoitzaren informazioa fitxategi pertsonalizatu batean gordetzen du",
            "Ordainketak eta aurrerakinak erregistratzeko eta fakturak modu automatizatuan emateko aukera ematen du",
            "Poli-Checkin-ekin integratzen da bezeroen datu bilketa bizkortzeko"
          ]
        },
        management: {
          title: "Kudeaketa Operatiboa",
          list: [
            "Bidaiarien sarrera-txostenak poliziari bidaltzea errazten du",
            "Etxezainaren txostena sortzeko aukera ematen du gelen egoera kontrolatzeko.",
            "Estatistika Institutu Nazionalerako zerrendak sortzea errazten du.",
            "Egun bakoitzerako ematen diren jantoki zerbitzuen zerrenda prestatzeko aukera ematen du"
          ]
        },
        accounting: {
          title: "Kontabilitatearen Kudeaketa",
          list: [
            "Erregistroak jaulkitako fakturak eta bestelako diru-sarrerak",
            "Jasotako fakturak erregistratzeko aukera ematen dizu.",
            "Diru-zerrenda bat sortzen du diru-sarrerak eta gastuak kontrolatzeko",
            "Erosketen eta gastuen jarraipena errazten du.",
            "Salmenta eta diru-sarreren zerrenda lortzeko aukera ematen du.",
            "BEZaren hiruhileko eta urteko zerrenda sortzen du"
          ]
        },
        optional: {
          title: "Web erreserba motorra eta Channel manager",
          list: [
              "Wubook-en erreserba-motorrekin eta kanal-kudeatzailearekin integratua, kalitatezko laguntza-zerbitzuarekin",
              "Softwareak aukerako moduluak eskaintzen ditu, hala nola, nortasun dokumentuen eskaneatu eta irakurketa automatikoa, sinadura harrapatzea, kontabilitaterako esteka eta urteko mantentze-lanak",
              "Ezaugarrien artean erabilgarritasun-taula interaktiboa, posta elektroniko bidezko erreserbaren berrespena, aurrekontuak eta fakturak hizkuntza anitzetan sortzea, jangela-zerbitzuen kudeaketa, PDF dokumentuak sortzea eta egonaldi-txartelean irudiak artxibatzea"
          ]
        },
        benefits: {
          title: "Abantail Nagusiak",
          list: [
            "Ostatu mota ezberdinen operazio- eta kudeaketa-beharrak estaltzen dituen irtenbide integrala",
            "Interfaze atsegina, esperientzia-maila desberdinak dituzten erabiltzaileei erabiltzeko erraza egiten diena.",
            "Denbora aurreztea eta erroreen murrizketa zereginen automatizazioaren bidez.",
            "Erabaki estrategikoak hartzeko denbora errealeko informazioa",
            "Bezeroaren esperientzia hobetu da kudeaketa eraginkorragoari esker"
          ]
        },
        prices: {
          summary: '',
          list:[
            {
              product:'',
              prix:'',
              period:''
            }
          ]
        },
          cta: "Informazioa Eskatu",
        altTextImg:[
          'Erreserben Plangintza',
          'Wubook erreserba-motorrarekin sinkronizatzea',
          '',
          'Fakturak',
          'Gobernantearen Partea',
          'Partzelaren Plana',
          'Erreserben Plangintza',
          'Establezimendu-parametroak',
          'Posta elektronikoaren parametroak',
          'Salmenta Zerrenda'
        ]
      }
    }
  };
  
  export default h4Translations;