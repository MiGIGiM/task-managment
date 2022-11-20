import { Listbox, Transition } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/20/solid'
import { FC, Fragment } from 'react'
import { TUsers } from '../../services/users'
import Avatar, { EAvatarSize } from '../Avatar'

type Props = {
  data: TUsers[]
  value: string
  setValue: (str: string) => void
}

const AssigneeListBox: FC<Props> = ({ data, setValue, value }) => (
  <Listbox value={value} onChange={setValue}>
    <Listbox.Button className='inline-flex items-center space-x-3 rounded bg-neutral-3/10 px-4 py-1 text-neutral-1'>
      <UserIcon className='w-4' />
      <p className='font-semibold'>Assignee</p>
    </Listbox.Button>
    <Transition
      as={Fragment}
      leave='transition ease-in duration-100'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <Listbox.Options className='absolute mt-8 ml-32 max-h-60 w-full overflow-auto rounded-md bg-neutral-3 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
        {data.map((user) => (
          <Listbox.Option
            key={user.id}
            value={user.id}
            className={({ active }) =>
              `flex items-center space-x-2 px-4 ${active ? 'bg-neutral-2' : ''}`
            }
          >
            <Avatar src={user.avatar} size={EAvatarSize.sm} />
            <p className='text-neutral-1'>{user.fullName}</p>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Transition>
  </Listbox>
)

export default AssigneeListBox
