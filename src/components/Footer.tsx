import Copyright from './Copyright'

const Footer = () => {
  return (
    <div className="footer pointer-events-none fixed inset-x-0 bottom-0 top-auto z-[0.063rem] flex h-[6.25rem] w-full items-end justify-center p-4 lg:hidden">
      <Copyright />
    </div>
  )
}

export default Footer
