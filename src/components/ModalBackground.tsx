import { PropsWithChildren } from 'react'

const ModalBackground = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed inset-0 z-50 flex max-h-svh w-full flex-row items-center justify-center bg-shadow p-3 backdrop-blur-sm">
      {children}
    </div>
  )
}

export default ModalBackground
