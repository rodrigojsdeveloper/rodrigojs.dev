'use client'

import { Paragraph } from '@/components/paragraph'
import { Stacks } from '@/components/stacks'
import { Title } from '@/components/title'
import { translate } from '@/i18n'

export const About = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-5">
      <Title title={translate('about.title')} />
      <div className="flex flex-col gap-2 sm:gap-3">
        <Paragraph text={translate('about.first.paragraph')} />
        <Paragraph text={translate('about.second.paragraph')} />
        <Paragraph text={translate('about.third.paragraph')} />
      </div>
      <Stacks pauseOnHover />
    </div>
  )
}
