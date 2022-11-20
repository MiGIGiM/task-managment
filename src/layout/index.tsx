import { FC, PropsWithChildren } from 'react'
import MasterNavBar from '../components/MasterNavBar'
import Sidebar from '../components/Sidebar'
import Loader from '../components/Loader'

type Props = {
  loading: boolean
}

const Layout: FC<PropsWithChildren & Props> = ({ children, loading }) => {
  if (loading) {
    return (
      <div className='flex bg-neutral-5'>
        <div className='sticky m-8 w-2/12'>
          <Sidebar />
        </div>
        <div className='mt-8 mr-8 w-full space-y-6'>
          <MasterNavBar />
          <div className='mt-[10%]'>
            <Loader className='mx-auto mt-80 w-32' />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex bg-neutral-5'>
      <div className='sticky m-8 w-2/12'>
        <Sidebar />
      </div>
      <div className='mt-8 mr-8 w-full space-y-6'>
        <MasterNavBar />
        {children}
      </div>
    </div>
  )
}

export default Layout
