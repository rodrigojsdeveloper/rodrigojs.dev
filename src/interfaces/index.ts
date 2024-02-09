import React, {
  Dispatch,
  SetStateAction,
  MouseEventHandler,
  HTMLAttributeAnchorTarget,
} from 'react'
import NextImage, { StaticImageData } from 'next/image'
import { LucideIcon } from 'lucide-react'

export interface ICustomLink {
  Icon: React.ReactNode
  text: string
  href: string
  activeLink?: string
  onClick?: MouseEventHandler<HTMLElement>
  className?: string
  externalLink?: boolean
  target?: HTMLAttributeAnchorTarget
  isLink?: boolean
}

export interface IStack {
  Icon: React.ReactNode
  bg: string
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
  className?: string
}

export interface InputProps {
  type: string
  name: string
  placeholder: string
}

export interface ITitle {
  title: string
}

export interface IPathname {
  pathname?: string
}

export interface IHandleState {
  handleState: () => void
  arialLabel: string
}

export interface IContextData {
  openDropDown: boolean
  openModal: boolean
  handleOpenDropDown: () => void
  handleOpenModal: () => void
  setOpenDropDown: Dispatch<SetStateAction<boolean>>
  setOpenModal: Dispatch<SetStateAction<boolean>>
  handleChangeLanguage: (language: string) => void
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

export interface INotificationProps {
  description: string
  error?: boolean
}

export interface IStacks {
  pauseOnHover?: boolean
}

export interface IWebSiteProps {
  href: string
  title: string
  icon: LucideIcon
}

export interface IThemeProps {
  theme: string
  title: string
  icon: LucideIcon
}

export interface ILanguageProps {
  locale: string
  title: string
  icon: () => JSX.Element
}

export interface ISocialProps {
  link: string
  title: string
  icon: LucideIcon
}

export interface ILINKS {
  website: IWebSiteProps[]
  mobile_website: IWebSiteProps[]
  themes: IThemeProps[]
  languages: ILanguageProps[]
  socials: ISocialProps[]
}
