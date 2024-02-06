import about from './pt-BR/about'
import contact from './pt-BR/contact'
import projects from './pt-BR/projects'

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  ...about,
  ...contact,
  ...projects,
}
