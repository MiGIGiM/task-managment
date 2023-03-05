import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router'
import history from './history'
import client from './gql/client'

const App = () => (
  <ApolloProvider client={client}>
    <RouterProvider router={history} />
  </ApolloProvider>
)

export default App
