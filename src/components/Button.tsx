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
      className="rounded-radius group flex size-8 items-center justify-center border border-solid border-transparent p-1.5 hover:border-border"
    >
      {children}
    </button>
  )
}

export default Button
