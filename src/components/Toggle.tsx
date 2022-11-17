import { Dispatch, FC, SetStateAction } from 'react'
import { Bars3Icon, Squares2X2Icon } from '@heroicons/react/24/outline'

type TToggleProps = {
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

const Toggle: FC<TToggleProps> = ({ selected, setSelected }) => (
  <div className='flex space-x-3'>
    <button
      type='button'
      className={`${
        selected !== 'columns' ? 'border-primary-4' : 'border-none'
      } rounded-lg border p-2 transition-all`}
      onClick={() => setSelected('list')}
    >
      <Bars3Icon
        className={`h-6 w-6 stroke-2 ${
          selected !== 'columns' ? 'text-primary-4' : 'text-neutral-1'
        }`}
      />
    </button>
    <button
      type='button'
      className={`${
        selected === 'columns' ? 'border-primary-4' : 'border-none'
      } rounded-lg border p-2 transition-all`}
      onClick={() => setSelected('columns')}
    >
      <Squares2X2Icon
        className={`h-6 w-6 stroke-2 ${
          selected === 'columns' ? 'text-primary-4' : 'text-neutral-1'
        }`}
      />
    </button>
  </div>
)

export default Toggle
