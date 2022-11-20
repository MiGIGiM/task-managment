import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import PlusButton from '../components/PlusButton'
import Layout from '../layout'
import Toggle from '../components/Toggle'
import TaskColumn from '../components/TaskColumn'
import { EStatus, GET_TASK, TTaskArr, TTaskColumns } from '../services/task'

const Dashboard = () => {
  const [option, setOption] = useState('columns')
  const [tasks, setTasks] = useState<TTaskColumns>({
    backlog: [],
    todo: [],
    cancelled: [],
    done: [],
    in_progress: [],
  })
  const { data, loading } = useQuery<TTaskArr>(GET_TASK, {
    variables: {
      input: {},
    },
  })

  useEffect(() => {
    if (data) {
      setTasks({
        backlog: data.tasks?.filter((task) => task.status === EStatus.BACKLOG),
        todo: data.tasks?.filter((task) => task.status === EStatus.TODO),
        done: data.tasks?.filter((task) => task.status === EStatus.DONE),
        in_progress: data.tasks?.filter((task) => task.status === EStatus.IN_PROGRESS),
        cancelled: data.tasks?.filter((task) => task.status === EStatus.CANCELLED),
      })
    }
  }, [data])

  return (
    <Layout loading={loading}>
      <section className='space-y-5'>
        <div className='flex justify-between'>
          <Toggle selected={option} setSelected={setOption} />
          <PlusButton />
        </div>
        <div className='grid grid-cols-5 overflow-x-auto'>
          {tasks.todo.length > 0 && <TaskColumn title='To Do' tasks={tasks.todo} />}
          {tasks.in_progress.length > 0 && (
            <TaskColumn title='In Progress' tasks={tasks.in_progress} />
          )}
          {tasks.done.length > 0 && <TaskColumn title='Done' tasks={tasks.done} />}
          {tasks.cancelled.length > 0 && <TaskColumn title='Cancelled' tasks={tasks.cancelled} />}
          {tasks.backlog.length > 0 && <TaskColumn title='Backlog' tasks={tasks.backlog} />}
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard
