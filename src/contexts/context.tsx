'use client'

import { PropsWithChildren, createContext, useState } from 'react'
import { IContextData } from '@/interfaces'

const Context = createContext({} as IContextData)

const ContextProvider = ({ children }: PropsWithChildren) => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOpenDropDown = () => {
    setOpenDropDown(!openDropDown)
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const contextData: IContextData = {
    openDropDown,
    openModal,
    handleOpenDropDown,
    handleOpenModal,
    setOpenDropDown,
    setOpenModal,
  }

  return <Context.Provider value={contextData}>{children}</Context.Provider>
}

export { ContextProvider, Context }
