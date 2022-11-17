import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'

const PlusButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button type='button' onClick={() => setIsOpen(true)} className='rounded-lg bg-primary-4 p-3'>
        <PlusIcon className='w-5 stroke-2 text-neutral-1' />
      </button>
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
