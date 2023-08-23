import { RouteObject, useRoutes } from 'react-router-dom'
import App, { loadCurrentUser } from '../App'
import NotFoundPage from '../pages/NotFoundPage'
import RequireAuth from './RequireAuth'
import { ProfilePage } from '../pages/ProfilePage'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
//import Portofolio from '../pages/portofolio/Portofolio'
import Services, { loadServicesList } from '../pages/services/Services'
import loadable from '@loadable/component'

const Portofolio = loadable(() => import('../pages/portofolio/Portofolio'), {
  ssr: true,
})

const routes: RouteObject[] = [
  {
    element: <App />,
    path: '/',
    loader: loadCurrentUser,
    children: [
      {
        element: <RequireAuth />,
        children: [{ path: 'profile', element: <ProfilePage /> }],
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/portofoliu',
        element: <Portofolio />,
      },
      {
        path: '/servicii',
        element: <Services />,
        loader: loadServicesList,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]

export { routes }
export default function Router() {
  return useRoutes(routes)
}
