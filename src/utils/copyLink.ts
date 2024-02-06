import { notification } from '@/components/Notification'
import { translate } from '@/i18n'

const copyLink = () => {
  navigator.clipboard
    .writeText('https://rodrigojs.dev')
    .then(() => {
      notification({
        title: translate('notification.copy_link.success.title'),
        description: translate('notification.copy_link.success.description'),
      })
    })
    .catch(() => {
      notification({
        title: translate('notification.copy_link.error.title'),
        description: translate('notification.copy_link.error.description'),
        error: true,
      })
    })
}

export { copyLink }
