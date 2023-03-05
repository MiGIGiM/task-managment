import { FC, createContext, PropsWithChildren, useMemo } from 'react'
import status, { TStatus } from '@consts/status'
import { useQuery } from '@apollo/client'
import { GET_TASKS, GET_USERS } from '@gql-local/queries'
import { TTask } from 'services/task'

type TTaskGroup = {
  group: TTask[] | undefined
  status: string
  loading: boolean
}

type TUsers = {
  avatar: string
  fullName: string
  id: string
}

type TAppContext = {
  tasks: Omit<TTaskGroup, 'loading'>[]
  users: TUsers[] | undefined
  loading: boolean
}

export const AppContext = createContext<TAppContext | undefined>(undefined)

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const tasks: TTaskGroup[] = status.map((s: TStatus) => {
    const { data, loading } = useQuery<{ tasks: TTask[] }>(GET_TASKS, {
      variables: {
        input: {
          status: s.value,
        },
      },
    })

    return { group: data?.tasks ?? [], loading, status: s.display }
  })

  const { data, loading: usersLoading } = useQuery<{ users: TUsers[] }>(GET_USERS)

  const valueToProvide = useMemo(
    () => ({
      tasks: tasks.map((t) => ({ group: t.group, status: t.status })),
      users: data?.users ?? [],
      loading: tasks.some((t) => t.loading) || usersLoading,
    }),
    [tasks],
  )

  return <AppContext.Provider value={valueToProvide}>{children}</AppContext.Provider>
}
