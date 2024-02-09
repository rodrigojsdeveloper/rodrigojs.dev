import { translate } from '@/i18n'
import { ILINKS } from '@/interfaces'
import { Brazil } from '@/svgs/brazil'
import { EUA } from '@/svgs/eua'
import { Spain } from '@/svgs/spain'
import {
  Home,
  CircleUserRound,
  PanelsTopLeft,
  MessageCircle,
  Linkedin,
  Instagram,
  Github,
  Sun,
  Moon,
  Laptop,
} from 'lucide-react'

export const LINKS: ILINKS = {
  website: [
    {
      href: '',
      title: translate('links.home'),
      icon: Home,
    },
    {
      href: 'about',
      title: translate('links.about'),
      icon: CircleUserRound,
    },
    {
      href: 'projects',
      title: translate('links.projects'),
      icon: PanelsTopLeft,
    },
    {
      href: 'contact',
      title: translate('links.contact'),
      icon: MessageCircle,
    },
  ],
  mobile_website: [
    {
      href: 'about',
      title: translate('links.about'),
      icon: CircleUserRound,
    },
    {
      href: 'projects',
      title: translate('links.projects'),
      icon: PanelsTopLeft,
    },
    {
      href: 'contact',
      title: translate('links.contact'),
      icon: MessageCircle,
    },
  ],
  themes: [
    {
      theme: 'light',
      title: translate('links.light'),
      icon: Sun,
    },
    {
      theme: 'dark',
      title: translate('links.dark'),
      icon: Moon,
    },
    {
      theme: 'system',
      title: translate('links.system'),
      icon: Laptop,
    },
  ],
  languages: [
    {
      locale: 'pt-BR',
      title: translate('links.portuguese'),
      icon: Brazil,
    },
    {
      locale: 'en-US',
      title: translate('links.english'),
      icon: EUA,
    },
    {
      locale: 'es',
      title: translate('links.spanish'),
      icon: Spain,
    },
  ],
  socials: [
    {
      link: 'https://github.com/rodrigojsdeveloper',
      title: 'GitHub',
      icon: Github,
    },
    {
      link: 'https://www.linkedin.com/in/rodrigo-de-jesus-silva',
      title: 'LinkedIn',
      icon: Linkedin,
    },
    {
      link: 'https://www.instagram.com/eurodrigojs',
      title: 'Instagram',
      icon: Instagram,
    },
  ],
}
