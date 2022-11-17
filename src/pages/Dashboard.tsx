import { useState } from 'react'
import PlusButton from '../components/PlusButton'
import Layout from '../layout'
import Toggle from '../components/Toggle'

const Dashboard = () => {
  const [sel, setSel] = useState('columns')

  return (
    <Layout>
      <section>
        <div className='flex justify-between'>
          <Toggle selected={sel} setSelected={setSel} />
          <PlusButton />
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard
