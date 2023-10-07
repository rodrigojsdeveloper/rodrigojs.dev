import { HeaderMobile } from "@/components/HeaderMobile";
import { Paragraphy } from "@/components/Paragraphy";
import { Project } from "@/components/Project";
import { Header } from "@/components/Header";
import { projects } from "@/utils/projects";
import { Title } from "@/components/Title";

export default function Projects() {
  return (
    <main className="w-full max-w-6xl min-h-screen relative flex flex-row justify-between m-auto pt-24 pb-16 px-8 max-lg:justify-center">
      <div className="mt-12 relative centralize-background flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" />
      </div>

      <Header />
      <HeaderMobile />

      <div className="w-full max-w-800 animate-up max-lg:max-w-none max-lg:mt-6">
        <Title title="Projects" />

        <Paragraphy
          text="I'm a fanatic about creating new projects, as it's the biggest key to acquiring knowledge. On this page you can browse more than 10 websites that I have developed."
          style="text-md leading-relaxed my-6"
        />

        <menu className="grid md:grid-cols-2 place-items-center gap-4 my-6">
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </menu>
      </div>
    </main>
  );
}
