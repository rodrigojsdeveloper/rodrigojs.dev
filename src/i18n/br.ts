import about from './br/about'
import connect from './br/connect'
import projects from './br/projects'
import notFound from './br/not-found'
import home from './br/home'
import links from './br/links'
import notification from './br/notification'
import header from './br/header'

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  ...about,
  ...connect,
  ...projects,
  ...notFound,
  ...home,
  ...links,
  ...notification,
  ...header,
}
