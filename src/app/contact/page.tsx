import HeaderMobile from '@/components/HeaderMobile'
import SocialMedia from '@/components/SocialMedia'
import Paragraphy from '@/components/Paragraphy'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import Line from '@/components/Line'
import Form from '@/components/Form'

export default function Contact() {
  return (
    <main className="m-auto flex w-full max-w-6xl flex-row gap-x-10 px-8 pb-8 pt-28 max-lg:min-h-0 max-lg:justify-center max-lg:pb-5 max-lg:pt-24 max-sm:px-5">
      <Header />
      <HeaderMobile />

      <section className="w-full max-w-800 animate-up max-lg:mt-6 max-lg:max-w-none">
        <Title title="Contact" />
        <Paragraphy
          text="Feel free to get in touch, and we can discuss how we can work together."
          style="my-6"
        />

        <h2 className="leading-relaxed">My social networks</h2>

        <SocialMedia />
        <Line />

        <h2 className="leading-relaxed">Send me an email</h2>

        <Paragraphy
          text="I greatly enjoy interacting with programmers, creators, and technology students. If you're interested in my work or would like to provide feedback on this site, let's have a chat."
          style="mt-3 mb-6"
        />

        <Form />
        <Footer />
      </section>
    </main>
  )
}
