import about from './es/about'
import contact from './es/contact'
import projects from './es/projects'
import notFound from './es/not-found'
import home from './es/home'
import links from './es/links'
import notification from './es/notification'
import header from './es/header'

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  ...about,
  ...contact,
  ...projects,
  ...notFound,
  ...home,
  ...links,
  ...notification,
  ...header,
}
