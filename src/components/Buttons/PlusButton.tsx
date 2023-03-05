import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import TaskModal from '@components/Tasks/TaskModal'
import Button, { EButtonColors } from './Button'

const PlusButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        type='button'
        onClick={() => setIsOpen(true)}
        btnText={<PlusIcon className='w-5 stroke-2 text-neutral-1' />}
        disabled={false}
        color={EButtonColors.primary}
      />
      <TaskModal
        isModalOPen={isOpen}
        openModal={() => setIsOpen(true)}
        closeModal={() => setIsOpen(false)}
        task={undefined}
      />
    </>
  )
}

export default PlusButton
