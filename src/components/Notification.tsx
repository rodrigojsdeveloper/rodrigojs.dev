const Notification = () => {
  return (
    <div className="fixed bottom-3 right-3 z-50 ml-3 flex max-w-60 animate-up flex-row items-center gap-2 rounded-def bg-gray-300 px-3 py-2 sm:bottom-5 sm:right-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28.28"
        height="28.28"
        viewBox="0 0 256 256"
      >
        <path
          fill="#61d345"
          d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 85.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"
        />
      </svg>

      <div>
        <p>Copiado</p>
        <p className="text-sm text-gray-100">Link copiado com sucesso.</p>
      </div>
    </div>
  )
}

export default Notification
