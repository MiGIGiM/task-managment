import { useState } from 'react'
import PlusButton from '../components/PlusButton'
import Layout from '../layout'
import Toggle from '../components/Toggle'

const Dashboard = () => {
  const [option, setOption] = useState('columns')

  return (
    <Layout>
      <section>
        <div className='flex justify-between'>
          <Toggle selected={option} setSelected={setOption} />
          <PlusButton />
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard
