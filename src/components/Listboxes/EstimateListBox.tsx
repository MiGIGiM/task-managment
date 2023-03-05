import { EstimateIcon } from '@components/Icons'
import { Listbox, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

type Props = {
  control: UseControllerProps
}

const data: { key: string; val: string }[] = [
  { key: '0 Points', val: 'ZERO' },
  { key: '1 Points', val: 'ONE' },
  { key: '2 Points', val: 'TWO' },
  { key: '4 Points', val: 'FOUR' },
  { key: '8 Points', val: 'EIGHT' },
]

const EstimateListBox: FC<Props> = ({ control }) => {
  const {
    field: { value, onChange },
  } = useController(control)

  return (
    <Listbox value={value} onChange={onChange}>
      <div className='relative flex-1 gap-2 rounded py-1 px-2 font-medium'>
        <Listbox.Button className='inline-flex items-center space-x-3 rounded bg-neutral-3/10 text-neutral-1'>
          <EstimateIcon />
          <p>{value ? data.find((dt) => dt.val === value)?.key : 'Estimate'}</p>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute left-0 top-10 z-50 mx-1 mt-1 w-32 cursor-pointer gap-2 overflow-auto rounded bg-neutral-3 font-medium'>
            {data.map((point) => (
              <Listbox.Option
                key={point.key}
                value={point.val}
                className={({ active }) =>
                  `flex cursor-pointer items-center space-x-2 px-4 ${active ? 'bg-neutral-2' : ''}`
                }
              >
                <EstimateIcon />
                <p className='text-neutral-1'>{point.key}</p>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default EstimateListBox
