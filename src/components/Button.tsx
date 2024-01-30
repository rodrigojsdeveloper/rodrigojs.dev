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
      className="group flex size-8 items-center justify-center rounded-def border border-solid border-transparent p-1.5 hover:border-gray-200"
    >
      {children}
    </button>
  )
}

export default Button
