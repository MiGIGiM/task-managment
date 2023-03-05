import { EstimateIcon } from '@components/Icons'
import { Listbox, Transition } from '@headlessui/react'
import { TagIcon } from '@heroicons/react/24/solid'
import { FC, Fragment } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

type Props = {
  control: UseControllerProps
}

const data = ['ANDROID', 'IOS', 'NODE JS', 'RAILS', 'REACT']

const LabelListBox: FC<Props> = ({ control }) => {
  const {
    field: { value, onChange },
  } = useController(control)
  return (
    <Listbox value={value} onChange={onChange} multiple>
      <div className='relative flex-1 gap-2 rounded py-1 px-2 font-medium'>
        <Listbox.Button className='relative inline-flex w-fit items-center space-x-3 rounded bg-neutral-3/10 text-neutral-1'>
          <TagIcon className='w-4' />
          <p>{!value ? value.toString() : 'Label'}</p>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute left-0 top-10 z-50 mx-1 mt-1 w-fit cursor-pointer gap-2 overflow-auto rounded bg-neutral-3 font-medium'>
            {data.map((label) => (
              <Listbox.Option
                key={label}
                value={label}
                className={({ active }) =>
                  `flex cursor-pointer items-center space-x-2 px-4 ${
                    active ? 'bg-neutral-2' : ''
                  } ${value.includes(label) ? 'bg-primary-1 text-neutral-4' : 'text-neutral-1'}`
                }
              >
                <p className=''>{label}</p>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default LabelListBox
