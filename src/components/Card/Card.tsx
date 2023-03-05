import {
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { FC, Fragment, useState } from 'react'
import { Tag } from '@components/Tag'
import Button, { EButtonColors } from '@components/Buttons/Button'
import { Menu, Transition } from '@headlessui/react'
import { TTask } from '../../services/task'
import { getDateString, getTagColor, getTaskPoints } from '../../utils/general'
import Avatar, { EAvatarSize } from '../Avatar/Avatar'

const Card: FC<TTask> = ({ assignee, dueDate, name, pointEstimate, tags }) => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className='w-80 max-w-xs space-y-5 rounded-lg bg-neutral-4 p-4'>
      <div className='flex items-center justify-between'>
        <p className='text-[18px] font-semibold text-neutral-1'>{name}</p>
        <div className=''>
          <Menu as='div' className='relative inline-block text-left'>
            <div>
              <Menu.Button className='w-6 text-white'>
                <p className='sr-only'>Options</p>
                <EllipsisHorizontalIcon className='stroke-[3]' />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 w-56 origin-top-right rounded-md border-neutral-2 bg-neutral-3'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-neutral-2 text-neutral-3' : 'text-neutral-1'
                      } group flex w-full items-center space-x-2 rounded-t-md px-2 py-2`}
                    >
                      <PencilIcon className='w-4' />
                      <p>Edit</p>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-neutral-2 text-neutral-3' : 'text-neutral-1'
                      } group flex w-full items-center space-x-2 rounded-b-md px-2 py-2`}
                    >
                      <TrashIcon className='w-4' />
                      <p>Delete</p>
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <p className='font-semibold text-neutral-1'>{getTaskPoints(pointEstimate)}</p>
        <Tag
          color={getTagColor(getDateString(dueDate))}
          label={getDateString(dueDate)}
          type='date'
        />
      </div>
      <div className='flex space-x-2'>
        {tags.map((tag) => (
          <Tag color={getTagColor(tag)} label={tag.replaceAll('_', ' ')} type='base' key={tag} />
        ))}
      </div>
      <Avatar
        src={assignee.avatar ? assignee.avatar : '/assets/img/profile-placeholder.png'}
        size={EAvatarSize.sm}
      />
    </div>
  )
}

export default Card
