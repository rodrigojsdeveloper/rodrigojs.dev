'use client'

import { Paragraph } from '@/components/paragraph'
import { Socials } from '@/components/socials'
import { Title } from '@/components/title'
import { Form } from '@/components/form'
import { translate } from '@/i18n'

export const Connect = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-5">
      <Title title={translate('connect.title')} />
      <Paragraph text={translate('connect.work')} />
      <Socials />
      <Form />
    </div>
  )
}
