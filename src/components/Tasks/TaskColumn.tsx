import { FC } from 'react'
import { Card } from '@components/Card'
import { TTask } from '../../services/task'

type TTaskColumnProps = {
  title: string
  tasks: TTask[]
}

const TaskColumn: FC<TTaskColumnProps> = ({ title, tasks }) => (
  <div className='mx-2'>
    <p className='text-[18px] font-semibold text-neutral-1'>
      {title} ({(tasks && tasks.length) ?? 0})
    </p>
    <div className='mt-4 space-y-4'>
      {Array.isArray(tasks) &&
        tasks.length > 0 &&
        tasks.map((tsk) => (
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
