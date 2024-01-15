import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import Line from '@/components/Line'
import Link from 'next/link'
import Download from '@/svgs/Download'
import Stacks from '@/components/Stacks'

const About = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title="Sobre" />
        <div className="flex flex-col gap-3">
          <Paragraph text="Com mais de 3 anos de experiência em desenvolvimento, sou especialista na criação de websites responsivos, minha experiência abrange design e implementação de elementos visuais para interações intuitivas. Possuo habilidades avançadas na análise de requisitos e soluções de design inovadoras." />

          <Paragraph text="Tenho experiência em projetos front-end, desenvolvendo aplicações interativas e responsivas para diversos dispositivos. Minha familiaridade com o desenvolvimento back-end me permite criar soluções eficientes no lado do servidor, e também desenvolver aplicativos móveis para Android e iOS." />

          <Paragraph text="Possuo conhecimento em DevOps, incluindo integração e entrega contínua e automação de processos de infraestrutura. Quero aprimorar minhas habilidades técnicas para liderar projetos que resultem em interfaces atrativas, funcionais e de alto desempenho." />
        </div>
      </div>
      <Link
        target="_blank"
        href="https://rodrigojsdeveloper.github.io/cv"
        className="group flex h-10 w-full max-w-[8.8rem] select-none items-center justify-center gap-2.5 rounded-def border border-solid border-gray-200 p-2 text-sm font-medium text-gray-100 hover:bg-gray-200 hover:text-primary active:text-primary sm:h-11 sm:max-w-[9.375rem]"
      >
        <Download height="20" width="20" /> CV Download
      </Link>
      <Line />
      <Stacks />
    </div>
  )
}

export default About
