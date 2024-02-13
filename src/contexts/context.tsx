'use client'

import { PropsWithChildren, createContext } from 'react'
import { ContextDataProps } from '@/interfaces'
import i18next from 'i18next'

export const Context = createContext({} as ContextDataProps)

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const handleChangeLanguage = (language: string) => {
    i18next.changeLanguage(language)
    window.location.reload()
  }

  const contextData: ContextDataProps = {
    handleChangeLanguage,
  }

  return <Context.Provider value={contextData}>{children}</Context.Provider>
}
