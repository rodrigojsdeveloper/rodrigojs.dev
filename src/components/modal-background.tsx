import { PropsWithChildren } from 'react'

export const ModalBackground = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full flex-row items-center justify-center bg-shadow p-3 backdrop-blur-sm">
      {children}
    </div>
  )
}
