import { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import { StaticImageData } from 'next/image'

export interface ICustomLink {
  Icon: React.ReactNode
  text: string
  href: string
  activeLink?: string
  onClick?: MouseEventHandler<HTMLElement>
  style?: string
}

export interface IStack {
  src: StaticImageData
  name: string
}

export interface IProjectProps {
  img: StaticImageData
  title: string
  description: string
  link: string
}

export interface IProject {
  project: IProjectProps
}

export interface IParagraphy {
  text: string
  style?: string
}

export interface InputProps {
  label: string
  type: string
  name: string
  htmlFor: string
  id: string
}

export interface IJobProps {
  company: string
  position: string
  description: string
  date: string
}

export interface IJob {
  job: IJobProps
}

export interface ITitle {
  title: string
}

export interface IMediaProps {
  name: string
  link: string
  svg: JSX.Element | null
}

export interface IMedia {
  media: IMediaProps
}

export interface IPathname {
  pathname?: string
}

export interface IHandleState {
  handleState: () => void
}

export interface IContextData {
  openMenu: boolean
  openModal: boolean
  handleOpenMenu: () => void
  handleOpenModal: () => void
  setOpenMenu: Dispatch<SetStateAction<boolean>>
  setOpenModal: Dispatch<SetStateAction<boolean>>
}
