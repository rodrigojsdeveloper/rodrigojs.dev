import { IStack } from '@/interfaces'
import Image from 'next/image'

const Stack = ({ src, name }: IStack) => {
  return (
    <li className="flex select-none items-center gap-2 rounded-lg border border-solid border-gray-2 bg-neutral-900 px-3 py-2">
      <Image src={src} alt={`${name} stack`} width={18} height={18} />
      <span className="text-sm font-normal text-white">{name}</span>
    </li>
  )
}

export default Stack
