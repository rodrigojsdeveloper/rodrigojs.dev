import HeaderMobile from '@/components/HeaderMobile'
import Paragraphy from '@/components/Paragraphy'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import Job from '@/components/Job'
import jobs from '@/utils/jobs'

export default function Contact() {
  return (
    <main className="m-auto flex w-full max-w-6xl flex-row gap-x-10 px-8 pb-8 pt-28 max-lg:min-h-0 max-lg:justify-center max-lg:pb-5 max-lg:pt-24 max-sm:px-5">
      <Header />
      <HeaderMobile />

      <section className="flex w-full max-w-800 animate-up flex-col gap-y-6 max-lg:mt-6 max-lg:max-w-none">
        <Title title="Experiences" />
        <Paragraphy text="Discover my professional journey and the skills I've gained along the way, as well as the courses that have helped me grow and excel." />

        <menu className="grid gap-4 md:grid-cols-2">
          {jobs.map((job, index) => (
            <Job job={job} key={index} />
          ))}
        </menu>

        <Footer />
      </section>
    </main>
  )
}
