'use client'

import { ChangeEvent } from 'react'
import Textarea from './Textarea'
import Input from './Input'
import notification from './Notification'

const Form = () => {
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
        title: 'Erro',
        description: 'Erro ao enviar o email.',
        error: true,
      })
    } else {
      form.reset()
      notification({
        title: 'Enviado',
        description: 'Email enviado com sucesso.',
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
        <Input placeholder="Nome" type="text" name="name" />
        <Input placeholder="Email" type="email" name="email" />
      </div>
      <Textarea placeholder="Mensagem" type="text" name="message" />

      <button
        type="submit"
        className="h-11 rounded-def bg-foreground text-sm text-background hover:opacity-90"
      >
        Enviar
      </button>
    </form>
  )
}

export default Form
