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
      className="flex w-full flex-col gap-y-2.5 sm:gap-y-4"
    >
      <div className="flex flex-row gap-2.5 sm:gap-4">
        <Input placeholder="Nome" type="text" name="name" />
        <Input placeholder="Email" type="email" name="email" />
      </div>
      <Textarea placeholder="Mensagem" type="text" name="message" />

      <button
        type="submit"
        className="hover:bg-button h-11 w-full rounded-def bg-secondary text-sm text-background"
      >
        Enviar
      </button>
    </form>
  )
}

export default Form
