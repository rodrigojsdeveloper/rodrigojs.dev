import { IStack } from '@/interfaces'
import Image from 'next/image'

const Stack = ({ src, name }: IStack) => {
  return (
    <li className="flex select-none items-center gap-2 rounded-def border border-solid border-line bg-dark-grey px-3 py-2">
      <Image src={src} alt={`${name} stack`} width={18} height={18} priority />
      <span className="text-sm text-zinc-50">{name}</span>
    </li>
  )
}

export default Stack
