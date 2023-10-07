import { HeaderMobile } from "@/components/HeaderMobile";
import { Paragraphy } from "@/components/Paragraphy";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { Line } from "@/components/Line";
import { Job } from "@/components/Job";
import { jobs } from "@/utils/jobs";

export default function Contact() {
  return (
    <main className="w-full max-w-6xl min-h-screen relative flex flex-row justify-between m-auto pt-24 pb-5 px-8 max-lg:justify-center">
      <div className="mt-12 relative centralize-background flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" />
      </div>

      <Header />
      <HeaderMobile />

      <div className="w-full max-w-800 max-lg:max-w-none max-lg:mt-6">
        <Title title="Experiences" />

        <Paragraphy
          text="Discover my professional journey and the skills I've gained along the way, as well as the courses that have helped me grow and excel."
          style="text-md my-6"
        />

        <Line />

        <menu className="grid md:grid-cols-2 gap-4 my-6">
          {jobs.map((job, index) => (
            <Job job={job} key={index} />
          ))}
        </menu>
      </div>
    </main>
  );
}
