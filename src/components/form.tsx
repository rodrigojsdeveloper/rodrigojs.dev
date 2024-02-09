'use client'

import { ChangeEvent } from 'react'
import { Textarea } from './textarea'
import { Input } from './input'
import { notification } from './notification'
import { translate } from '@/i18n'

export const Form = () => {
  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      notification({
        description: translate('notification.form.success'),
        error: true,
      })
    } else {
      form.reset()
      notification({
        description: translate('notification.form.success'),
      })
    }
  }

  return (
    <form
      id="contacts"
      action="https://formspree.io/f/mlekpwdz"
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-2.5 sm:gap-y-4"
    >
      <div className="flex flex-row gap-2.5 sm:gap-4">
        <Input
          placeholder={translate('contact.form.name')}
          type="text"
          name="name"
        />
        <Input
          placeholder={translate('contact.form.email')}
          type="email"
          name="email"
        />
      </div>
      <Textarea
        placeholder={translate('contact.form.message')}
        type="text"
        name="message"
      />

      <button
        type="submit"
        className="h-11 rounded-radius bg-foreground text-sm text-background hover:opacity-90"
      >
        {translate('contact.form.send')}
      </button>
    </form>
  )
}