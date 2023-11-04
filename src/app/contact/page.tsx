import SocialMedia from '@/components/SocialMedia'
import Paragraphy from '@/components/Paragraphy'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import Line from '@/components/Line'
import Form from '@/components/Form'

const Contact = () => {
  return (
    <>
      {' '}
      <Title title="Contact" />
      <Paragraphy text="Feel free to get in touch, and we can discuss how we can work together." />
      <div className="flex flex-col gap-y-3">
        <h2 className="leading-relaxed">My social networks</h2>

        <SocialMedia />
      </div>
      <Line />
      <div className="flex flex-col gap-y-3">
        <h2 className="leading-relaxed">Send me an email</h2>

        <Paragraphy text="I greatly enjoy interacting with programmers, creators, and technology students. If you're interested in my work or would like to provide feedback on this site, let's have a chat." />
      </div>
      <Form />
      <Footer />
    </>
  )
}

export default Contact
