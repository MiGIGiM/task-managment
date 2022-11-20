/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dialog } from '@headlessui/react'
import { FC, FormEvent, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_USERS, TUsersRes } from '../services/users'
import Button, { EButtonColors } from './Button'
import AssigneeListBox from './Listboxes/AssigneListBox'
import EstimateListBox from './Listboxes/EstimateListBox'

type TTaskModalProps = {
  isOpen: boolean
  onClose: () => void
}

export type TTaskModalInput = {
  name: string
  assigneeId: string
  estimate: string
  labels: string[]
  dueDate: string
}

const TaskModal: FC<TTaskModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<TTaskModalInput>({
    name: '',
    assigneeId: '',
    estimate: '',
    labels: [],
    dueDate: '',
  })
  const { data } = useQuery<TUsersRes>(GET_USERS)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <Dialog.Panel className='mx-auto rounded  bg-neutral-3 p-6'>
          <form className='relative z-0 space-y-4' onSubmit={(e) => onSubmit(e)}>
            <input
              type='text'
              id='task_name'
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className='peer block w-full appearance-none border-0 bg-transparent py-2.5 px-0 text-[20px] text-neutral-2 focus:outline-none focus:ring-0 '
              placeholder=''
            />
            <label
              htmlFor='task_name'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-[20px] font-semibold text-neutral-2 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75'
            >
              Task
            </label>
            <div className='flex'>
              <EstimateListBox
                value={form.estimate}
                setValue={(estimate) =>
                  setForm({
                    ...form,
                    estimate,
                  })
                }
              />
              <AssigneeListBox
                data={data?.users || []}
                value={form.assigneeId}
                setValue={(assigneeId) =>
                  setForm({
                    ...form,
                    assigneeId,
                  })
                }
              />
            </div>
            <span className='flex justify-end space-x-4'>
              <Button
                type='button'
                color={EButtonColors.secondary}
                btnText='Cancel'
                onClick={onClose}
                disabled={false}
              />
              <Button
                type='submit'
                color={EButtonColors.primary}
                btnText='Create'
                onClick={() => false}
                disabled={false}
              />
            </span>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default TaskModal
