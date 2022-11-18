import { useState } from 'react'
import PlusButton from '../components/PlusButton'
import Layout from '../layout'
import Toggle from '../components/Toggle'
import TaskColumn from '../components/TaskColumn'

const Dashboard = () => {
  const [option, setOption] = useState('columns')

  return (
    <Layout>
      <section className='space-y-5'>
        <div className='flex justify-between'>
          <Toggle selected={option} setSelected={setOption} />
          <PlusButton />
        </div>
        <div className='grid grid-cols-5 gap-28 overflow-x-auto'>
          <TaskColumn />
          <TaskColumn />
          <TaskColumn />
          <TaskColumn />
          <TaskColumn />
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard
