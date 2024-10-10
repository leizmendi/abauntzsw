"use client";

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer";
//import Image from "next/image"

import { Language } from "@/utils/types";
import { getStoredLanguage, setStoredLanguage } from "@/utils/languageUtils";
import h4Translations from "@/utils/translations_h4";
import { footerTranslations, FooterTranslations } from '@/utils/translations_footer'
//import ProductSectionList from "@/components/ProductSectionsList";
import { Heart, Settings, Calculator, PlusCircle, Key } from 'lucide-react'
import TabCtl from "@/components/TabCtl";
import Carousel from "@/components/Carousel";
import { Tent } from "lucide-react";
import { ContactForm } from "@/components/FormContact";

export default function H4Page() {
  const [language, setLanguage] = useState<Language>(getStoredLanguage())
  const t = h4Translations[language]
  const footerT: FooterTranslations = footerTranslations[language]

  const [isFormVisible, setIsFormVisible] = useState(false) // Controla la visibilidad del formulario

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible)
  }



  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'eu' : 'es'
    setLanguage(newLang)
    setStoredLanguage(newLang)
  }
  const slides = [
    { src: '/images/H4/H4_01_planing.png', altText: t.h4.altTextImg[0] },
    { src: '/images/H4/H4_02_wubook.png', altText: t.h4.altTextImg[1] },
    { src: '/images/H4/H4_03_fichaestancia.png', altText: t.h4.altTextImg[2] },
    { src: '/images/H4/H4_04_facturas.png', altText: t.h4.altTextImg[3] },
    { src: '/images/H4/H4_05_partegobernanta.png', altText: t.h4.altTextImg[4] },
    { src: '/images/H4/H4_06_planoparcelas.png', altText: t.h4.altTextImg[5] },
    { src: '/images/H4/H4_07_planing2.png', altText:t.h4.altTextImg[6] },
    { src: '/images/H4/H4_08_parametrosEstablecimiento.png', altText: t.h4.altTextImg[7] },
    { src: '/images/H4/H4_09_parametrosEmails.png', altText: t.h4.altTextImg[8] },
    { src: '/images/H4/H4_10_listadosVentas.png', altText:t.h4.altTextImg[9] },
  ];
  
const sections_arr = [{sect:'features', icon: <Heart />}
                     , {sect:'management', icon: <Settings />}
                     , {sect:'accounting', icon: <Calculator />}
                     , {sect:'optional', icon: <PlusCircle />}
                     , {sect:'benefits', icon: <Key />}] as const;

const sections = sections_arr.map((s) => ({
  key: s.sect,  // sin comillas dentro de la plantilla literal
  section: s.sect,  // sin comillas, porque es el valor de la variable
  title: t.h4[s.sect].title,
  icon: s.icon,
  items: t.h4[s.sect].list 
}));

    return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar toggleLanguage={toggleLanguage} language={language} navItems={t.nav} />
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl space-y-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-[#8B1C1C] flex justify-between items-center">
              <span>{t.h4.title}</span>
              <Tent className="h-12 w-12 ml-2" />
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              {t.h4.subtitle}
            </p>
            <p className="text-gray-600">
                {t.h4.description}
            </p>
            <div className ="flex flex-col items-center w-full max-w-3xl mb-6">
              <Carousel images={slides} />

            </div>
            <div className="mt-8 grid gap-8">
              <TabCtl sections={sections}/>
            </div>
            <div className="mt-12 text-center">
            {! isFormVisible && (<Button onClick={toggleFormVisibility}  className="mt-4 text-base font-bold">{t.h4.cta}</Button>)}
              {isFormVisible && (
              <ContactForm lang={language} source="H4 page" submitButtonClassName="mt-4 text-base font-bold" />)}
            </div>
          </div>
        </section>
      </main>
      <Footer translations={footerT} language={language} />

    </div>
  )
}