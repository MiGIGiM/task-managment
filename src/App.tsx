import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router'
import history from './history'
import client from './services'

const App = () => (
  <ApolloProvider client={client}>
    <RouterProvider router={history} />
  </ApolloProvider>
)

export default App
