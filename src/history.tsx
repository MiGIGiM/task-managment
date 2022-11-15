import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

const history = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/my-tasks',
    element: <p>my tasks</p>,
  },
  {
    path: '*',
    element: <p>error</p>,
  },
])

export default history
