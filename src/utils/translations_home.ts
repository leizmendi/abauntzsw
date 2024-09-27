import { NavItems } from './types';

export interface HomeTranslations {
  nav: NavItems;
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  products: {
    title: string;
    r4: {
      title: string;
      description: string;
      cta: string;
    };
    h4: {
      title: string;
      description: string;
      cta: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  why: {
    title: string;
    efficiency: {
      title: string;
      description: string;
    };
    security: {
      title: string;
      description: string;
    };
    support: {
      title: string;
      description: string;
    };
    customization: {
      title: string;
      description: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
  };
}

export const homeTranslations: Record<string, HomeTranslations> = {
  es: {
    nav: {
      home: "Inicio",
      products: "Productos",
      services: "Servicios",
      contact: "Contacto",
    },
    hero: {
      title: "Soluciones de Software Innovadoras",
      subtitle: "Transformamos la gestión de negocios con software especializado y soluciones a medida.",
      cta1: "Descubrir productos",
      cta2: "Contactar",
    },
    products: {
      title: "Nuestros Productos",
      r4: {
        title: "Software para Bar-Restaurante",
        description: "Gestión completa de ventas, emisión de tiques, mesas, camareros, comandas y reservas para tu negocio de hostelería.",
        cta: "Más sobre R4",
      },
      h4: {
        title: "Gestión de Alojamientos",
        description: "Software para hoteles, casas rurales y campings. Integración con motor de reservas y channel manager a un precio competitivo.",
        cta: "Descubre H4",
      },
    },
    services: {
      title: "Servicios a Medida",
      subtitle: "Desarrollo de Aplicaciones Personalizadas",
      description: "Diseñamos bases de datos y aplicaciones adaptadas a las necesidades específicas de tu negocio. Desde la generación de documentos hasta la gestión integral de procesos empresariales.",
      cta: "Algunos ejemplos",
    },
    why: {
      title: "¿Por qué elegir Abauntz Software?",
      efficiency: {
        title: "Eficiencia",
        description: "Optimizamos tus procesos para un rendimiento excepcional.",
      },
      security: {
        title: "Seguridad",
        description: "Protección de datos de nivel empresarial en todas nuestras soluciones.",
      },
      support: {
        title: "Soporte",
        description: "Equipo dedicado para asistirte en cada paso del camino.",
      },
      customization: {
        title: "Personalización",
        description: "Soluciones adaptadas a las necesidades únicas de tu negocio.",
      },
    },
    contact: {
      title: "¿Listo para impulsar tu negocio?",
      subtitle: "Contáctanos hoy y descubre cómo nuestras soluciones de software pueden transformar tu empresa.",
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      message: "Mensaje",
      submit: "Solicitar información",
    },
  },
  eu: {
    nav: {
      home: "Hasiera",
      products: "Produktuak",
      services: "Zerbitzuak",
      contact: "Kontaktua",
    },    
    hero: {
      title: "Software Soluzio Berritzaileak",
      subtitle: "Negozioen kudeaketa eraldatzen dugu software espezializatu eta neurrira egindako soluzioekin.",
      cta1: "Produktuak ezagutu",
      cta2: "Kontaktatu",
    },
    products: {
      title: "Gure Produktuak",
      r4: {
        title: "Taberna-Jatetxeetarako Softwarea",
        description: "Salmenten kudeaketa osoa, tiketen jaulkipena, mahaiak, zerbitzariak, eskaerak eta erreserbak zure ostalaritza negoziorako.",
        cta: "Gehiago R4-ri buruz",
      },
      h4: {
        title: "Ostatuen Kudeaketa",
        description: "Hoteletarako, landa-etxeetarako eta kanpinetarako softwarea. Erreserba motorra eta channel manager-arekin integrazioa prezio lehiakorrean.",
        cta: "H4 ezagutu",
      },
    },
    services: {
      title: "Neurrira egindako Zerbitzuak",
      subtitle: "Aplikazio Pertsonalizatuen Garapena",
      description: "Zure negozioaren behar espezifikoetara egokitutako datu-baseak eta aplikazioak diseinatzen ditugu. Dokumentuen sorkuntzatik enpresa-prozesuen kudeaketa integralera.",
      cta: "Adibide batzuk",
    },
    why: {
      title: "Zergatik aukeratu Abauntz Software?",
      efficiency: {
        title: "Eraginkortasuna",
        description: "Zure prozesuak optimizatzen ditugu errendimendu bikaina lortzeko.",
      },
      security: {
        title: "Segurtasuna",
        description: "Enpresa-mailako datuen babesa gure soluzio guztietan.",
      },
      support: {
        title: "Laguntza",
        description: "Talde dedikatua bideko urrats bakoitzean laguntzeko.",
      },
      customization: {
        title: "Pertsonalizazioa",
        description: "Zure negozioaren behar berezietara egokitutako soluzioak.",
      },
    },
    contact: {
      title: "Prest zaude zure negozioa bultzatzeko?",
      subtitle: "Jarri gurekin harremanetan gaur eta ezagutu gure software soluzioak nola eraldatu dezaketen zure enpresa.",
      name: "Izena",
      email: "Emaila",
      phone: "Telefonoa",
      message: "Mezua",
      submit: "Informazioa eskatu",
    },

  },
};

export default homeTranslations;