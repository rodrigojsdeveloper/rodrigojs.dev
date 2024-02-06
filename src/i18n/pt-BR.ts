import about from './pt-BR/about'
import contact from './pt-BR/contact'
import projects from './pt-BR/projects'
import notFound from './pt-BR/not-found'
import home from './pt-BR/home'
import links from './pt-BR/links'
import notification from './pt-BR/notification'

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  ...about,
  ...contact,
  ...projects,
  ...notFound,
  ...home,
  ...links,
  ...notification,
}
