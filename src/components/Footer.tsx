import { Line } from './Line'

const Footer = () => {
  return (
    <footer className="mt-6 hidden w-full flex-col max-lg:flex">
      <Line />

      <small className="text-center text-xs font-medium text-gray-3">
        © 2023 - rodrigojsdeveloper
      </small>
    </footer>
  )
}

export { Footer }
