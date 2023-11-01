import { IStack } from '@/interfaces'
import Image from 'next/image'

const Stack = ({ src, name }: IStack) => {
  return (
    <i className="flex select-none items-center gap-2 rounded-lg border border-solid border-gray-4 bg-gray-6 px-3 py-2">
      <Image src={src} alt={name} width={18} height={18} />
      <span className="text-sm font-normal text-white">{name}</span>
    </i>
  )
}

export default Stack
