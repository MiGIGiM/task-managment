import { useState } from 'react'
import { Squares2X2Icon, Bars3Icon } from '@heroicons/react/24/outline'
import PlusButton from '../components/PlusButton'
import Layout from '../layout'
import Toggle from '../components/Toggle'

const Dashboard = () => {
  const [sel, setSel] = useState('columns')

  return (
    <Layout>
      <section>
        <div className='flex justify-between'>
          {/* <span className='flex items-center space-x-3'>
          <Squares2X2Icon className='h-5 w-5 stroke-2  group-first/active:text-primary-4 group-hover:text-primary-4' />
          <Bars3Icon className='h-5 w-5 stroke-2 group-first/active:text-primary-4 group-hover:text-primary-4' />
        </span> */}
          <Toggle selected={sel} setSelected={setSel} />
          <PlusButton />
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard
