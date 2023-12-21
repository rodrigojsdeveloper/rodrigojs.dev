import Copyright from './Copyright'
import Line from './Line'

const Footer = () => {
  return (
    <footer className="flex w-full flex-col gap-y-4 lg:hidden">
      <Line />

      <Copyright />
    </footer>
  )
}

export default Footer
