import about from './en-US/about'
import contact from './en-US/contact'
import projects from './en-US/projects'
import notFound from './en-US/not-found'
import home from './en-US/home'
import links from './en-US/links'
import notification from './en-US/notification'

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
