import { Squares2X2Icon } from '@heroicons/react/24/outline'
import SidebarItem, { TSideBarIitem } from './SidebarItem'

export interface INavItem extends TSideBarIitem {
  id: number
}

const navItems: INavItem[] = [
  {
    id: 1,
    to: '/',
    text: 'Dashboard',
    icon: (
      <Squares2X2Icon className='h-5 w-5 stroke-2  group-first/active:text-primary-4 group-hover:text-primary-4' />
    ),
  },
]

const Sidebar = () => (
  <aside className='h-screen w-full rounded-3xl bg-neutral-4 py-4'>
    <img src='/assets/svg/ravn_logo.svg' alt='logo' className='mx-auto' />
    <nav className='mt-12 text-neutral-2'>
      {navItems.map((nav) => (
        <SidebarItem key={nav.id} icon={nav.icon} text={nav.text} to={nav.to} />
      ))}
    </nav>
  </aside>
)

export default Sidebar
