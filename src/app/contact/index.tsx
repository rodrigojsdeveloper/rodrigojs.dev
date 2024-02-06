'use client'

import SocialNetworks from '@/components/SocialNetworks'
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import Form from '@/components/Form'
import { translate } from '@/i18n'

const Contact = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title={translate('contact.title')} />
        <Paragraph text={translate('contact.description')} />
      </div>
      <div className="flex flex-col gap-y-3">
        <h2 className="leading-relaxed">{translate('contact.socials')}</h2>

        <SocialNetworks />
      </div>
      <div className="flex flex-col gap-y-1.5 sm:gap-y-3">
        <h2 className="leading-relaxed">{translate('contact.send_email')}</h2>

        <Paragraph text={translate('contact.work')} />
      </div>
      <Form />
    </div>
  )
}

export { Contact }
