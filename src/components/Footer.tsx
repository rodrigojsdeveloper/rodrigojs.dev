import Line from './Line'

const Footer = () => {
  return (
    <footer className="flex hidden w-full flex-col gap-y-4 max-lg:flex">
      <Line />

      <small className="text-color-paragraphy select-none text-center text-xs font-medium">
        © 2023 - rodrigojsdeveloper
      </small>
    </footer>
  )
}

export default Footer
