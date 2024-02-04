import Paragraph from '@/components/Paragraph'
import Stacks from '@/components/Stacks'
import Title from '@/components/Title'
import Link from 'next/link'

const About = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title="Sobre" />
        <div className="flex flex-col gap-3">
          <Paragraph text="Com mais de 3 anos de experiência em desenvolvimento, sou especialista na criação de websites responsivos, minha experiência abrange design e implementação de elementos visuais para interações intuitivas. Possuo habilidades avançadas na análise de requisitos e soluções de design inovadoras." />

          <Paragraph text="Tenho experiência em projetos front-end, desenvolvendo aplicações interativas e responsivas para diversos dispositivos. Minha experiência com o desenvolvimento back-end me permite criar soluções eficientes no lado do servidor, e também tenho desenvolvido aplicativos móveis para Android e iOS." />

          <Paragraph text="Possuo conhecimento em DevOps, incluindo integração e entrega contínua e automação de processos de infraestrutura. Quero aprimorar minhas habilidades técnicas para liderar projetos que resultem em interfaces atrativas, funcionais e de alto desempenho." />
        </div>
      </div>
      <Link
        target="_blank"
        href="https://rodrigojsdeveloper.github.io/cv"
        className="group flex h-10 w-full max-w-[7.4rem] select-none items-center justify-center gap-2.5 rounded-def border border-solid border-border p-2 text-sm text-foreground hover:bg-border sm:h-11 sm:max-w-[9rem] sm:text-base"
      >
        Download C.V
      </Link>
      <Stacks />
    </div>
  )
}

export default About
