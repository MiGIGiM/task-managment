import React, { FC } from 'react'
import { useLottie } from 'lottie-react'
import loadingAnimation from '@animations/loading.json'

const Loader: FC = () => {
  const options = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    animationData: loadingAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options)

  return (
    <div className='mt-[10%]'>
      <main className='mx-auto mt-80 w-32'>{View}</main>
    </div>
  )
}

export default Loader
