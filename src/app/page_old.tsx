"use client";

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreditCard, Hotel, Database, Zap, Lock, Users, Laptop, ChevronLeft, ChevronRight, Globe } from "lucide-react"

type Language = 'es' | 'eu';

type TranslationType = {
  [key in Language]: {
    nav: {
      products: string;
      services: string;
      contact: string;
    };
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
      submit: string;
    };
    footer: {
      rights: string;
      terms: string;
      privacy: string;
    };
  };
};

const translations: TranslationType = {
  es: {
    nav: {
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
        title: "R4 - Software para Bar-Restaurante",
        description: "Gestión completa de ventas, emisión de tiques, mesas, camareros, comandas y reservas para tu negocio de hostelería.",
        cta: "Más sobre R4",
      },
      h4: {
        title: "H4 - Gestión de Alojamientos",
        description: "Software para hoteles, casas rurales y campings. Integración con motor de reservas y channel manager a un precio competitivo.",
        cta: "Descubre H4",
      },
    },
    services: {
      title: "Servicios a Medida",
      subtitle: "Desarrollo de Aplicaciones Personalizadas",
      description: "Diseñamos bases de datos y aplicaciones adaptadas a las necesidades específicas de tu negocio. Desde la generación de documentos hasta la gestión integral de procesos empresariales.",
      cta: "Solicitar información",
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
      submit: "Solicitar información",
    },
    footer: {
      rights: "© 2023 Abauntz Software. Todos los derechos reservados.",
      terms: "Términos de servicio",
      privacy: "Política de privacidad",
    },
  },
  eu: {
    nav: {
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
        title: "R4 - Taberna-Jatetxeetarako Softwarea",
        description: "Salmenten kudeaketa osoa, tiketen jaulkipena, mahaiak, zerbitzariak, eskaerak eta erreserbak zure ostalaritza negoziorako.",
        cta: "Gehiago R4-ri buruz",
      },
      h4: {
        title: "H4 - Ostatuen Kudeaketa",
        description: "Hoteletarako, landa-etxeetarako eta kanpinetarako softwarea. Erreserba motorra eta channel manager-arekin integrazioa prezio lehiakorrean.",
        cta: "H4 ezagutu",
      },
    },
    services: {
      title: "Neurrira egindako Zerbitzuak",
      subtitle: "Aplikazio Pertsonalizatuen Garapena",
      description: "Zure negozioaren behar espezifikoetara egokitutako datu-baseak eta aplikazioak diseinatzen ditugu. Dokumentuen sorkuntzatik enpresa-prozesuen kudeaketa integralera.",
      cta: "Informazioa eskatu",
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
      submit: "Informazioa eskatu",
    },
    footer: {
      rights: "© 2023 Abauntz Software. Eskubide guztiak erreserbatuta.",
      terms: "Zerbitzu baldintzak",
      privacy: "Pribatutasun politika",
    },
  },
};

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [language, setLanguage] = useState<Language>('es')
  const t = translations[language]

  const slides = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/software-de-gestion-H4-R4-Abauntz-Software-WNZUttpLLRKbmkEQNxcAghE9HY17H7.jpg",
      alt: "H4 y R4 Software de gestión"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/presentacion-abauntz-software-G01FQ7PYy3RBq4dR6IMPfnUfHolSMd.jpg",
      alt: "Servicios de Abauntz Software"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'es' ? 'eu' : 'es')
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-20 flex items-center bg-white border-b border-gray-200">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abauntz-software_250x250-BeKMD1yZzYHc6RI0g490mcCKva1xrh.jpg"
            alt="Abauntz Software Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="ml-2 text-2xl font-bold text-[#8B1C1C]">Abauntz Software</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#productos">
            {t.nav.products}
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#servicios">
            {t.nav.services}
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
            {t.nav.contact}
          </Link>
          <button onClick={toggleLanguage} className="flex items-center text-sm font-medium">
            <Globe className="w-4 h-4 mr-1" />
            {language === 'es' ? 'ES' : 'EU'}
          </button>
        </nav>
      </header>
      <main className="flex-1 pt-20">
        <section className="relative w-full h-[400px] md:h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.hero.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{t.hero.subtitle}</p>
              <div className="space-x-4">
                <Button className="bg-white text-[#8B1C1C] hover:bg-gray-100">{t.hero.cta1}</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#8B1C1C]">{t.hero.cta2}</Button>
              </div>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-[#8B1C1C]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-[#8B1C1C]" />
          </button>
        </section>
        <section id="productos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#8B1C1C]">
              {t.products.title}
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 items-start">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white shadow">
                <CreditCard className="w-12 h-12 text-[#8B1C1C]" />
                <h3 className="text-2xl font-bold">{t.products.r4.title}</h3>
                <p className="text-sm text-gray-500 text-center">
                  {t.products.r4.description}
                </p>
                <Button className="mt-4">{t.products.r4.cta}</Button>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white shadow">
                <Hotel className="w-12 h-12 text-[#8B1C1C]" />
                <h3 className="text-2xl font-bold">{t.products.h4.title}</h3>
                <p className="text-sm text-gray-500 text-center">
                  {t.products.h4.description}
                </p>
                <Button className="mt-4">{t.products.h4.cta}</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#8B1C1C]">
              {t.services.title}
            </h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Database className="w-16 h-16 text-[#8B1C1C]" />
              <h3 className="text-2xl font-bold">{t.services.subtitle}</h3>
              <p className="max-w-[600px] text-gray-500">
                {t.services.description}
              </p>
              <Button>{t.services.cta}</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#8B1C1C]">
              {t.why.title}
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 items-start">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white">
                <Zap className="w-12 h-12 text-[#8B1C1C]" />
                <h3 className="text-xl font-bold">{t.why.efficiency.title}</h3>
                <p className="text-sm text-gray-500 text-center">
                  {t.why.efficiency.description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white">
                <Lock className="w-12 h-12 text-[#8B1C1C]" />
                <h3 className="text-xl font-bold">{t.why.security.title}</h3>
                <p className="text-sm text-gray-500 text-center">
                  {t.why.security.description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white">
                <Users className="w-12 h-12 text-[#8B1C1C]" />
                <h3 className="text-xl font-bold">{t.why.support.title}</h3>
                <p className="text-sm text-gray-500 text-center">
                  {t.why.support.description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white">
                <Laptop className="w-12 h-12 text-[#8B1C1C]" />
                <h3 className="text-xl font-bold">{t.why.customization.title}</h3>
                <p className="text-sm text-gray-500 text-center">
                  {t.why.customization.description}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-[#8B1C1C]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  {t.contact.title}
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                  {t.contact.subtitle}
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2">
                  <Input type="text" placeholder={t.contact.name} className="bg-white" />
                  <Input type="email" placeholder={t.contact.email} className="bg-white" />
                  <Input type="tel" placeholder={t.contact.phone} className="bg-white" />
                  <Button type="submit" className="bg-white text-[#8B1C1C] hover:bg-gray-100">{t.contact.submit}</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          {t.footer.rights}
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {t.footer.terms}
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {t.footer.privacy}
          </Link>
        </nav>
      </footer>
    </div>
  )
}