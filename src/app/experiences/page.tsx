import { HeaderMobile } from "@/components/HeaderMobile";
import { Paragraphy } from "@/components/Paragraphy";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { Line } from "@/components/Line";
import { Job } from "@/components/Job";
import { jobs } from "@/utils/jobs";

export default function Contact() {
  return (
    <>
      <Header />
      <HeaderMobile />

      <main className="w-full max-w-800 animate-up max-lg:max-w-none max-lg:mt-6">
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

        <Footer />
      </main>
    </>
  );
}
