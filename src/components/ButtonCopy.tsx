'use client'

import { useState } from 'react'

const ButtonCopy = () => {
  const [copy, setCopy] = useState<boolean>(false)

  const copyLink = () => {
    navigator.clipboard.writeText('rodrigojsdeveloper@gmail.com')
    setCopy(true)
    setTimeout(() => setCopy(false), 2000)
  }

  return (
    <button
      onClick={copyLink}
      className="h-11 w-full max-w-152 rounded-def bg-white text-sm font-medium text-neutral-900 hover:opacity-80 active:opacity-50"
    >
      {copy ? 'Copied!' : 'Copy email'}
    </button>
  )
}

export default ButtonCopy
