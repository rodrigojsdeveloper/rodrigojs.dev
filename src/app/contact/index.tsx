'use client'

import { Paragraph } from '@/components/paragraph'
import { SubTitle } from '@/components/subtitle'
import { Socials } from '@/components/socials'
import { Title } from '@/components/title'
import { Form } from '@/components/form'
import { translate } from '@/i18n'

export const Contact = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <Title title={translate('contact.title')} />
      <div className="flex flex-col gap-y-3">
        <SubTitle title={translate('contact.socials')} />
        <Socials />
      </div>
      <div className="flex flex-col gap-y-1.5 sm:gap-y-3">
        <SubTitle title={translate('contact.send_email')} />
        <Paragraph text={translate('contact.work')} />
      </div>
      <Form />
    </div>
  )
}
