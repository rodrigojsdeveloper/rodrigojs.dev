import HeaderMobile from '@/components/HeaderMobile'
import Paragraphy from '@/components/Paragraphy'
import { projects } from '@/utils/projects'
import Project from '@/components/Project'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Title from '@/components/Title'

export default function Projects() {
  return (
    <>
      <Header />
      <HeaderMobile />

      <main className="w-full max-w-800 animate-up max-lg:mt-6 max-lg:max-w-none">
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
      </main>
    </>
  )
}
