import Line from './Line'

const Footer = () => {
  return (
    <footer className="mt-6 hidden w-full flex-col max-lg:flex">
      <Line />

      <small className="text-gray-1 select-none text-center text-xs font-medium">
        © 2023 - rodrigojsdeveloper
      </small>
    </footer>
  )
}

export default Footer
