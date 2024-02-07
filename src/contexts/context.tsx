'use client'

import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import { IContextData } from '@/interfaces'
import i18next from 'i18next'

const Context = createContext({} as IContextData)

const ContextProvider = ({ children }: PropsWithChildren) => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [languageSelected, setLanguageSelected] = useState('')

  const handleOpenDropDown = () => {
    setOpenDropDown(!openDropDown)
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleChangeLanguage = (language: string) => {
    i18next.changeLanguage(language)
    setLanguageSelected(language)
  }

  useEffect(() => {
    handleChangeLanguage(languageSelected)
  }, [languageSelected])

  const contextData: IContextData = {
    openDropDown,
    openModal,
    handleOpenDropDown,
    handleOpenModal,
    setOpenDropDown,
    setOpenModal,
    handleChangeLanguage,
  }

  return <Context.Provider value={contextData}>{children}</Context.Provider>
}

export { ContextProvider, Context }
