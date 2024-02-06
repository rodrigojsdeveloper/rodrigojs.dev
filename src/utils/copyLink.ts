import { notification } from '@/components/Notification'

const copyLink = () => {
  navigator.clipboard
    .writeText('https://rodrigojs.dev')
    .then(() => {
      notification({
        title: 'Copiado',
        description: 'Link copiado com sucesso.',
      })
    })
    .catch(() => {
      notification({
        title: 'Erro',
        description: 'Erro ao copiar o link.',
        error: true,
      })
    })
}

export { copyLink }
