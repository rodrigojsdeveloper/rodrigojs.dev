import about from './br/about'
import contact from './br/contact'
import projects from './br/projects'
import notFound from './br/not-found'
import home from './br/home'
import links from './br/links'
import notification from './br/notification'

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
