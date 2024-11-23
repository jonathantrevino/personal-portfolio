'use client'
import React from 'react'
import { motion } from 'motion/react'

export const AboutImages = () => {
  return (
    <div className='flex justify-center items-center flex-[1] relative w-full md:w-[570px] h-full'>
      <motion.img whileInView={{ rotate: '-3deg', top: 32, left: 90 }} src='/corne_keyboard.webp' className='h-fit absolute' width={166} height={166} alt="jonathan trevino's headshot" />
      <motion.img src='/jonathan_trevino_headshot.webp' className='h-fit absolute z-[2]' width={166} height={166} alt="jonathan trevino's headshot" />
      <motion.img whileInView={{ rotate: '3deg', bottom: 32, right: 90 }} src='/gundam.webp' className='h-fit absolute z-[1]' width={166} height={166} alt="jonathan trevino's headshot" />
    </div>
  )
}

