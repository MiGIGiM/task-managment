import MasterNavBar from '../components/MasterNavBar'
import Sidebar from '../components/Sidebar'

const Layout = () => (
  <div className='flex h-screen bg-neutral-5'>
    <div className='m-8 w-2/12'>
      <Sidebar />
    </div>
    <div className='mt-8 w-full'>
      <MasterNavBar />
    </div>
  </div>
)

export default Layout
