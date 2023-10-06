import { Project } from "@/components/Project";
import { Header } from "@/components/Header";
import { projects } from "@/utils/projects";
import { Line } from "@/components/Line";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main className="w-full max-w-6xl min-h-screen relative flex flex-row justify-between m-auto py-24 px-8">
      <div className="mt-12 relative centralize-background flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" />
      </div>

      <Header />

      <div className="w-full max-w-800">
        <h2 className="font-title text-4xl">Rodrigo Silva</h2>
        <div className="flex items-center gap-2 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#0141ff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
              <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
            </g>
          </svg>

          <p className="font-medium text-sm text-gray-3">São Paulo - Brazil</p>
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

          <a className="flex items-center gap-1 text-gray-4 text-xs font-medium hover:text-primary duration-300 cursor-pointer">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 12h16m0 0l-6-6m6 6l-6 6"
              />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 place-items-center gap-4 my-6">
          {projects.map((project, key) => (
            <Project project={project} key={key} />
          ))}
        </div>

        <Line />

        <Work />
      </div>
    </main>
  );
}
