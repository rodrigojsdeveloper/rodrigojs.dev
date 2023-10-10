import { HeaderMobile } from "@/components/HeaderMobile";
import { Paragraphy } from "@/components/Paragraphy";
import { CustomLink } from "@/components/CustomLink";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <main className="w-full max-w-6xl min-h-screen relative flex flex-row justify-between m-auto pt-24 pb-16 px-8 max-lg:min-h-0 max-lg:justify-center max-lg:pb-4">
      <div className="mt-12 relative centralize-background flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" />
      </div>

      <Header />
      <HeaderMobile />

      <div className="w-full max-w-800 flex flex-col justify-center items-center gap-4 text-center animate-up max-lg:max-w-none max-lg:mt-6">
        <Paragraphy
          text="The page you are trying to access does not exist."
          style="text-md"
        />

        <CustomLink
          href=""
          Icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="#d4d4d4"
                d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6Z"
              />
            </svg>
          }
          text="Go back"
          activeLink="max-w-121 text-gray-2"
        />
      </div>
    </main>
  );
}
