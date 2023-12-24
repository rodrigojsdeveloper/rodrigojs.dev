import { IHandleState } from '@/interfaces'
import { PropsWithChildren } from 'react'

const Button = ({
  handleState,
  arialLabel,
  children,
}: PropsWithChildren<IHandleState>) => {
  return (
    <button
      onClick={handleState}
      aria-label={arialLabel}
      className="group flex size-8 items-center justify-center rounded-def p-1.5 hover:bg-hover active:bg-active"
    >
      {children}
    </button>
  )
}

export default Button
