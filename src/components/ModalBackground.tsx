import { PropsWithChildren } from 'react'

const ModalBackground = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-shadow fixed inset-0 z-50 flex h-screen w-full flex-row items-center justify-center px-5 max-sm:bottom-0 max-sm:items-end max-sm:px-0">
      {children}
    </div>
  )
}

export default ModalBackground
