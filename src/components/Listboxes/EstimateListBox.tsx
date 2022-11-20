import { Listbox, Transition } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/20/solid'
import { FC, Fragment } from 'react'

type Props = {
  value: string
  setValue: (str: string) => void
}

const data: string[] = ['0 Points', '1 Points', '2 Points', '4 Points', '8 Points']

const EstimateListBox: FC<Props> = ({ setValue, value }) => (
  <Listbox value={value} onChange={setValue}>
    <Listbox.Button className='inline-flex items-center space-x-3 rounded bg-neutral-3/10 px-4 py-1 text-neutral-1'>
      <svg
        width='20'
        height='18'
        viewBox='0 0 20 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM7 8V6H5V8H3V10H5V12H7V10H9V8H7ZM11 8V10H17V8H11Z'
          fill='white'
        />
      </svg>
      <p className='font-semibold'>{value === '' ? 'Estimate' : `${value}`}</p>
    </Listbox.Button>
    <Transition
      as={Fragment}
      leave='transition ease-in duration-100'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <Listbox.Options
        className='w-content absolute mt-8 max-h-60 overflow-auto rounded-md
                  bg-neutral-3 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
      >
        {data.map((point) => (
          <Listbox.Option
            key={point}
            value={point}
            className={({ active }) =>
              `flex items-center space-x-2 px-4 ${active ? 'bg-neutral-2' : ''}`
            }
          >
            <svg
              width='20'
              height='18'
              viewBox='0 0 20 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM7 8V6H5V8H3V10H5V12H7V10H9V8H7ZM11 8V10H17V8H11Z'
                fill='white'
              />
            </svg>
            <p className='text-neutral-1'>{point}</p>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Transition>
  </Listbox>
)

export default EstimateListBox
