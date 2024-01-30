import CustomLink from '@/components/CustomLink'
import Paragraph from '@/components/Paragraph'

const NotFound = () => {
  return (
    <div className="flex h-full animate-up flex-col items-center gap-y-5 pt-8 lg:h-[30rem] lg:justify-center lg:pt-0">
      <Paragraph
        text="A página que você está tentando acessar não existe."
        style="text-center"
      />

      <CustomLink
        href=""
        Icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="#888888"
              fillRule="evenodd"
              d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0"
              clipRule="evenodd"
              className="duration-300 group-hover:-translate-x-0.5"
            />
          </svg>
        }
        text="Voltar"
        style="max-w-[7.563rem] text-gray-100 justify-center"
        isLink
      />
    </div>
  )
}

export default NotFound
