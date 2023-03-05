/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useId } from 'react'
import { Layout } from '@components/Layout'
import TaskColumn from '@components/Tasks/TaskColumn'
import { AppContext } from '@ctx/AppContext'

const Dashboard = () => {
  const id = useId()
  const { loading, tasks } = useContext(AppContext)!
  return (
    <Layout loading={loading}>
      <section>
        <div className='flex justify-between overflow-x-scroll'>
          {tasks.map((t, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TaskColumn key={`${id}-${index}`} title={t.status} tasks={t.group ?? []} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard
