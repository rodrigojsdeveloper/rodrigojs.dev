import { StaticImageData } from 'next/image'
import { MouseEventHandler } from 'react'

export interface ILink {
  Icon: React.ReactNode
  text: string
  href: string
  activeLink?: string
  onClick?: MouseEventHandler<HTMLElement>
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
