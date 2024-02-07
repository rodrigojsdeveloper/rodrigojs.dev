import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import ptBR from './pt-BR'
import enUS from './en-US'

i18next.use(LanguageDetector).init({
  resources: {
    pt: {
      translation: {
        ...ptBR,
      },
    },
    en: {
      translation: {
        ...enUS,
      },
    },
  },
})

export const translate = i18next.t
