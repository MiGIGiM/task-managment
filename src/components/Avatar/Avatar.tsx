import { FC } from 'react'

export enum EAvatarSize {
  xs = 'w-6 h-6',
  sm = 'w-8 h-8',
  md = 'h-10 w-10',
  lg = 'w-12 h-12',
}

type TAvatarProps = {
  src: string
  size: EAvatarSize
}

const Avatar: FC<TAvatarProps> = ({ src, size }) => (
  <div
    className={`my-3 ${size} rounded-full bg-cover bg-center stroke-2`}
    style={{
      backgroundImage: `url('${src || '/assets/img/profile-placeholder.png'}')`,
    }}
  />
)

export default Avatar
