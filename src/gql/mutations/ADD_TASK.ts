import { gql } from '@apollo/client'

export default gql`
  mutation createTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      name
      dueDate
      pointEstimate
      tags
      position
      assignee {
        id
        avatar
        fullName
      }
    }
  }
`
