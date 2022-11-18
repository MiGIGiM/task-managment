import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import Avatar, { EAvatarSize } from './Avatar'
import Button, { EButtonColors } from './Button'
import Tag, { ETagColor } from './Tag'

const Card = () => (
  <div className='w-80 max-w-sm space-y-5 rounded-lg bg-neutral-4 p-4'>
    <div className='flex items-center justify-between'>
      <p className='text-[18px] font-semibold text-neutral-1'>Twitter</p>
      <Button
        type='button'
        onClick={() => console.log('clicked')}
        btnText={<EllipsisHorizontalIcon className='stroke-[3]' />}
        color={EButtonColors.secondary}
        disabled={false}
      />
    </div>
    <div className='flex items-center justify-between'>
      <p className='font-semibold text-neutral-1'>3 Pts</p>
      <Tag color={ETagColor.base} label='Today' type='date' />
    </div>
    <div className='flex space-x-2'>
      <Tag color={ETagColor.green} label='ios app' type='base' />
      <Tag color={ETagColor.yellow} label='label' type='base' />
    </div>
    <Avatar src='/assets/img/profile-placeholder.png' size={EAvatarSize.sm} />
  </div>
)

export default Card
