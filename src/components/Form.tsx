'use client'

import { ChangeEvent } from 'react'
import Textarea from './Textarea'
import Input from './Input'

const Form = () => {
  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
      if (response.ok) {
        form.reset()
      }
    } catch (error) {
      console.log(error)
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
      <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-4">
        <Input placeholder="Nome" type="text" name="name" />
        <Input placeholder="Email" type="email" name="email" />
      </div>
      <Textarea placeholder="Mensagem" type="text" name="message" />

      <button
        type="submit"
        className="h-11 w-full rounded-def bg-primary text-gray-300 hover:opacity-80 active:opacity-50"
      >
        Enviar
      </button>
    </form>
  )
}

export default Form
