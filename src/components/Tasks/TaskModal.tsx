/* eslint-disable react/jsx-props-no-spreading */
import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Button, { EButtonColors } from '@components/Buttons/Button'
import EstimateListBox from '@components/Listboxes/EstimateListBox'
import AssigneeListBox from '@components/Listboxes/AssigneListBox'
import { LabelListBox } from '@components/Listboxes'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CalendarIcon } from '@heroicons/react/24/solid'
import { TUsers } from 'services/users'
import { gql, Reference, useMutation } from '@apollo/client'
import { ADD_TASK } from '@gql-local/mutations'
import { TTask } from 'services/task'

export interface CreateTask {
  assigne: TUsers
  dueDate: Date
  name: string
  pointEstimate: string
  status: string
  tags: string[]
}

type Props = {
  task: CreateTask | undefined
  isModalOPen: boolean
  openModal: () => void
  closeModal: () => void
}

const TaskModal: FC<Props> = ({ task, openModal, closeModal, isModalOPen }) => {
  const { control, handleSubmit, register, reset, setValue } = useForm<Partial<CreateTask>>({
    defaultValues: {
      name: '',
      pointEstimate: '',
      status: '',
      tags: [],
      assigne: undefined,
      dueDate: undefined,
    },
  })

  const [createTask, { loading }] = useMutation(ADD_TASK, {
    update(cache, { data: { createTask: newTask } }) {
      cache.modify({
        fields: {
          tasks(currentTasks, { readField, storeFieldName }) {
            if (!storeFieldName.includes('TODO')) return currentTasks

            const newTaskRef = cache.writeFragment({
              data: newTask as TTask,
              fragment: gql`
                fragment NewTask on Task {
                  id
                  name
                  dueDate
                  pointEstimate
                  tags
                  position
                  assignee {
                    avatar
                    fullName
                  }
                }
              `,
            })

            if (currentTasks.some((ref: Reference) => readField('id', ref) === newTask.id))
              return currentTasks

            return [...currentTasks, newTaskRef]
          },
        },
      })
    },
  })

  const onSubmit = async (data: Partial<CreateTask>) => {
    try {
      const body = {
        variables: {
          input: {
            name: data.name,
            status: 'TODO',
            assigneeId: data.assigne?.id,
            pointEstimate: data.pointEstimate,
            tags: data.tags?.map((tg) => tg.replaceAll(' ', '_')),
            dueDate: data.dueDate,
          },
        },
      }
      await createTask(body)

      reset()
      closeModal()
    } catch (err) {
      console.error(err)
    }
  }

  const onErrors = () => console.log('errors')

  return (
    <Transition appear show={isModalOPen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => {
          reset()
          closeModal()
        }}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='mx-auto h-full w-full bg-neutral-3 p-8 lg:h-auto lg:max-w-2xl lg:rounded-xl lg:p-4 lg:shadow-xl'>
                <form onSubmit={handleSubmit(onSubmit, onErrors)} className='text-neutral-1'>
                  <input
                    type='text'
                    className='w-full rounded-lg border-none bg-transparent focus:border-dashed focus:border-violet-600 focus:ring-0 focus-visible:outline-0 '
                    placeholder='Task Title'
                    {...register('name', {
                      required: 'Title is required',
                    })}
                  />
                  <div className='grid grid-cols-4 place-items-center gap-0'>
                    <EstimateListBox
                      control={{
                        name: 'pointEstimate',
                        control,
                        rules: { required: 'Point estimate is required' },
                        defaultValue: '',
                      }}
                    />
                    <AssigneeListBox
                      control={{
                        name: 'assigne',
                        control,
                        rules: { required: 'Assignees are required' },
                        defaultValue: {},
                      }}
                    />
                    <LabelListBox
                      control={{
                        name: 'tags',
                        control,
                        rules: { required: 'Labels are required' },
                      }}
                    />
                    <div className='group relative w-[161px] cursor-pointer rounded px-4 text-[12px] text-white transition-colors duration-200'>
                      <CalendarIcon className='absolute top-[25%] z-50 w-4' />
                      <Controller
                        name='dueDate'
                        control={control}
                        render={({ field }) => (
                          <DatePicker
                            todayButton='Today'
                            dateFormat='yyyy/MM/dd'
                            className='w-full cursor-pointer border-none bg-transparent pl-6 text-center text-[14px] text-white placeholder:text-white focus:ring-0'
                            placeholderText='Due Date'
                            selected={field.value}
                            onChange={field.onChange}
                            value={field.value?.toString()}
                            calendarClassName='bg-neutral-4'
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className='flex w-full justify-end space-x-4'>
                    <Button
                      btnText='Cancel'
                      type='button'
                      color={EButtonColors.secondary}
                      onClick={() => closeModal()}
                      disabled={false}
                    />
                    <input
                      type='submit'
                      className='min-w-[40px] cursor-pointer rounded-lg bg-primary-4 p-2 text-base text-neutral-1 hover:bg-primary-2 active:bg-primary-3 disabled:bg-primary-2'
                    />
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default TaskModal
