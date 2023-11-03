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
      className="w-full max-w-488"
    >
      <div className="flex flex-row items-center justify-between gap-2">
        <Input label="Name" type="text" name="name" htmlFor="name" id="name" />
        <Input
          label="Email"
          type="email"
          name="email"
          htmlFor="email"
          id="email"
        />
      </div>
      <Input
        label="Subject"
        type="text"
        name="subject"
        htmlFor="subject"
        id="subject"
      />
      <Textarea
        label="Message"
        type="text"
        name="message"
        htmlFor="message"
        id="message"
      />

      <button
        type="submit"
        className="h-11 w-full rounded-def bg-white text-neutral-900 hover:opacity-80 active:opacity-50"
      >
        Send
      </button>
    </form>
  )
}

export default Form
