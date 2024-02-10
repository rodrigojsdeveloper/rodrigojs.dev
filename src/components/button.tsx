import { IHandleState } from '@/interfaces'
import { PropsWithChildren } from 'react'

export const Button = ({
  handleState,
  arialLabel,
  children,
}: PropsWithChildren<IHandleState>) => {
  return (
    <button
      onClick={handleState}
      aria-label={arialLabel}
      className="group flex size-8 items-center justify-center rounded-radius border border-solid border-transparent p-1.5 hover:border-border focus-visible:border-border"
    >
      {children}
    </button>
  )
}
