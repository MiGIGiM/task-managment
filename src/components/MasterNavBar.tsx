/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form'
import { MagnifyingGlassIcon, XCircleIcon, BellIcon } from '@heroicons/react/24/outline'
import Avatar, { EAvatarSize } from './Avatar'

type TMasterNavBarInput = {
  search: string
}

const MasterNavBar = () => {
  const { register, handleSubmit, setValue, getValues, watch } = useForm<TMasterNavBarInput>({
    mode: 'onTouched',
  })

  const watchSearch = watch('search', '')

  const formValues = getValues()

  console.log(formValues)

  const onSubmit = (data: TMasterNavBarInput) => console.log(data)

  return (
    <div className='flex rounded-2xl bg-neutral-4 px-6'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex w-full items-center space-x-5'>
        <button type='submit' className='rounded p-px'>
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
          <XCircleIcon className='h-5 w-5 stroke-2 text-neutral-2 transition-colors duration-150 group-hover:text-primary-4 ' />
        </button>
        <BellIcon className='w-5 cursor-pointer text-neutral-2 transition-colors duration-100 hover:text-primary-4' />
        <Avatar src='/assets/img/profile-placeholder.png' size={EAvatarSize.md} />
      </span>
    </div>
  )
}

export default MasterNavBar
