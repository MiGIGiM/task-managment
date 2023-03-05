import { FC } from 'react'
import { AlarmIcon } from '@components/Icons'

type TTagProps = {
  label: string
  type: 'date' | 'base'
  color: string
}

const Tag: FC<TTagProps> = ({ label, type, color }) => (
  <span className={`inline-flex items-center space-x-2 rounded px-4 py-1 ${color}`}>
    {type === 'date' && <AlarmIcon className='h-5 w-5' />}
    <p className='font-semibold uppercase'>{label}</p>
  </span>
)

export default Tag
