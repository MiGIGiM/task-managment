import { useForm } from 'react-hook-form'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type TMasterNavBarInput = {
  search: string
}

const MasterNavBar = () => {
  const { register, handleSubmit } = useForm<TMasterNavBarInput>()

  return (
    <div className='bg-neutral-4 '>
      <MagnifyingGlassIcon className='h-5 w-5 text-neutral-2' />
    </div>
  )
}

export default MasterNavBar
