import { createBrowserRouter } from 'react-router-dom'
import { AppContextProvider } from '@ctx/AppContext'
import Dashboard from '@pages/Dashboard'
import NotFound from '@pages/NotFound'

const history = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppContextProvider>
        <Dashboard />
      </AppContextProvider>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default history
