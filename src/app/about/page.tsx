import GroupedItems from '@/components/GroupedItems'
import Paragraph from '@/components/Paragraph'
import SubTitle from '@/components/SubTitle'
import Stack from '@/components/Stack'
import Title from '@/components/Title'
import Line from '@/components/Line'
import stacks from '@/utils/stacks'
import Link from 'next/link'
import Download from '@/svgs/Download'

const About = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title="Sobre" />
        <div className="flex flex-col gap-3">
          <Paragraph text="Sou especialista em criar e otimizar experiências de usuário em interfaces, com mais de 3 anos de experiência. Minha expertise abrange a concepção, design e implementação de elementos visuais para interações intuitivas. Possuo habilidades avançadas na análise de requisitos, propondo soluções de design inovadoras e garantindo a integração perfeita de componentes." />

          <Paragraph text="Tenho experiência em projetos front-end, desenvolvendo aplicações interativas e responsivas para diversos dispositivos. Minha familiaridade com o desenvolvimento back-end me permite criar soluções eficientes no lado do servidor, e também desenvolver aplicativos móveis para Android e iOS." />

          <Paragraph text="Possuo conhecimento em DevOps, incluindo integração e entrega contínua e automação de processos de infraestrutura. Quero aprimorar minhas habilidades técnicas para liderar projetos que resultem em interfaces atrativas, funcionais e de alto desempenho." />
        </div>
      </div>

      <div className="flex w-full items-center gap-2">
        <Link
          target="_blank"
          href="https://rodrigojsdeveloper.github.io/cv"
          className="group flex h-10 w-full max-w-[8.8rem] select-none items-center justify-center gap-2.5 rounded-def border border-solid border-gray-200 p-2 text-sm font-medium text-gray-100 hover:bg-gray-200 hover:text-primary active:text-primary sm:h-11 sm:max-w-[9.375rem] sm:text-base"
        >
          <Download height="20" width="20" /> CV Download
        </Link>
      </div>
      <Line />
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-1.5 sm:gap-y-3">
          <SubTitle title="Habilidades" />
          <Paragraph text="Meus conhecimentos técnicos:" />
        </div>

        <GroupedItems>
          {stacks.map((stack, index) => (
            <Stack src={stack.src} bg={stack.bg} key={index} />
          ))}
        </GroupedItems>
      </div>
    </div>
  )
}

export default About
