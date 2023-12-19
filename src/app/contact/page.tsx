import SocialNetworks from '@/components/SocialNetworks'
import Paragraphy from '@/components/Paragraphy'
import Title from '@/components/Title'
import Line from '@/components/Line'
import Form from '@/components/Form'

const Contact = () => {
  return (
    <div className="flex animate-up flex-col gap-y-6">
      <Title title="Contact" />
      <Paragraphy text="Feel free to get in touch, and we can discuss how we can work together." />
      <div className="flex flex-col gap-y-3">
        <h2 className="leading-relaxed">My social networks</h2>

        <SocialNetworks />
      </div>
      <Line />
      <div className="flex flex-col gap-y-1.5 sm:gap-y-3">
        <h2 className="leading-relaxed">Send me an email</h2>

        <Paragraphy text="I greatly enjoy interacting with programmers, creators, and technology students. If you're interested in my work or would like to provide feedback on this site, let's have a chat." />
      </div>
      <Form />
    </div>
  )
}

export default Contact
