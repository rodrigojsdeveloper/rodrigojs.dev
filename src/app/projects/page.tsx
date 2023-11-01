import HeaderMobile from '@/components/HeaderMobile'
import Paragraphy from '@/components/Paragraphy'
import { projects } from '@/utils/projects'
import Project from '@/components/Project'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Title from '@/components/Title'

export default function Projects() {
  return (
    <main className="m-auto flex w-full max-w-6xl flex-row gap-x-10 px-8 pb-8 pt-28 max-lg:min-h-0 max-lg:justify-center max-lg:pb-5 max-lg:pt-24">
      <Header />
      <HeaderMobile />

      <section className="w-full max-w-800 animate-up max-lg:mt-6 max-lg:max-w-none">
        <Title title="Projects" />
        <Paragraphy
          text="I'm passionate about creating new projects as it's the prime way to acquire knowledge. On this page, you can browse through several sites I've developed."
          style="text-md my-6"
        />

        <menu className="my-6 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </menu>

        <Footer />
      </section>
    </main>
  )
}
