import SocialNetworks from '@/components/SocialNetworks'
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import Line from '@/components/Line'
import Form from '@/components/Form'

const Contact = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title="Contato" />
        <Paragraph text="Sinta-se à vontade para entrar em contato e discutiremos como podemos trabalhar juntos." />
      </div>
      <div className="flex flex-col gap-y-3">
        <h2 className="leading-relaxed text-secondary">Minhas redes sociais</h2>

        <SocialNetworks />
      </div>
      <Line />
      <div className="flex flex-col gap-y-1.5 sm:gap-y-3">
        <h2 className="leading-relaxed text-secondary">Mande-me um email</h2>

        <Paragraph
          text="
          Tenho prazer em interagir com programadores e estudantes de tecnologia. Se você estiver interessado no meu trabalho ou deseja fornecer feedback sobre este site? Vamos conversar!"
        />
      </div>
      <Form />
    </div>
  )
}

export default Contact
