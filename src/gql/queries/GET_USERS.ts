import { gql } from '@apollo/client'

export default gql`
  query getUsers {
    users {
      avatar
      fullName
      id
    }
  }
`
