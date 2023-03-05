import React, { FC } from 'react'
import { useLottie } from 'lottie-react'
import ErrorAnimation from '../assets/animations/error-404.json'

const NotFound: FC = () => {
  const options = {
    animationData: ErrorAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options)

  return (
    <main className='h-screen bg-neutral-5'>
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
