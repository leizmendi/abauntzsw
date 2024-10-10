'use client'

import { useState } from "react"
import ReCAPTCHA from 'react-google-recaptcha'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ContactTranslations, contactTranslations } from "@/utils/translations_contact"
//import { HomeTranslations } from "@/utils/translations_home"
import { FormEvent } from "react"
import { Language } from '@/utils/types'
//import { getStoredLanguage } from "@/utils/languageUtils"

interface ContactFormProps {
  lang: Language
  source: string
  submitButtonClassName?: string
}

export const ContactForm = ({ lang, source, submitButtonClassName}: ContactFormProps) => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

/*  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    setLanguage(getStoredLanguage())
  }, [])*/

  const t: ContactTranslations = contactTranslations[lang]

  const handleCaptchaChange = (value: string | null) => {
    setRecaptchaToken(value)
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!recaptchaToken) {
      alert(t.message.noRobot)
      return
    }

    setIsSubmitting(true)

    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, recaptchaToken }),
      })

      if (response.ok) {
        alert(t.message.messageOK)
        form.reset()
        setRecaptchaToken(null)
      } else {
        const errorData = await response.json()
        alert(`${t.message.messageError1} ${errorData.message || t.message.unknown}`)
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      alert(t.message.messageError2)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="flex flex-col space-y-2" onSubmit={onSubmit}>
      <Input type="hidden" name="language" value={lang} />
      <Input type="hidden" name="source" value={source} />
      <Input type="text" name="name" placeholder={t.contact.name} className="bg-white" required />
      <Input type="email" name="email" placeholder={t.contact.email} className="bg-white" required />
      <Input type="tel" name="phone" placeholder={t.contact.phone} className="bg-white" />
      <textarea
        name="message"
        placeholder={t.contact.message}
        className="bg-white p-2 rounded-md border border-gray-300"
        rows={4}
        required
      />

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        onChange={handleCaptchaChange}
        hl={lang}
      />

      <Button
        type="submit"
        className={submitButtonClassName || "bg-white text-[#8B1C1C] hover:bg-gray-100"} 
        disabled={isSubmitting}
      >
        {isSubmitting ? t.message.sending : t.contact.submit}
      </Button>
    </form>
  )
}