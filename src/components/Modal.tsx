'use client'

import Home from '@/svgs/Home'
import CustomLink from './CustomLink'
import About from '@/svgs/About'
import Projects from '@/svgs/Projects'
import Contact from '@/svgs/Contact'
import Experiences from '@/svgs/Experiences'
import Github from '@/svgs/Github'
import Linkedin from '@/svgs/Linkedin'
import Instagram from '@/svgs/Instagram'
import Paragraphy from './Paragraphy'
import Close from '@/svgs/Close'
import Line from './Line'
import Link from '@/svgs/Link'
import Code from '@/svgs/Code'
import { IHandleState } from '@/interfaces'

const Modal = ({ handleState }: IHandleState) => {
  return (
    <div className="flex h-[350px] w-full max-w-488 flex-col rounded-def border border-solid border-line bg-black">
      <div className="flex flex-row items-center justify-between p-4">
        <h2>Menu</h2>

        <Close handleState={handleState} />
      </div>

      <Line />

      <div className="overflow-y-auto px-4 py-1.5">
        <Paragraphy text="Navegação" style="text-sm py-2" />
        <nav className="flex flex-col gap-1">
          <CustomLink href="" Icon={<Home />} text="Home" />
          <CustomLink href="about" Icon={<About />} text="About" />
          <CustomLink href="projects" Icon={<Projects />} text="Projects" />
          <CustomLink href="contact" Icon={<Contact />} text="Contact" />
          <CustomLink
            href="experiences"
            Icon={<Experiences />}
            text="Experiences"
          />
        </nav>

        <Paragraphy text="Redes sociais" style="text-sm py-2" />
        <nav className="flex flex-col gap-1">
          <CustomLink href="github" Icon={<Github />} text="Github" />
          <CustomLink href="linkedin" Icon={<Linkedin />} text="Linkedin" />
          <CustomLink href="instagram" Icon={<Instagram />} text="Instagram" />
        </nav>

        <Paragraphy text="Sugestões" style="text-sm py-2" />
        <nav className="flex flex-col gap-1">
          <CustomLink href="link" Icon={<Link />} text="Copy link" />
          <CustomLink href="code" Icon={<Code />} text="Source code" />
        </nav>
      </div>
    </div>
  )
}

export default Modal
