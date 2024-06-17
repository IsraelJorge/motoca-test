import { createBrowserRouter } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { MotorcycleEdit } from '@/pages/Motorcycle/motorcycle-edit'
import { MotorcycleNew } from '@/pages/Motorcycle/motorcycle-new'
import { Route } from '@/utils/ui/Route'

import { Root } from './root'

export const router = createBrowserRouter([
  {
    path: Route.home,
    element: <Root />,
    children: [
      {
        path: Route.home,
        element: <Home />,
      },
      {
        path: Route.motorcycleNew,
        element: <MotorcycleNew />,
      },
      {
        path: Route.motorcycleEdit(':id'),
        element: <MotorcycleEdit />,
      },
    ],
  },
])
