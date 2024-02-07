import { notification } from '@/components/Notification'
import { translate } from '@/i18n'

const copyLink = () => {
  navigator.clipboard
    .writeText('https://rodrigojs.dev')
    .then(() => {
      notification({
        description: translate('notification.copy_link.success'),
      })
    })
    .catch(() => {
      notification({
        description: translate('notification.copy_link.error'),
        error: true,
      })
    })
}

export { copyLink }
