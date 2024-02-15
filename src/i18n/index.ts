import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import br from './br'
import en from './en'

i18next.use(LanguageDetector).init({
  fallbackLng: 'pt',
  resources: {
    pt: {
      translation: {
        ...br,
      },
    },
    en: {
      translation: {
        ...en,
      },
    },
  },
})

export const translate = i18next.t
