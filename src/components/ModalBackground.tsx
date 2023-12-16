import { PropsWithChildren, useContext } from 'react'
import { Context } from '@/contexts/context'

const ModalBackground = ({ children }: PropsWithChildren) => {
  const { setOpenModal } = useContext(Context)

  return (
    <div
      onClick={() => setOpenModal(false)}
      className="fixed inset-0 z-50 flex h-screen w-full flex-row items-center justify-center bg-shadow px-3 backdrop-blur-sm"
    >
      {children}
    </div>
  )
}

export default ModalBackground
