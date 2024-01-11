'use client'

import { PropsWithChildren, createContext, useState } from 'react'
import { IContextData } from '@/interfaces'

const Context = createContext({} as IContextData)

const ContextProvider = ({ children }: PropsWithChildren) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [notification, setNotification] = useState<boolean>(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleNotification = () => {
    setNotification(true)

    setTimeout(() => {
      setNotification(false)
    }, 4000)
  }

  const contextData: IContextData = {
    openMenu,
    openModal,
    notification,
    handleOpenMenu,
    handleOpenModal,
    handleNotification,
    setOpenMenu,
    setOpenModal,
  }

  return <Context.Provider value={contextData}>{children}</Context.Provider>
}

export { ContextProvider, Context }
