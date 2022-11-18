import { FC } from 'react'
import Alarm from './svg/Alarm'

export enum ETagColor {
  base = 'bg-neutral-2/10 fill-neutral-1 text-neutral-1',
  green = 'bg-secondary-4/10 fill-secondary-4 text-secondary-4',
  blue = 'bg-[#2F61BF]/10 fill-[#2F61BF] text-[#2F61BF]',
  yellow = 'bg-tertiary-4/10 fill-tertiary-4 text-tertiary-4',
  red = 'bg-primary-4/10 fill-primary-4 text-primary-4',
}

type TTagProps = {
  label: string
  type: 'date' | 'base'
  color: ETagColor
}

const Tag: FC<TTagProps> = ({ label, type, color }) => (
  <span className={`inline-flex items-center space-x-2 rounded px-4 py-1 ${color}`}>
    {type === 'date' && <Alarm className='h-5 w-5' />}
    <p className='font-semibold uppercase'>{label}</p>
  </span>
)

export default Tag
