import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import Button, { EButtonColors } from './Button'
import TaskModal from './TaskModal'

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
      <TaskModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default PlusButton
