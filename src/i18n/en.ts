import about from './en/about'
import connect from './en/connect'
import projects from './en/projects'
import notFound from './en/not-found'
import home from './en/home'
import links from './en/links'
import notification from './en/notification'
import header from './en/header'

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
