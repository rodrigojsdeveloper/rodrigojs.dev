import about from './en/about'
import contact from './en/contact'
import projects from './en/projects'
import notFound from './en/not-found'
import home from './en/home'
import links from './en/links'
import notification from './en/notification'

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
