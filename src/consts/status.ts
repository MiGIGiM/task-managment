export type TStatus = {
  display: string
  value: string
}

const status: TStatus[] = [
  { display: 'To Do', value: 'TODO' },
  { display: 'In Progress', value: 'IN_PROGRESS' },
  { display: 'Backlog', value: 'BACKLOG' },
  { display: 'Canceled', value: 'CANCELLED' },
  { display: 'Done', value: 'DONE' },
]

export default status
