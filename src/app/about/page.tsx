'use client'

import HeaderMobile from '@/components/HeaderMobile'
import Paragraphy from '@/components/Paragraphy'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Stack from '@/components/Stack'
import Title from '@/components/Title'
import Line from '@/components/Line'
import stacks from '@/utils/stacks'
import { useState } from 'react'
import Link from 'next/link'

export default function About() {
  const [copy, setCopy] = useState<boolean>(false)

  const copyLink = () => {
    navigator.clipboard.writeText('rodrigojsdeveloper@gmail.com')
    setCopy(true)
    setTimeout(() => setCopy(false), 2000)
  }

  return (
    <main className="m-auto flex w-full max-w-6xl flex-row gap-x-10 px-8 pb-8 pt-28 max-lg:min-h-0 max-lg:justify-center max-lg:pb-5 max-lg:pt-24">
      <Header />
      <HeaderMobile />

      <section className="w-full max-w-800 animate-up max-lg:mt-6 max-lg:max-w-none">
        <Title title="About" />

        <div className="my-6 space-y-3 leading-7">
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

        <div className="mb-8 mt-4 flex w-full items-center gap-2">
          <Link
            href="/pdfs/curriculo-rodrigo.pdf"
            download
            className="text-gray-1 flex h-11 w-full max-w-152 items-center justify-center rounded-def border border-solid border-gray-2 p-3 text-sm font-medium hover:bg-gray-2"
          >
            CV Download
          </Link>
          <button
            onClick={copyLink}
            className="h-11 w-full max-w-152 rounded-def bg-white text-sm font-medium text-neutral-900 hover:bg-button-1 active:bg-button-2"
          >
            {copy ? 'Copied!' : 'Copy email'}
          </button>
        </div>

        <Line />

        <div className="my-6 w-full">
          <p className="gap-2 text-xl font-medium">Skills</p>

          <Paragraphy text="My technical knowledge." style="gap-2" />

          <ul className="my-3.5 flex flex-wrap items-center gap-3">
            {stacks.map((stack, index) => (
              <Stack src={stack.src} name={stack.name} key={index} />
            ))}
          </ul>
        </div>

        <Footer />
      </section>
    </main>
  )
}
