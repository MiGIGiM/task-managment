import { FC } from 'react'
import { TTask } from '../services/task'
import Card from './Card'

type TTaskColumnProps = {
  title: string
  tasks: TTask[]
}

const TaskColumn: FC<TTaskColumnProps> = ({ title, tasks }) => (
  <div className=''>
    <p className='text-[18px] font-semibold text-neutral-1'>
      {title} ({tasks.length})
    </p>
    <div className='mt-4 space-y-4'>
      {tasks.map((tsk) => (
        <Card
          key={tsk.id}
          name={tsk.name}
          assignee={tsk.assignee}
          dueDate={tsk.dueDate}
          pointEstimate={tsk.pointEstimate}
          id={tsk.id}
          status={tsk.status}
          tags={tsk.tags}
        />
      ))}
    </div>
  </div>
)

export default TaskColumn
