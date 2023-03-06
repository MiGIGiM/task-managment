enum EPointEstimate {
  EIGHT = '8 Pts',
  FOUR = '4 Pts',
  ONE = '1 Pts',
  TWO = '2 Pts',
  ZERO = '0 Pts',
}

export enum EStatus {
  BACKLOG = 'BACKLOG',
  CANCELLED = 'CANCELLED',
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  TODO = 'TODO',
}

enum ETaskTag {
  ANDROID = 'Android',
  IOS = 'IOS',
  NODE_JS = 'Node Js',
  RAILS = 'Rails',
  REACT = 'React',
}

export type TTask = {
  name: string
  id: string
  status: EStatus
  tags: ETaskTag[]
  assignee: { avatar: string }
  dueDate: Date
  pointEstimate: EPointEstimate
}

export type TTaskArr = {
  tasks: TTask[]
}

export type TTaskColumns = {
  todo: TTask[]
  backlog: TTask[]
  done: TTask[]
  cancelled: TTask[]
  in_progress: TTask[]
}

export type TTaskFilters = {
  assigneeId?: string
  dueDate?: Date
  name?: string
  ownerId?: string
  pointEstimate: EPointEstimate
  status: EStatus
  tags: ETaskTag[]
}
