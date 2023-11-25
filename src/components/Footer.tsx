import Copyright from './Copyright'
import Line from './Line'

const Footer = () => {
  return (
    <footer className="hidden w-full flex-col gap-y-4 max-lg:flex">
      <Line />

      <Copyright />
    </footer>
  )
}

export default Footer
