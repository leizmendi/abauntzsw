"use client";

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Navbar } from '@/components/Navbar';
import { Footer } from "@/components/Footer";

import { Language } from "@/utils/types";
import { getStoredLanguage, setStoredLanguage } from "@/utils/languageUtils";
import r4Translations from "@/utils/translations_r4";
import { footerTranslations, FooterTranslations } from '@/utils/translations_footer'

export default function R4Page() {
      const [language, setLanguage] = useState<Language>(getStoredLanguage())
    const t = r4Translations[language]
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
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-[#8B1C1C]">
              {t.r4.title}
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              {t.r4.subtitle}
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/software-de-gestion-H4-R4-Abauntz-Software-WNZUttpLLRKbmkEQNxcAghE9HY17H7.jpg"
                  alt="R4 Software Interface"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600">
                  {t.r4.description}
                </p>
                <h2 className="mt-8 text-2xl font-bold text-[#8B1C1C]">{t.r4.features.title}</h2>
                <ul className="mt-4 space-y-2">
                  {t.r4.features.list.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-[#8B1C1C] mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#8B1C1C]">{t.r4.benefits.title}</h2>
              <ul className="mt-4 grid gap-4 md:grid-cols-2">
                {t.r4.benefits.list.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-[#8B1C1C] mr-2 mt-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-[#8B1C1C] text-white hover:bg-[#7A1818]">
                {t.r4.cta}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer translations={footerT} language={language} />
   </div>
  )
}