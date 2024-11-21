'use client'
import React from 'react'
import { motion } from 'motion/react'

export const AboutImages = () => {
  return (
    <div className='flex justify-center items-center flex-[1] relative w-[380px] md:w-[570px] h-full'>
      <motion.img whileHover={{ top: 3, left: 4, rotate: '-3deg' }} src='/corne_keyboard.webp' className='h-fit absolute top-12 left-20' width={166} height={166} alt="jonathan trevino's headshot" />
      <motion.img src='/jonathan_trevino_headshot.webp' className='h-fit absolute z-[2]' width={166} height={166} alt="jonathan trevino's headshot" />
      <motion.img whileHover={{ bottom: 3, right: 4, rotate: 3 }} src='/gundam.webp' className='h-fit absolute bottom-12 right-20 z-[1]' width={166} height={166} alt="jonathan trevino's headshot" />
    </div>
  )
}

