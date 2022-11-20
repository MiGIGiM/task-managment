import { gql } from '@apollo/client'

export type TUsersRes = {
  users: {
    avatar: string
    fullName: string
    id: string
  }[]
}

export type TUsers = {
  avatar: string
  fullName: string
  id: string
}

export const GET_USERS = gql`
  query getUsers {
    users {
      avatar
      fullName
      id
    }
  }
`
