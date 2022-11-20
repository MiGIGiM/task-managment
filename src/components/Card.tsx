import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { TTask } from '../services/task'
import { getDateString, getTagColor, getTaskPoints } from '../utils/general'
import Avatar, { EAvatarSize } from './Avatar'
import Button, { EButtonColors } from './Button'
import Tag, { ETagColor } from './Tag'

const Card: FC<TTask> = ({ assignee, dueDate, name, pointEstimate, tags }) => (
  <div className='w-80 max-w-sm space-y-5 rounded-lg bg-neutral-4 p-4'>
    <div className='flex items-center justify-between'>
      <p className='text-[18px] font-semibold text-neutral-1'>{name}</p>
      <Button
        type='button'
        onClick={() => console.log('clicked')}
        btnText={<EllipsisHorizontalIcon className='stroke-[3]' />}
        color={EButtonColors.secondary}
        disabled={false}
      />
    </div>
    <div className='flex items-center justify-between'>
      <p className='font-semibold text-neutral-1'>{getTaskPoints(pointEstimate)}</p>
      <Tag color={getTagColor(getDateString(dueDate))} label={getDateString(dueDate)} type='date' />
    </div>
    <div className='flex space-x-2'>
      {tags.map((tag) => (
        <Tag color={getTagColor(tag)} label={tag.replaceAll('_', ' ')} type='base' key={tag} />
      ))}
    </div>
    <Avatar
      src={assignee.avatar ? assignee.avatar : '/assets/img/profile-placeholder.png'}
      size={EAvatarSize.sm}
    />
  </div>
)

export default Card
