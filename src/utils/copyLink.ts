const copyLink = () => {
  navigator.clipboard
    .writeText('https://rodrigojs.dev/')
    .then(() => console.log)
    .catch((err) => console.error('Erro ao copiar texto: ', err))
}

export default copyLink
