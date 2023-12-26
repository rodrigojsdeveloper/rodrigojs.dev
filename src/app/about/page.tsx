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
        <div className="space-y-3 leading-7">
          <Paragraph text="Sou especialista em criar e otimizar experiências de usuário no desenvolvimento de interfaces. Minha experiência abrange a concepção, design e implementação de elementos visuais para interações intuitivas. Minhas habilidades incluem análise de requisitos, soluções de design inovadoras e integração perfeita de componentes." />

          <Paragraph text="Tenho experiência em projetos vários front-end, desenvolvendo aplicações interativas e responsivas para diversos dispositivos. Além disso, estou familiarizado com desenvolvimento back-end, criação de soluções eficientes no lado do servidor e desenvolvimento de aplicativos móveis para plataformas Android e iOS." />

          <Paragraph text="Possuo conhecimento em DevOps, incluindo integração e entrega contínua e automação de processos de infraestrutura. Quero aprimorar minhas habilidades técnicas para liderar projetos que resultem em interfaces atrativas, funcionais e de alto desempenho." />
        </div>
      </div>

      <div className="flex w-full items-center gap-2">
        <Link
          target="_blank"
          href="https://rodrigojsdeveloper.github.io/cv"
          className="group flex h-11 w-full max-w-[9.375rem] select-none items-center justify-center gap-2.5 rounded-def border border-solid border-gray-200 p-2 text-sm font-medium text-gray-100 hover:bg-gray-200 hover:text-primary active:text-primary"
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
            <Stack src={stack.src} name={stack.name} key={index} />
          ))}
        </GroupedItems>
      </div>
    </div>
  )
}

export default About
