"use client";

//import { useSlides } from '@/hooks/useSlides';
//import { Slider } from '@/components/Slider';
import Carousel from '@/components/Carousel';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { homeTranslations } from '@/utils/translations_home'
import { footerTranslations, FooterTranslations } from '@/utils/translations_footer'
import { Language } from '@/utils/types'
import { getStoredLanguage, setStoredLanguage } from '@/utils/languageUtils';

import { useState, useEffect } from "react"
import Card from '@/components/Card';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Coffee, Tent, Scissors, Zap, Lock, Users, Laptop} from "lucide-react"



export default function LandingPage() {
  const [language, setLanguage] = useState<Language>('es')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setLanguage(getStoredLanguage())
    setIsClient(true)
  }, [])
  const t = homeTranslations[language];
  const footerT: FooterTranslations = footerTranslations[language]

  const slides = [
    { src: '/images/slide1.jpg', altText: 'Slide 1' },
    { src: '/images/slide2.jpg', altText: 'Slide 2' },
  ];

  //const { currentSlide, nextSlide, prevSlide } = useSlides(slides);

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'eu' : 'es'
    setLanguage(newLang)
    setStoredLanguage(newLang)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar toggleLanguage={toggleLanguage} language={language} navItems={t.nav} />
      <main className="flex-1 pt-20">
        {isClient && (

          <div className ="flex flex-col items-center">
            <Carousel images={slides} />
            <section id="productos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
              <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#8B1C1C] text-shadow">
                  {t.products.title}
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 items-start">
                  <Card
                    icon={<Tent className="w-12 h-12 text-[#8B1C1C]" />}
                    title="H4"
                    subtitle={t.products.h4.title}
                    description={t.products.h4.description}
                    cta={t.products.h4.cta}
                    href="/productos/h4"
                    borderStyle='none'
                    borderWidth='0'
                  />
                  <Card
                    icon={<Coffee className="w-12 h-12 text-[#8B1C1C]" />}
                    title="R4"
                    subtitle={t.products.r4.title}
                    description={t.products.r4.description}
                    cta={t.products.r4.cta}
                    href="/productos/r4"
                    borderStyle='none'
                    borderWidth = '0'
                  />
                  </div>
              </div>
            </section>
            <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
              <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#8B1C1C] text-shadow">
                  {t.services.title}
                </h2>
                <div>
                  <Card
                      icon={<Scissors className="w-12 h-12 text-[#8B1C1C]" />}
                      title="- - - - - - - - - - - - -"
                      subtitle={t.services.subtitle}
                      description={t.services.description}
                      cta={t.services.cta}
                      href="/"
                      borderStyle='dashed'
                      borderWidth='4'
                      />
                                        
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
              <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#8B1C1C] text-shadow">
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
              <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
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
                      <Input type="msg" placeholder={t.contact.message} className="bg-white" />
                      <Button type="submit" className="bg-white text-[#8B1C1C] hover:bg-gray-100">{t.contact.submit}</Button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
      <Footer translations={footerT} language={language} />
    </div>
  );
}
