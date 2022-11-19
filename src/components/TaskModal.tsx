/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dialog } from '@headlessui/react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

type TTaskModalProps = {
  isOpen: boolean
  onClose: () => void
}

type TTaskModalInput = {
  name: string
}

const TaskModal: FC<TTaskModalProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, setValue, watch } = useForm<TTaskModalInput>()

  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <Dialog.Panel className='mx-auto max-w-sm rounded  bg-neutral-3 p-6'>
          <form className='relative z-0'>
            <input
              type='text'
              id='task_name'
              {...register('name')}
              className='peer block w-full appearance-none border-0 bg-transparent py-2.5 px-0 text-[20px] text-neutral-2 focus:outline-none focus:ring-0 '
              placeholder=''
            />
            <label
              htmlFor='task_name'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-[20px] font-semibold text-neutral-2 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75'
            >
              Task
            </label>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default TaskModal
