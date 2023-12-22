import { IHandleState } from '@/interfaces'
import { PropsWithChildren } from 'react'

const Button = ({ handleState, children }: PropsWithChildren<IHandleState>) => {
  return (
    <button
      onClick={handleState}
      className="group flex h-8 w-8 items-center justify-center rounded-def p-1.5 hover:bg-link-hover active:bg-link-active"
    >
      {children}
    </button>
  )
}

export default Button
