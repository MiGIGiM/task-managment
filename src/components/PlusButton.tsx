import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
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
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
        <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
        <div className='fixed inset-0 flex items-center justify-center p-4'>
          <Dialog.Panel className='mx-auto max-w-sm rounded  bg-neutral-3 p-6'>
            <p>Task Title</p>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default PlusButton
