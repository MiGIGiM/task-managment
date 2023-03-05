import { AppContext } from '@ctx/AppContext'
import { Listbox, Transition } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/20/solid'
import { FC, Fragment, useContext } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'
import { TUsers } from '../../services/users'
import Avatar, { EAvatarSize } from '../Avatar/Avatar'

type Props = {
  control: UseControllerProps
}
const AssigneeListBox: FC<Props> = ({ control }) => {
  const {
    field: { value, onChange },
  } = useController(control)
  const { users } = useContext(AppContext)!

  return (
    <Listbox value={value} onChange={onChange} name='assigne'>
      <div className='relative flex-1 gap-2 rounded py-1 px-2 font-medium'>
        <Listbox.Button className='max-w-fit rounded bg-neutral-3/10 '>
          {Object.keys(value).length === 0 ? (
            <span className='inline-flex items-center space-x-3'>
              <UserIcon className='w-4' />
              <p className='font-semibold'>Assignee</p>
            </span>
          ) : (
            <span className='inline-flex items-center space-x-3'>
              <Avatar
                src={users?.find((user) => user.id === value.id)?.avatar || ''}
                size={EAvatarSize.xs}
              />
              <p className='text-[12px] font-semibold'>
                {users?.find((user) => user.id === value.id)?.fullName}
              </p>
            </span>
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute left-0 top-10 z-50 mx-1 mt-1 gap-2 overflow-auto rounded bg-neutral-3 shadow-xl'>
            <p className='px-4 text-left text-[18px] font-semibold text-neutral-2'>Assign to...</p>
            {Array.isArray(users) &&
              users.length > 0 &&
              users.map((user) => (
                <Listbox.Option
                  key={user.id}
                  value={user}
                  className={({ active }) =>
                    `flex w-52 cursor-pointer items-center space-x-2 px-4 ${
                      active ? 'bg-neutral-2' : ''
                    }`
                  }
                >
                  <Avatar src={user.avatar} size={EAvatarSize.sm} />
                  <p className='text-neutral-1'>{user.fullName}</p>
                </Listbox.Option>
              ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default AssigneeListBox
