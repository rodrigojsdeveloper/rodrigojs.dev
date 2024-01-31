import { IStack } from '@/interfaces'
import Image from 'next/image'

const Stack = ({ src, bg }: IStack) => {
  return (
    <li
      style={{ backgroundColor: bg }}
      className={`${bg} flex size-14 select-none items-center justify-center gap-2 rounded-def px-3 py-2`}
    >
      <Image src={src} alt={`${bg} stack`} width={48} height={48} priority />
    </li>
  )
}

export default Stack
