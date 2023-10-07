import { HeaderMobile } from "@/components/HeaderMobile";
import { Paragraphy } from "@/components/Paragraphy";
import { Project } from "@/components/Project";
import { TwoProjects } from "@/utils/projects";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { Line } from "@/components/Line";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main className="w-full max-w-6xl min-h-screen relative flex flex-row justify-between m-auto pt-24 pb-16 px-8 max-lg:justify-center">
      <div className="mt-12 relative centralize-background flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" />
      </div>

      <Header />
      <HeaderMobile />

      <div className="w-full max-w-800 max-lg:max-w-none max-lg:mt-6">
        <Title title="Rodrigo Silva" />

        <div className="flex items-center gap-2 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#A3A3A3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
              <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
            </g>
          </svg>

          <Paragraphy text="São Paulo - Brazil" style="text-sm" />
        </div>

        <p className="text-gray-4 font-normal text-md leading-relaxed my-6">
          As a full-stack developer, my goal is to craft digital experiences
          that seamlessly blend elegant aesthetics with exceptional
          functionality, both on the front-end and back-end. I{"'"}m passionate
          about translating ideas into intuitive, visually appealing user
          interfaces while ensuring the technical aspects of the system are
          robust and efficient.
        </p>

        <Line />

        <div className="w-full flex justify-between items-center">
          <p className="font-title text-xl">Recent projects</p>

          <a
            href="/projects"
            className="flex items-center gap-1 text-gray-4 text-xs font-medium hover:text-primary duration-300"
          >
            See all{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#d4d4d4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 12h16m0 0l-6-6m6 6l-6 6"
              />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 place-items-center gap-4 my-6">
          {TwoProjects.map((project, key) => (
            <Project project={project} key={key} />
          ))}
        </div>

        <Line />

        <Work />
      </div>
    </main>
  );
}
