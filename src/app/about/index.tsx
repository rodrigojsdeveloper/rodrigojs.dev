'use client'

import { Paragraph } from '@/components/paragraph'
import { Stacks } from '@/components/stacks'
import { Title } from '@/components/title'
import { translate } from '@/i18n'
import Link from 'next/link'

export const About = () => {
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
        className="group flex w-fit select-none items-center justify-center gap-2.5 rounded-radius border border-solid border-border px-6 py-2.5 text-sm text-foreground hover:bg-border sm:text-base"
      >
        {translate('about.download')}
      </Link>
      <Stacks pauseOnHover />
    </div>
  )
}
