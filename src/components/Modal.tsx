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
import SubTitle from './SubTitle'
import ModalBackground from './ModalBackground'
import socialMedia from '@/utils/socialMedia'
import Download from '@/svgs/Download'
import SourceCode from '@/svgs/SourceCode'
import copyLink from '@/utils/copyLink'
import notification from './Notification'

const Modal = () => {
  const { handleOpenModal } = useContext(Context)

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888888"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="duration-300 group-hover:stroke-primary group-active:stroke-primary"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        )
      case 'LinkedIn':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888888"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="duration-300 group-hover:stroke-primary group-active:stroke-primary"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
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
      <div className="flex h-full max-h-[22.425rem] w-full max-w-[31.9rem] animate-modal flex-col rounded-def border border-solid border-gray-200 bg-black duration-300">
        <div className="flex flex-row items-center justify-between py-2.5 pl-3 pr-2">
          <SubTitle title="Menu" />

          <Button handleState={handleOpenModal} arialLabel="Close Button">
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
          <Paragraph text="Navegação" style="text py-1.5" />
          <nav className="flex flex-col gap-1">
            <CustomLink
              href=""
              Icon={<Home />}
              text="Início"
              style="text-gray-100"
              onClick={handleOpenModal}
            />
            <CustomLink
              href="about"
              Icon={<About />}
              text="Sobre"
              style="text-gray-100"
              onClick={handleOpenModal}
            />
            <CustomLink
              href="projects"
              Icon={<Projects />}
              text="Projetos"
              style="text-gray-100"
              onClick={handleOpenModal}
            />
            <CustomLink
              href="contact"
              Icon={<Contact />}
              text="Contato"
              style="text-gray-100"
              onClick={handleOpenModal}
            />
          </nav>

          <Paragraph text="Mídia sociais" style="text py-1.5" />
          <nav className="flex flex-col gap-1">
            {socialMedia.map((media, index) => {
              const newMedia = { ...media, svg: getSocialIcon(media.name) }

              return (
                <CustomLink
                  key={index}
                  href={newMedia.link}
                  Icon={newMedia.svg}
                  text={newMedia.name}
                  style="text-gray-100"
                  onClick={handleOpenModal}
                  externalLink
                  target="_blank"
                />
              )
            })}
          </nav>

          <Paragraph text="Projetos recentes" style="text py-1.5" />
          <nav className="flex flex-col gap-1">
            <CustomLink
              target="_blank"
              href="https://github.com/rodrigojsdeveloper/geography"
              Icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#888888"
                    className="duration-300 group-hover:fill-primary group-active:fill-primary"
                    fillRule="evenodd"
                    d="M9.206 3.182A9.254 9.254 0 0 0 2.78 11.25h4.48c.033-1.096.135-2.176.305-3.2c.207-1.254.515-2.41.91-3.4a9.3 9.3 0 0 1 .731-1.468M12 1.25a10.75 10.75 0 1 0 0 21.5a10.75 10.75 0 0 0 0-21.5m0 1.5c-.261 0-.599.126-.991.532c-.396.41-.791 1.051-1.141 1.925c-.347.869-.63 1.917-.824 3.089c-.155.94-.25 1.937-.282 2.954h6.476a22.452 22.452 0 0 0-.282-2.954c-.194-1.172-.477-2.22-.824-3.089c-.35-.874-.745-1.515-1.14-1.925c-.393-.406-.73-.532-.992-.532m4.74 8.5a23.96 23.96 0 0 0-.305-3.2c-.207-1.254-.515-2.41-.91-3.4a9.292 9.292 0 0 0-.732-1.468a9.238 9.238 0 0 1 3.748 2.277a9.25 9.25 0 0 1 2.678 5.791zm-1.502 1.5H8.762c.031 1.017.127 2.014.282 2.954c.194 1.172.477 2.22.824 3.089c.35.874.745 1.515 1.14 1.925c.393.406.73.532.992.532c.261 0 .599-.126.991-.532c.396-.41.791-1.051 1.141-1.925c.347-.869.63-1.917.824-3.089c.155-.94.25-1.937.282-2.954m-.444 8.068c.27-.434.515-.929.73-1.468c.396-.99.704-2.146.911-3.4a23.96 23.96 0 0 0 .304-3.2h4.48a9.25 9.25 0 0 1-6.426 8.068m-5.588 0a9.3 9.3 0 0 1-.73-1.468c-.396-.99-.704-2.146-.911-3.4a23.961 23.961 0 0 1-.304-3.2H2.78a9.25 9.25 0 0 0 6.425 8.068"
                    clipRule="evenodd"
                  />
                </svg>
              }
              text="Geography"
              style="text-gray-100"
              onClick={handleOpenModal}
              externalLink
            />
            <CustomLink
              target="_blank"
              href="https://github.com/rodrigojsdeveloper/iweather"
              Icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#888888"
                    strokeWidth="1.5"
                    className="duration-300 group-hover:fill-primary group-active:fill-primary"
                    d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.469 5.469 0 0 1 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96A7.49 7.49 0 0 0 12 4"
                  />
                </svg>
              }
              text="iWeather"
              style="text-gray-100"
              onClick={handleOpenModal}
              externalLink
            />
            <CustomLink
              target="_blank"
              href="https://github.com/rodrigojsdeveloper/motors-shop"
              Icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#888888"
                    className="duration-300 group-hover:fill-primary group-active:fill-primary"
                    d="M14 18q2.5 0 4.25-1.75T20 12q0-2.525-1.838-4.262T13.75 6q-1.2 0-2.325.275T9.25 7.1l2.5 1q1.025.425 1.638 1.313T14 11.4q0 1.5-1.037 2.55T10.45 15h-6.4Q4 15.6 4 16.363V18zm-9.6-5h6q.675 0 1.138-.462T12 11.4q0-.475-.262-.862T11 9.95l-3.7-1.5q-1.05.925-1.787 2.1T4.4 13m9.6 7H4q-.825 0-1.412-.587T2 18v-2.25q0-2.45.925-4.587t2.513-3.726Q7.025 5.85 9.175 4.926T13.75 4q1.7 0 3.2.625t2.625 1.713Q20.7 7.425 21.35 8.875T22 12q0 1.65-.625 3.113t-1.713 2.55q-1.087 1.087-2.55 1.712T14 20"
                  />
                </svg>
              }
              text="Motors Shop"
              style="text-gray-100"
              onClick={handleOpenModal}
              externalLink
            />
          </nav>

          <Paragraph text="Sugestões" style="text py-1.5" />
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => {
                copyLink()
                handleOpenModal()
                notification({
                  title: 'Copiado',
                  description: 'Link copiado com sucesso.',
                })
              }}
              className="row group flex h-10 w-full items-center gap-2 rounded-def px-2.5 py-2 text-sm text-gray-100 hover:bg-hover hover:text-primary active:bg-active active:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
              >
                <g
                  fill="#888"
                  className="duration-300 group-hover:fill-primary group-active:fill-primary"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865a.75.75 0 0 0 .977-1.138a2.5 2.5 0 0 1-.142-3.667z" />
                  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138a2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865" />
                </g>
              </svg>{' '}
              Copiar link
            </button>
            <CustomLink
              target="_blank"
              href="https://github.com/rodrigojsdeveloper/rodrigojs.dev"
              Icon={<SourceCode />}
              text="Código fonte"
              style="text-gray-100"
              onClick={handleOpenModal}
              externalLink
            />
            <CustomLink
              target="_blank"
              href="https://rodrigojsdeveloper.github.io/cv"
              Icon={<Download height="24" width="24" />}
              text="CV Download"
              style="text-gray-100"
              onClick={handleOpenModal}
              externalLink
            />
          </nav>
        </div>
      </div>
    </ModalBackground>
  )
}

export default Modal
