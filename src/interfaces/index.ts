import {
  Dispatch,
  SetStateAction,
  MouseEventHandler,
  HTMLAttributeAnchorTarget,
} from 'react'
import NextImage, { StaticImageData } from 'next/image'

export interface ICustomLink {
  Icon: React.ReactNode
  text: string
  href: string
  activeLink?: string
  onClick?: MouseEventHandler<HTMLElement>
  style?: string
  externalLink?: boolean
  target?: HTMLAttributeAnchorTarget
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

export interface IParagraph {
  text: string
  style?: string
}

export interface InputProps {
  type: string
  name: string
  placeholder: string
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
  arialLabel: string
}

export interface IContextData {
  openMenu: boolean
  openModal: boolean
  handleOpenMenu: () => void
  handleOpenModal: () => void
  setOpenMenu: Dispatch<SetStateAction<boolean>>
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

export interface ImageProps
  extends React.ComponentPropsWithoutRef<typeof NextImage> {
  zoomHover?: boolean
  className?: string
}

export interface ISvg {
  height: string
  width: string
}
