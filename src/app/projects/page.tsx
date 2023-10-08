import { HeaderMobile } from "@/components/HeaderMobile";
import { Paragraphy } from "@/components/Paragraphy";
import { Project } from "@/components/Project";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { projects } from "@/utils/projects";
import { Title } from "@/components/Title";

export default function Projects() {
  return (
    <>
      <Header />
      <HeaderMobile />

      <main className="w-full max-w-800 animate-up max-lg:max-w-none max-lg:mt-6">
        <Title title="Projects" />
        <Paragraphy
          text="I'm a fanatic about creating new projects, as it's the biggest key to acquiring knowledge. On this page you can browse more than 10 websites that I have developed."
          style="text-md my-6"
        />

        <menu className="grid md:grid-cols-2 place-items-center gap-4 my-6">
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </menu>

        <Footer />
      </main>
    </>
  );
}
