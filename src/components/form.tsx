'use client'

import { ChangeEvent } from 'react'
import { Textarea } from './textarea'
import { Input } from './input'
import { translate } from '@/i18n'
import { toast } from 'sonner'

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
      toast.error(translate('notification.form.error'))
    } else {
      form.reset()
      toast.success(translate('notification.form.success'))
    }
  }

  return (
    <form
      id="contacts"
      action="https://formspree.io/f/mlekpwdz"
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            placeholder={translate('connect.form.name')}
            type="text"
            name="name"
          />
          <Input
            placeholder={translate('connect.form.email')}
            type="email"
            name="email"
          />
        </div>
        <Textarea
          placeholder={translate('connect.form.message')}
          type="text"
          name="message"
        />
      </div>
      <button
        type="submit"
        className="h-11 rounded-radius bg-foreground text-sm text-background hover:opacity-90 focus-visible:opacity-90"
      >
        {translate('connect.form.send')}
      </button>
    </form>
  )
}
