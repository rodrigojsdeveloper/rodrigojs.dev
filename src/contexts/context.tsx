'use client'

import { PropsWithChildren, createContext, useState } from 'react'
import { IContextData } from '@/interfaces'

const Context = createContext({} as IContextData)

const ContextProvider = ({ children }: PropsWithChildren) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
    setOpenMenu(false)
  }

  const contextData: IContextData = {
    openMenu,
    openModal,
    handleOpenMenu,
    handleOpenModal,
    setOpenMenu,
    setOpenModal,
  }

  return <Context.Provider value={contextData}>{children}</Context.Provider>
}

export { ContextProvider, Context }
