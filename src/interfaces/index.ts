import React from 'react'
import NextImage, { StaticImageData } from 'next/image'
import { LucideIcon } from 'lucide-react'

export interface CustomLinkProps {
  Icon: React.ReactNode
  text: string
  href: string
  activeLink?: string
  onClick?: React.MouseEventHandler<HTMLElement>
  className?: string
  externalLink?: boolean
  target?: React.HTMLAttributeAnchorTarget
  isLink?: boolean
}

export interface StackProps {
  icon: string
  bg: string
}

export interface ProjectProps {
  img: StaticImageData
  title: string
  link: string
}

export interface ParagraphProps {
  text: string
  className?: string
}

export interface InputProps {
  type: string
  name: string
  placeholder: string
}

export interface TitleProps {
  title: string
}

export interface ImageProps
  extends React.ComponentPropsWithoutRef<typeof NextImage> {
  zoomHover?: boolean
  className?: string
}

export interface StacksProps {
  pauseOnHover?: boolean
}

export interface WebSiteProps {
  href: string
  title: string
  icon: LucideIcon
}

export interface ThemeProps {
  theme: string
  title: string
  icon: LucideIcon
}

export interface LanguageProps {
  locale: string
  title: string
  icon: LucideIcon
}

export interface SocialProps {
  link: string
  title: string
  icon: LucideIcon
}

export interface LinksProps {
  website: WebSiteProps[]
  mobile_website: WebSiteProps[]
  languages: LanguageProps[]
  themes: ThemeProps[]
  lastest_projects: SocialProps[]
  socials: SocialProps[]
}
