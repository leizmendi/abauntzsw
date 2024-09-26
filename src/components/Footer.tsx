import Link from 'next/link'
import { FooterTranslations } from '@/utils/translations_footer'

interface FooterProps {
  translations: FooterTranslations;
  language: string;
}

export const Footer: React.FC<FooterProps> = ({ translations }) => {
  return (
    <footer className="py-6 w-full shrink-0 border-t">
      <div className="container mx-auto px-4 md:px-responsive-x flex flex-col gap-2 sm:flex-row items-center">
        <p className="text-xs text-gray-500">
          {translations.rights}
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href={`/aviso-legal`}>
            {translations.legal}
          </Link>
        </nav>
      </div>
    </footer>
  )
}