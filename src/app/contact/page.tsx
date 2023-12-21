import SocialNetworks from '@/components/SocialNetworks'
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import Line from '@/components/Line'
import Form from '@/components/Form'

const Contact = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title="Contact" />
        <Paragraph text="Feel free to get in touch, and we can discuss how we can work together." />
      </div>
      <div className="flex flex-col gap-y-3">
        <h2 className="leading-relaxed text-color-title">My social networks</h2>

        <SocialNetworks />
      </div>
      <Line />
      <div className="flex flex-col gap-y-1.5 sm:gap-y-3">
        <h2 className="leading-relaxed text-color-title">Send me an email</h2>

        <Paragraph
          text="
I enjoy interacting with programmers, creators, and technology students. Interested in my work or want to provide feedback on this site? Let's chat!"
        />
      </div>
      <Form />
    </div>
  )
}

export default Contact
