"use client";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

const Form = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      id="contacts"
      action="https://formspree.io/f/mlekpwdz"
      method="POST"
      onSubmit={handleSubmit}
      className="w-full max-w-448"
    >
      <div className="flex flex-row justify-between items-center gap-2">
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
        className="w-full h-44 bg-gray-1 text-gray-9 font-normal text-md rounded-def duration-300 hover:bg-gray-10"
      >
        Send
      </button>
    </form>
  );
};

export { Form };
