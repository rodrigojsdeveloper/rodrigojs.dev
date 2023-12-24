'use client'

import { useContext } from 'react'
import Home from '@/svgs/Home'
import CustomLink from './CustomLink'
import About from '@/svgs/About'
import Projects from '@/svgs/Projects'
import Contact from '@/svgs/Contact'
import Paragraph from './Paragraph'
import Line from './Line'
import Button from './Button'
import { Context } from '@/contexts/context'
import Link from 'next/link'
import SubTitle from './SubTitle'
import ModalBackground from './ModalBackground'
import socialMedia from '@/utils/socialMedia'
import Download from '@/svgs/Download'

const Modal = () => {
  const { handleOpenModal } = useContext(Context)

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText('https://rodrigojs.dev/')
      .then(() => console.log)
      .catch((err) => console.error('Erro ao copiar texto: ', err))
  }

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 1C4.13438 1 1 4.21563 1 8.17812C1 11.35 3.00625 14.0375 5.7875 14.9875C5.82651 14.996 5.86633 15.0002 5.90625 15C6.16563 15 6.26562 14.8094 6.26562 14.6437C6.26562 14.4719 6.25938 14.0219 6.25625 13.4219C6.0247 13.4762 5.78782 13.5045 5.55 13.5062C4.20313 13.5062 3.89687 12.4594 3.89687 12.4594C3.57812 11.6312 3.11875 11.4094 3.11875 11.4094C2.50938 10.9812 3.11562 10.9687 3.1625 10.9687H3.16563C3.86875 11.0312 4.2375 11.7125 4.2375 11.7125C4.5875 12.325 5.05625 12.4969 5.475 12.4969C5.75189 12.4913 6.02449 12.4274 6.275 12.3094C6.3375 11.8469 6.51875 11.5312 6.71875 11.35C5.16563 11.1687 3.53125 10.5531 3.53125 7.80312C3.53125 7.01875 3.80312 6.37812 4.25 5.87812C4.17812 5.69688 3.9375 4.96562 4.31875 3.97812C4.36989 3.96589 4.42245 3.96063 4.475 3.9625C4.72812 3.9625 5.3 4.05937 6.24375 4.71562C7.39048 4.39478 8.60327 4.39478 9.75 4.71562C10.6938 4.05937 11.2656 3.9625 11.5188 3.9625C11.5713 3.96063 11.6239 3.96589 11.675 3.97812C12.0563 4.96562 11.8156 5.69688 11.7437 5.87812C12.1906 6.38125 12.4625 7.02187 12.4625 7.80312C12.4625 10.5594 10.825 11.1656 9.26562 11.3437C9.51562 11.5656 9.74063 12.0031 9.74063 12.6719C9.74063 13.6312 9.73125 14.4062 9.73125 14.6406C9.73125 14.8094 9.82812 15 10.0875 15C10.1295 15.0002 10.1714 14.996 10.2125 14.9875C12.9969 14.0375 15 11.3469 15 8.17812C15 4.21563 11.8656 1 8 1Z"
              fill="#888888"
              className="duration-300 group-hover:fill-primary group-active:fill-primary"
            />
          </svg>
        )
      case 'LinkedIn':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M13.8803 1H2.19625C1.55781 1 1 1.45937 1 2.09031V13.8003C1 14.4347 1.55781 15 2.19625 15H13.8769C14.5188 15 15 14.4309 15 13.8003V2.09031C15.0037 1.45937 14.5188 1 13.8803 1ZM5.33969 12.6697H3.33406V6.43375H5.33969V12.6697ZM4.40625 5.48562H4.39187C3.75 5.48562 3.33437 5.00781 3.33437 4.40969C3.33437 3.80063 3.76094 3.33406 4.41719 3.33406C5.07344 3.33406 5.475 3.79719 5.48938 4.40969C5.48906 5.00781 5.07344 5.48562 4.40625 5.48562ZM12.6697 12.6697H10.6641V9.26C10.6641 8.44313 10.3722 7.885 9.64656 7.885C9.09219 7.885 8.76406 8.26 8.61812 8.62531C8.56344 8.75656 8.54875 8.93531 8.54875 9.11781V12.6697H6.54313V6.43375H8.54875V7.30156C8.84062 6.88594 9.29656 6.28781 10.3575 6.28781C11.6741 6.28781 12.67 7.15563 12.67 9.02656L12.6697 12.6697Z"
              fill="#888888"
              className="duration-300 group-hover:fill-primary group-active:fill-primary"
            />
          </svg>
        )
      case 'Instagram':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.9166 2.16656C11.6895 2.16887 12.43 2.47692 12.9766 3.02345C13.5231 3.56997 13.8311 4.31054 13.8334 5.08344V10.9166C13.8311 11.6895 13.5231 12.43 12.9766 12.9766C12.43 13.5231 11.6895 13.8311 10.9166 13.8334H5.08344C4.31054 13.8311 3.56997 13.5231 3.02345 12.9766C2.47692 12.43 2.16887 11.6895 2.16656 10.9166V5.08344C2.16887 4.31054 2.47692 3.56997 3.02345 3.02345C3.56997 2.47692 4.31054 2.16887 5.08344 2.16656H10.9166ZM10.9166 1H5.08344C2.8375 1 1 2.8375 1 5.08344V10.9166C1 13.1625 2.8375 15 5.08344 15H10.9166C13.1625 15 15 13.1625 15 10.9166V5.08344C15 2.8375 13.1625 1 10.9166 1Z"
              fill="#888888"
              className="duration-300 group-hover:fill-primary group-active:fill-primary"
            />
            <path
              d="M11.7916 5.08344C11.6185 5.08344 11.4493 5.03212 11.3054 4.93597C11.1615 4.83983 11.0494 4.70317 10.9832 4.54328C10.9169 4.3834 10.8996 4.20746 10.9334 4.03773C10.9671 3.868 11.0505 3.71209 11.1728 3.58972C11.2952 3.46735 11.4511 3.38401 11.6209 3.35025C11.7906 3.31649 11.9665 3.33381 12.1264 3.40004C12.2863 3.46627 12.423 3.57842 12.5191 3.72231C12.6152 3.8662 12.6666 4.03538 12.6666 4.20844C12.6668 4.32341 12.6443 4.4373 12.6005 4.54358C12.5566 4.64985 12.4921 4.7464 12.4108 4.82771C12.3295 4.90901 12.233 4.97345 12.1267 5.01733C12.0204 5.06122 11.9065 5.08368 11.7916 5.08344ZM8 5.66656C8.46151 5.66656 8.91266 5.80341 9.29639 6.05982C9.68012 6.31622 9.9792 6.68065 10.1558 7.10703C10.3324 7.53341 10.3786 8.00259 10.2886 8.45523C10.1986 8.90787 9.97633 9.32365 9.64999 9.64999C9.32365 9.97632 8.90788 10.1986 8.45523 10.2886C8.00259 10.3786 7.53341 10.3324 7.10703 10.1558C6.68065 9.9792 6.31622 9.68012 6.05982 9.29639C5.80342 8.91265 5.66656 8.46151 5.66656 8C5.66723 7.38133 5.91328 6.7882 6.35074 6.35074C6.7882 5.91328 7.38134 5.66722 8 5.66656ZM8 4.5C7.30777 4.5 6.63108 4.70527 6.05551 5.08985C5.47993 5.47444 5.03133 6.02106 4.76642 6.66061C4.50152 7.30015 4.4322 8.00388 4.56725 8.68281C4.7023 9.36175 5.03564 9.98539 5.52513 10.4749C6.01461 10.9644 6.63825 11.2977 7.31719 11.4327C7.99612 11.5678 8.69985 11.4985 9.33939 11.2336C9.97894 10.9687 10.5256 10.5201 10.9101 9.94449C11.2947 9.36892 11.5 8.69223 11.5 8C11.5 7.07174 11.1313 6.1815 10.4749 5.52512C9.8185 4.86875 8.92826 4.5 8 4.5Z"
              fill="#888888"
              className="duration-300 group-hover:fill-primary group-active:fill-primary"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <ModalBackground>
      <div className="flex h-[22.425rem] w-full max-w-[31.9rem] animate-modal flex-col rounded-def border border-solid border-gray-200 bg-black duration-300">
        <div className="flex flex-row items-center justify-between py-2.5 pl-3 pr-2">
          <SubTitle title="Menu" />

          <Button handleState={handleOpenModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.2807 18.2194C19.3504 18.2891 19.4056 18.3718 19.4433 18.4628C19.4811 18.5539 19.5005 18.6515 19.5005 18.75C19.5005 18.8485 19.4811 18.9461 19.4433 19.0372C19.4056 19.1282 19.3504 19.2109 19.2807 19.2806C19.211 19.3503 19.1283 19.4056 19.0372 19.4433C18.9462 19.481 18.8486 19.5004 18.7501 19.5004C18.6515 19.5004 18.5539 19.481 18.4629 19.4433C18.3718 19.4056 18.2891 19.3503 18.2194 19.2806L12.0001 13.0603L5.78068 19.2806C5.63995 19.4214 5.44907 19.5004 5.25005 19.5004C5.05103 19.5004 4.86016 19.4214 4.71943 19.2806C4.5787 19.1399 4.49963 18.949 4.49963 18.75C4.49963 18.551 4.5787 18.3601 4.71943 18.2194L10.9397 12L4.71943 5.78062C4.5787 5.63989 4.49963 5.44902 4.49963 5.25C4.49963 5.05097 4.5787 4.8601 4.71943 4.71937C4.86016 4.57864 5.05103 4.49958 5.25005 4.49958C5.44907 4.49958 5.63995 4.57864 5.78068 4.71937L12.0001 10.9397L18.2194 4.71937C18.3602 4.57864 18.551 4.49958 18.7501 4.49958C18.9491 4.49958 19.1399 4.57864 19.2807 4.71937C19.4214 4.8601 19.5005 5.05097 19.5005 5.25C19.5005 5.44902 19.4214 5.63989 19.2807 5.78062L13.0604 12L19.2807 18.2194Z"
                fill="#888888"
                className="duration-300 group-hover:fill-primary group-active:fill-primary"
              />
            </svg>
          </Button>
        </div>

        <Line />

        <div className="overflow-y-auto px-3 pb-2 pt-1.5">
          <Paragraph text="Navigation" style="text-sm py-2" />
          <nav className="flex flex-col gap-1">
            <CustomLink
              href=""
              Icon={<Home />}
              text="Home"
              style="text-gray-100"
            />
            <CustomLink
              href="about"
              Icon={<About />}
              text="About"
              style="text-gray-100"
            />
            <CustomLink
              href="projects"
              Icon={<Projects />}
              text="Projects"
              style="text-gray-100"
            />
            <CustomLink
              href="contact"
              Icon={<Contact />}
              text="Contact"
              style="text-gray-100"
            />
          </nav>

          <Paragraph text="Social media" style="text-sm py-2" />
          <nav className="flex flex-col gap-1">
            {socialMedia.map((media, index) => {
              const newMedia = { ...media, svg: getSocialIcon(media.name) }

              return (
                <Link
                  key={index}
                  target="_blank"
                  href={newMedia.link}
                  className="row group flex h-10 w-full select-none items-center gap-2 rounded-def px-2.5 py-2 text-sm text-gray-100 hover:bg-hover hover:text-primary active:bg-active active:text-primary"
                >
                  {newMedia.svg}
                  {newMedia.name}
                </Link>
              )
            })}
          </nav>

          <Paragraph text="Suggestions" style="text-sm py-2" />
          <nav className="flex flex-col gap-1">
            <button
              onClick={copyToClipboard}
              className="row group flex h-10 w-full items-center gap-2 rounded-def px-2.5 py-2 text-sm text-gray-100 hover:bg-hover hover:text-primary active:bg-active active:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.75 16.5H6.75C5.55653 16.5 4.41193 16.0259 3.56802 15.182C2.72411 14.3381 2.25 13.1935 2.25 12C2.25 10.8065 2.72411 9.66193 3.56802 8.81802C4.41193 7.97411 5.55653 7.5 6.75 7.5H9.75M14.25 7.5H17.25C18.4435 7.5 19.5881 7.97411 20.432 8.81802C21.2759 9.66193 21.75 10.8065 21.75 12C21.75 13.1935 21.2759 14.3381 20.432 15.182C19.5881 16.0259 18.4435 16.5 17.25 16.5H14.25M7.65422 12H16.4395"
                  stroke="#888888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="duration-300 group-hover:stroke-primary group-active:stroke-primary"
                />
              </svg>{' '}
              Copy link
            </button>
            <Link
              target="_blank"
              href="https://github.com/rodrigojsdeveloper/rodrigojs.dev/"
              suppressHydrationWarning={true}
              className="row group flex h-10 w-full select-none items-center gap-2 rounded-def px-2.5 py-2 text-sm text-gray-100 hover:bg-hover hover:text-primary active:bg-active active:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.5 17.25L1.5 12L7.5 6.75M16.5 17.25L22.5 12L16.5 6.75M14.25 4.5L9.75 19.5"
                  stroke="#888888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="duration-300 group-hover:stroke-primary group-active:stroke-primary"
                />
              </svg>{' '}
              Source code
            </Link>
            <Link
              target="_blank"
              href="https://rodrigojsdeveloper.github.io/cv"
              suppressHydrationWarning={true}
              className="row group flex h-10 w-full select-none items-center gap-2 rounded-def px-2.5 py-2 text-sm text-gray-100 hover:bg-hover hover:text-primary active:bg-active active:text-primary"
            >
              <Download height="24" width="24" /> CV Download
            </Link>
          </nav>
        </div>
      </div>
    </ModalBackground>
  )
}

export default Modal
