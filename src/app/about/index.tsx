'use client'

import Paragraph from '@/components/Paragraph'
import { Stacks } from '@/components/Stacks'
import Title from '@/components/Title'
import { translate } from '@/i18n'
import Link from 'next/link'

const About = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title={translate('about.title')} />
        <div className="flex flex-col gap-3">
          <Paragraph text={translate('about.first.paragraph')} />

          <Paragraph text={translate('about.second.paragraph')} />

          <Paragraph text={translate('about.third.paragraph')} />
        </div>
      </div>
      <Link
        target="_blank"
        href="https://rodrigojsdeveloper.github.io/cv"
        className="group flex h-10 w-full max-w-[7.4rem] select-none items-center justify-center gap-2.5 rounded-radius border border-solid border-border p-2 text-sm text-foreground hover:bg-border sm:h-11 sm:max-w-[9rem] sm:text-base"
      >
        {translate('about.downloadCV')}
      </Link>
      <Stacks pauseOnHover />
    </div>
  )
}

export { About }
