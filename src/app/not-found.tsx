import CustomLink from '@/components/CustomLink'
import Paragraph from '@/components/Paragraph'
import { MoveLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="flex h-full animate-up flex-col items-center gap-y-5 pt-8 lg:h-[30rem] lg:justify-center lg:pt-0">
      <Paragraph
        text="A página que você está tentando acessar não existe."
        className="text-center"
      />

      <CustomLink
        href=""
        Icon={
          <MoveLeft
            size={18}
            strokeWidth={1.5}
            className="duration-300 group-hover:-translate-x-0.5"
          />
        }
        text="Voltar"
        className="max-w-[7.563rem] justify-center text-gray-100"
        isLink
      />
    </div>
  )
}

export default NotFound
