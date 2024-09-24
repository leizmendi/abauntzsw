"use client";

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer";
import Link from "next/link"
import Image from "next/image"

import { Language } from "@/utils/types";
import { getStoredLanguage, setStoredLanguage } from "@/utils/languageUtils";
import h4Translations from "@/utils/translations_h4";
import { footerTranslations, FooterTranslations } from '@/utils/translations_footer'

export default function H4Page() {
  const [language, setLanguage] = useState<Language>(getStoredLanguage())
  const t = h4Translations[language]
  const footerT: FooterTranslations = footerTranslations[language]


  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'eu' : 'es'
    setLanguage(newLang)
    setStoredLanguage(newLang)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar toggleLanguage={toggleLanguage} language={language} navItems={t.nav} />
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-responsive-x">
            <Link href={`/?lang=${language}`} className="inline-flex items-center text-[#8B1C1C] hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.nav.home}
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#8B1C1C]">
              {t.h4.title}
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              {t.h4.subtitle}
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <Image
                  src="/images/h4-interface.jpg"
                  alt="H4 Software Interface"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600">
                  {t.h4.description}
                </p>
                <h2 className="mt-8 text-2xl font-bold text-[#8B1C1C]">{t.h4.features.title}</h2>
                <ul className="mt-4 space-y-2">
                  {t.h4.features.list.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-[#8B1C1C] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#8B1C1C]">{t.h4.management.title}</h2>
              <ul className="mt-4 grid gap-4 md:grid-cols-2">
                {t.h4.management.list.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-[#8B1C1C] mr-2 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#8B1C1C]">{t.h4.accounting.title}</h2>
              <ul className="mt-4 grid gap-4 md:grid-cols-2">
                {t.h4.accounting.list.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-[#8B1C1C] mr-2 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#8B1C1C]">{t.h4.optional.title}</h2>
              <ul className="mt-4 grid gap-4 md:grid-cols-2">
                {t.h4.optional.list.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-[#8B1C1C] mr-2 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#8B1C1C]">{t.h4.additional.title}</h2>
              <ul className="mt-4 grid gap-4 md:grid-cols-2">
                {t.h4.additional.list.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-[#8B1C1C] mr-2 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-[#8B1C1C] text-white hover:bg-[#7A1818]">
                {t.h4.cta}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer translations={footerT} language={language} />

    </div>
  )
}