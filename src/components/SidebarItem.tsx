import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

export type TSideBarIitem = {
  icon: ReactNode
  to: string
  text: string
}

const SidebarItem: FC<TSideBarIitem> = ({ icon, to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `${
        isActive ? 'custom-gradient group/active' : ''
      } group relative flex items-center space-x-5 p-5`
    }
  >
    <span className='absolute right-0 hidden h-full w-1 bg-primary-4 group-first/active:block'>
      <p className='visible opacity-0'>...</p>
    </span>
    {icon}
    <p className='font-semibold uppercase group-first/active:text-primary-4 group-hover:text-primary-4'>
      {text}
    </p>
  </NavLink>
)

export default SidebarItem
