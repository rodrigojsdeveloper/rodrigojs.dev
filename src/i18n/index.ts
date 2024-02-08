import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import br from './br'
import en from './en'
import es from './es'

i18next.use(LanguageDetector).init({
  fallbackLng: (options: any) => {
    const detectedLng = options.detectedLng
    return detectedLng || 'pt'
  },
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
    es: {
      translation: {
        ...es,
      },
    },
  },
})

export const translate = i18next.t
