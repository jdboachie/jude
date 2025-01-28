'use client';

import React from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'

function Page () {

  const scale = useMotionValue(1);

  return (
    <div className='size-full h-screen grid place-items-center'>
      <motion.div
        onClick={() => {
          console.log('clicked')
          animate(scale, [1, 1.5], {
            repeat: 0,
            ease: 'easeOut',
            duration: 0.150,
          })
        }}
        style={{ scale }}
        className='bg-neutral-100 w-[350px] h-[100px] border rounded-md shadow-sm'
      >

      </motion.div>
    </div>
  )
}

export default Page