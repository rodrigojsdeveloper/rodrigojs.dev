import { HeaderMobile } from "@/components/HeaderMobile";
import { Paragraphy } from "@/components/Paragraphy";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { Line } from "@/components/Line";
import { stacks } from "@/utils/stacks";
import my from "../../assets/my.jpg";
import Image from "next/image";

export default function About() {
  return (
    <main className="w-full max-w-6xl min-h-screen relative flex flex-row justify-between m-auto py-24 px-8 max-lg:justify-center">
      <div className="mt-12 relative centralize-background flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" />
      </div>

      <Header />
      <HeaderMobile />

      <div className="w-full max-w-800 max-lg:max-w-none max-lg:mt-6">
        <Title title="About" />

        <div className="flex my-6 max-md:flex-col-reverse lg:items-center justify-between gap-12">
          <div className="w-full max-w-456 leading-1.8 space-y-3">
            <Paragraphy
              text="I have a specialization in creating and optimizing user
              experiences within the scope of interface development. My
              expertise encompasses the conception, design and implementation of
              visual elements that provide intuitive and engaging interactions.
              My advanced skills focus on requirements analysis, creating
              innovative design solutions, and seamlessly integrating front-end
              components."
              style="text-md"
            />

            <Paragraphy
              text="My trajectory includes front-end projects using technologies such
              as HTML, CSS, JavaScript, TypeScript, React and etc. Which are
              essential pillars in the development of interactive applications.
              These tools enable me to build dynamic and responsive interfaces,
              offering users a fluid experience across devices and browsers."
              style="text-md"
            />

            <Paragraphy
              text="In addition to my focus on front-end development, I also have
              valuable knowledge of the VTEX platform, which allows me to
              implement scalable and efficient e-commerce solutions. My
              overarching view includes DevOps practices such as continuous
              integration and continuous delivery, as well as automating
              infrastructure processes."
              style="text-md"
            />

            <Paragraphy
              text="I am continually dedicated to improving my technical skills to
              ensure that the projects I lead result in attractive, functional
              and high-performance interfaces. My goal is always to deliver
              excellent results, providing end users with a memorable and
              effective digital experience."
              style="text-md"
            />
          </div>

          <Image
            src={my}
            alt="Rodrigo Silva"
            className="w-full max-w-340 h-315 rounded-def object-cover"
          />
        </div>

        <button className="w-full max-w-152 h-45 border border-solid border-gray-5 font-medium text-sm text-gray-3 duration-300 rounded-def mb-4 hover:bg-gray-2 active:bg-gray-6 active:border-gray-6">
          CV Download
        </button>

        <Line />

        <div className="w-full my-6">
          <p className="font-medium text-xl gap-2">Skills</p>

          <Paragraphy text="My technical knowledge." style="gap-2" />

          <div className="flex flex-wrap items-center gap-3 my-3.5">
            {stacks.map((Icon, index) => (
              <Icon key={index} size={30} color="#D4D4D4" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
