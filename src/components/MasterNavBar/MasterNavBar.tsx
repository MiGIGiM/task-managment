/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form'
import { MagnifyingGlassIcon, XCircleIcon, BellIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Toggle } from '@components/Toggle'
import Avatar, { EAvatarSize } from '../Avatar/Avatar'
import { PlusButton } from '../Buttons'

type TMasterNavBarInput = {
  search: string
}

const MasterNavBar = () => {
  const { register, handleSubmit, setValue, watch } = useForm<TMasterNavBarInput>({
    mode: 'onTouched',
  })
  const [option, setOption] = useState('columns')

  const watchSearch = watch('search', '')

  const onSubmit = (data: TMasterNavBarInput) => console.log(data)

  return (
    <div className='space-y-5'>
      <div className='flex rounded-2xl bg-neutral-4 px-6'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex w-full items-center space-x-5'>
          <button type='submit' className='rounded p-px'>
            <p className='sr-only'>Sumbit search</p>
            <MagnifyingGlassIcon className='h-5 w-5 text-neutral-2 transition-colors duration-150 hover:text-primary-4' />
          </button>
          <input
            defaultValue=''
            type='text'
            placeholder='Search'
            {...register('search')}
            className='focus:group w-full border-none bg-transparent text-neutral-2 focus:ring-transparent'
          />
        </form>
        <span className='flex space-x-6'>
          <button
            type='button'
            onClick={() => {
              setValue('search', '')
            }}
            className={`${
              watchSearch !== '' ? 'opacity-100' : 'opacity-0'
            } group transition-opacity duration-100`}
          >
            <p className='sr-only'>Clear search</p>
            <XCircleIcon className='h-5 w-5 stroke-2 text-neutral-2 transition-colors duration-150 group-hover:text-primary-4 ' />
          </button>
          <BellIcon className='w-5 cursor-pointer text-neutral-2 transition-colors duration-100 hover:text-primary-4' />
          <Avatar src='/assets/img/profile-placeholder.png' size={EAvatarSize.md} />
        </span>
      </div>
      <div className='flex justify-between'>
        <Toggle selected={option} setSelected={setOption} />
        <PlusButton />
      </div>
    </div>
  )
}

export default MasterNavBar
