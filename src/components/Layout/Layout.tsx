import { FC, PropsWithChildren } from 'react'
import { MasterNavBar } from '@components/MasterNavBar'
import { Sidebar } from '@components/Sidebar'
import Loader from './Loader'

type Props = {
  loading: boolean
}

const Layout: FC<PropsWithChildren & Props> = ({ children, loading }) => (
  <div className='flex bg-neutral-5'>
    <div className='sticky m-8 w-2/12'>
      <Sidebar />
    </div>
    <div className='mt-8 mr-8 w-full max-w-6xl space-y-6'>
      <MasterNavBar />
      <div className='max-w-full'>{loading ? <Loader /> : children}</div>
    </div>
  </div>
)

export default Layout
