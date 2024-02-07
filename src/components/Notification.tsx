import { INotificationProps } from '@/interfaces'
import { createRoot } from 'react-dom/client'

const Notification = ({ description, error }: INotificationProps) => {
  return (
    <div className="fixed bottom-3 right-3 z-50 ml-3 flex max-w-[22.25rem] animate-up flex-row items-center gap-2 rounded-radius border border-solid border-success-border bg-success-bg px-3 py-4 sm:bottom-5 sm:right-8">
      {error ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 36 36"
        >
          <path
            fill="hsl(var(--error-text))"
            d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6m-1.49 6a1.49 1.49 0 0 1 3 0v6.89a1.49 1.49 0 1 1-3 0ZM18 25.5a1.72 1.72 0 1 1 1.72-1.72A1.72 1.72 0 0 1 18 25.5"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 256 256"
        >
          <path
            fill="hsl(var(--success-text))"
            d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 85.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"
          />
        </svg>
      )}

      <p className="text-sm text-success-text">{description}</p>
    </div>
  )
}

const notification = ({ description, error }: INotificationProps) => {
  const notificationRoot = document.getElementById('notification-root')
  if (notificationRoot) {
    const root = createRoot(notificationRoot)
    root.render(<Notification description={description} error={error} />)
    setTimeout(() => root.unmount(), 4000)
  }
}

export { notification }
