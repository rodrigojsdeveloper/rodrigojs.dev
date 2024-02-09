'use client'

import { PropsWithChildren, createContext, useState } from 'react'
import { IContextData } from '@/interfaces'
import i18next from 'i18next'

export const Context = createContext({} as IContextData)

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOpenDropDown = () => {
    setOpenDropDown(!openDropDown)
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleChangeLanguage = (language: string) => {
    i18next.changeLanguage(language)
    window.location.reload()
  }

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
