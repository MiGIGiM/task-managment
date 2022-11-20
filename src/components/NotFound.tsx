import React, { FC } from 'react'
import { useLottie } from 'lottie-react'
import ErrorAnimation from '../assets/animations/error-404.json'

type Props = { className: string }

const NotFound: FC<Props> = ({ className }) => {
  const options = {
    animationData: ErrorAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options)

  return (
    <main className={className}>
      <div className='mx-auto w-1/2'>{View}</div>
      <p className='text-center text-xs font-semibold text-neutral-1'>
        The page you are looking for doesn&apos;t exist.{' '}
        <a href='/' className='underline visited:text-tertiary-3 hover:text-primary-4'>
          Return to dashboard
        </a>
      </p>
    </main>
  )
}

export default NotFound
