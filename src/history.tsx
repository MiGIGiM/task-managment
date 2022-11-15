import { createBrowserRouter } from 'react-router-dom'

const history = createBrowserRouter([
  {
    path: '/',
    element: <h1 className='text-3xl font-bold text-rose-500 underline'>Hello world!</h1>,
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
