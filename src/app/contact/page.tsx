import SocialNetworks from '@/components/SocialNetworks'
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import Form from '@/components/Form'

const Contact = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title="Contato" />
        <Paragraph text="Sinta-se à vontade para entrar em contato e discutiremos como podemos trabalhar juntos." />
      </div>
      <div className="flex flex-col gap-y-3">
        <h2 className="leading-relaxed">Minhas redes sociais</h2>

        <SocialNetworks />
      </div>
      <div className="flex flex-col gap-y-1.5 sm:gap-y-3">
        <h2 className="leading-relaxed">Mande-me um email</h2>

        <Paragraph
          text="
          Se meu trabalho chamou sua atenção ou se deseja compartilhar comentários aqui, vamos conversar!"
        />
      </div>
      <Form />
    </div>
  )
}

export default Contact
