import { IHandleState } from '@/interfaces'
import { PropsWithChildren } from 'react'

const Button = ({ handleState, children }: PropsWithChildren<IHandleState>) => {
  return (
    <button
      onClick={handleState}
      className="group flex h-8 w-8 items-center justify-center rounded-def p-1.5 hover:bg-hover active:bg-active"
    >
      {children}
    </button>
  )
}

export default Button
