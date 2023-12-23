import { IStack } from '@/interfaces'
import Image from 'next/image'

const Stack = ({ src, name }: IStack) => {
  return (
    <li className="flex select-none items-center gap-2 rounded-def border border-solid border-gray-200 bg-gray-300 px-3 py-2">
      <Image src={src} alt={`${name} stack`} width={18} height={18} priority />
      <span className="text-primary text-sm">{name}</span>
    </li>
  )
}

export default Stack
