import { gql } from '@apollo/client'

export default gql`
  query getTasks($input: FilterTaskInput!) {
    tasks(input: $input) {
      name
      id
      status
      assignee {
        avatar
      }
      dueDate
      pointEstimate
      tags
    }
  }
`
