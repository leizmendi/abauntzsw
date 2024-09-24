"use client";

import { useState, useEffect } from "react"
import { Footer } from "@/components/Footer"
import { legalTranslations, LegalTranslations } from '@/utils/translations_legal'
import { footerTranslations, FooterTranslations } from '@/utils/translations_footer'
import { Navbar } from "@/components/Navbar";
import { Language } from '@/utils/types'
import { getStoredLanguage, setStoredLanguage } from "@/utils/languageUtils";
import './styles.css'  // Importa los estilos CSS

export default function LegalNoticePage() {
  const [language, setLanguage] = useState<Language>(getStoredLanguage())
  const t: LegalTranslations = legalTranslations[language]
  const footerT: FooterTranslations = footerTranslations[language]



  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'eu' : 'es'
    setLanguage(newLang)
    setStoredLanguage(newLang)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar toggleLanguage={toggleLanguage} language={language} navItems={t.nav}/>
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 md:px-responsive-x py-8">
          <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: t.content }} className="prose max-w-none legal-content" />
        </div>
      </main>
      <Footer translations={footerT} language={language} />
    </div>
  )
}