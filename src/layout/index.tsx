import { FC, PropsWithChildren } from 'react'
import MasterNavBar from '../components/MasterNavBar'
import Sidebar from '../components/Sidebar'

const Layout: FC<PropsWithChildren> = ({ children }) => (
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

export default Layout
