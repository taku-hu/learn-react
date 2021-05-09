import { About } from 'pages/About'
import { AboutPresident } from 'pages/AboutPresident'
import { AboutStaff } from 'pages/AboutStaff'

export const aboutRoutes = [
  {
    path: '/',
    exact: true,
    children: <About />
  },
  {
    path: '/president',
    children: <AboutPresident />
  },
  {
    path: '/staff',
    children: <AboutStaff />
  }
]
