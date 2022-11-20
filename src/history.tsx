import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NotFound from './components/NotFound'

const history = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <NotFound className='h-screen bg-neutral-5' />,
  },
])

export default history
