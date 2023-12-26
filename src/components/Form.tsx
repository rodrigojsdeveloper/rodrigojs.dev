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
      className="flex w-full max-w-[30.5rem] flex-col gap-y-4"
    >
      <div className="flex flex-row items-center justify-between gap-2">
        <Input label="Nome" type="text" name="name" htmlFor="name" id="name" />
        <Input
          label="Email"
          type="email"
          name="email"
          htmlFor="email"
          id="email"
        />
      </div>
      <Input
        label="Assunto"
        type="text"
        name="subject"
        htmlFor="subject"
        id="subject"
      />
      <Textarea
        label="Mensagem"
        type="text"
        name="message"
        htmlFor="message"
        id="message"
      />

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
