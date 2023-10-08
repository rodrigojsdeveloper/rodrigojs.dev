"use client";
import { HeaderMobile } from "@/components/HeaderMobile";
import { Paragraphy } from "@/components/Paragraphy";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { Line } from "@/components/Line";
import { stacks } from "@/utils/stacks";
import my from "../../assets/my.jpg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const [copy, setCopy] = useState<boolean>(false);

  const copyLink = () => {
    navigator.clipboard.writeText("rodrigojsdeveloper@gmail.com");
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <>
      <Header />
      <HeaderMobile />

      <main className="w-full max-w-800 animate-up max-lg:max-w-none max-lg:mt-6">
        <Title title="About" />

        <div className="flex my-6 max-md:flex-col-reverse lg:items-center justify-between gap-12">
          <div className="w-full max-w-456 leading-1.8 space-y-3">
            <Paragraphy
              text="I specialize in creating and optimizing user experiences in interface development. My expertise covers the conception, design, and implementation of visual elements for intuitive interactions. My advanced skills include requirements analysis, innovative design solutions, and seamless integration of front-end components."
              style="text-md"
            />

            <Paragraphy
              text="I have experience in front-end projects using technologies such as HTML, CSS, JavaScript, TypeScript, and React, which are essential for interactive and responsive applications across various devices and browsers."
              style="text-md"
            />

            <Paragraphy
              text="Additionally, I possess knowledge in DevOps, including continuous integration and delivery, and infrastructure process automation. I am committed to enhancing my technical skills to lead projects that result in attractive, functional, high-performance interfaces, aiming to provide users with an effective and memorable digital experience."
              style="text-md"
            />
          </div>

          <Image
            src={my}
            alt="Rodrigo Silva"
            className="w-full max-w-340 h-315 rounded-def object-cover"
            priority={true}
          />
        </div>

        <div className="w-full flex items-center gap-2 mt-4 mb-8">
          <Link
            href="/pdfs/curriculo-rodrigo.pdf"
            download
            className="w-full max-w-152 h-45 flex justify-center items-center border border-solid border-gray-4 font-medium text-sm text-gray-3 rounded-def p-3 hover:bg-borderButton-1 active:bg-borderButton-2"
          >
            CV Download
          </Link>
          <button
            onClick={copyLink}
            className="w-full max-w-152 h-45 bg-gray-1 text-gray-7 font-medium text-sm rounded-def hover:bg-button-1 active:bg-button-2"
          >
            {copy ? "Copied!" : "Copy email"}
          </button>
        </div>

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

        <Footer />
      </main>
    </>
  );
}
