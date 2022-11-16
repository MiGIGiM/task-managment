import { FC } from 'react'

type TAvatarSize = 'sm' | 'md' | 'lg'

type TAvatarProps = {
  src: string
  size: TAvatarSize
}

const Avatar: FC<TAvatarProps> = ({ src, size }) => {
  const getSize = (): string => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8'
      case 'lg':
        return 'w-12 h-12'
      case 'md':
        return 'h-10 w-10'
      default:
        return 'h-5 w-5'
    }
  }
  return (
    <div
      className={`my-3 ${getSize()} rounded-full bg-cover bg-center stroke-2`}
      style={{
        backgroundImage: `url('${src}')`,
      }}
    />
  )
}

export default Avatar
