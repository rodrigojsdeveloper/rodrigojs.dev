import tailwindcss from '@/assets/skills/tailwindcss.svg'
import javascript from '@/assets/skills/javascript.svg'
import typescript from '@/assets/skills/typescript.svg'
import postgresql from '@/assets/skills/postgresql.svg'
import express from '@/assets/skills/express.svg'
import swagger from '@/assets/skills/swagger.svg'
import typeorm from '@/assets/skills/typeorm.svg'
import mongodb from '@/assets/skills/mongodb.svg'
import nodejs from '@/assets/skills/nodejs.svg'
import nextjs from '@/assets/skills/nextjs.svg'
import python from '@/assets/skills/python.svg'
import django from '@/assets/skills/django.svg'
import docker from '@/assets/skills/docker.svg'
import ubuntu from '@/assets/skills/ubuntu.svg'
import react from '@/assets/skills/react.svg'
import mysql from '@/assets/skills/mysql.svg'
import figma from '@/assets/skills/figma.svg'
import aws from '@/assets/skills/aws.svg'
import git from '@/assets/skills/git.svg'

import { IStack } from '@/interfaces'

const stacks: IStack[] = [
  {
    src: javascript,
    name: 'JavaScript',
  },
  {
    src: typescript,
    name: 'TypeScript',
  },
  {
    src: react,
    name: 'React',
  },
  {
    src: nextjs,
    name: 'Next.js',
  },
  {
    src: tailwindcss,
    name: 'Tailwind CSS',
  },
  {
    src: react,
    name: 'React Native',
  },
  {
    src: nodejs,
    name: 'Node.js',
  },
  {
    src: express,
    name: 'Express',
  },
  {
    src: typeorm,
    name: 'TypeORM',
  },
  {
    src: python,
    name: 'Python',
  },
  {
    src: django,
    name: 'Django',
  },
  {
    src: postgresql,
    name: 'PostgreSQL',
  },
  {
    src: mysql,
    name: 'MySQL',
  },
  {
    src: mongodb,
    name: 'MongoDB',
  },
  {
    src: docker,
    name: 'Docker',
  },
  {
    src: swagger,
    name: 'Swagger',
  },
  {
    src: aws,
    name: 'AWS',
  },
  {
    src: git,
    name: 'GIT',
  },
  {
    src: figma,
    name: 'Figma',
  },
  {
    src: ubuntu,
    name: 'Ubuntu',
  },
]

export default stacks
