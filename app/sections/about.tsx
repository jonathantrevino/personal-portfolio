import Image from 'next/image'
import React from 'react'
import { AboutImages } from '../components/aboutImages'
import Link from 'next/link'

export const About = () => {
  return (
    <section className='space-y-[24px]'>
      <div className='space-y-[0px]'>
        <h2 className='title'>About Me</h2>
        <p className='text-[color:var(--text-not-important)]'>Who I am beyond the screen—building things the hard way, for fun.</p>
      </div>
      <div className='grid grid-cols-10 gap-[20px]'>
        <div className='col-span-4 relative space-y-3'>
          <Image className='z-30 rounded-lg border-4 border-[color:var(--bg-stroke)]' src='/me.webp' width={220} height={220} alt='me' />
          <Image className='z-20 absolute right-0 top-[120px] rounded-lg border-4 border-[color:var(--bg-stroke)]' src='/gundam.webp' width={220} height={220} alt='my gundam' />
          <Image className='z-10 rounded-lg border-4 border-[color:var(--bg-stroke)]' src='/keyboard.webp' width={220} height={220} alt='my keyboard' />
        </div>
        <div className='col-span-6  text-sm'>
          <p className='text-[color:var(--text-not-important)]'>I've always been drawn to how things work — that curiosity naturally led me to computers, and eventually a <span className='text-[color:var(--text-title)]'>degree in Computer Science</span> with a <span className='text-[color:var(--text-title)]'>minor in Cybersecurity.</span></p>
          <br />
          <p className='text-[color:var(--text-not-important)]'>Outside of coding, I’m usually <span className='text-[color:var(--text-title)]'>re-arranging my room</span>, <span className='text-[color:var(--text-title)]'>fine-tuning my Neovim config</span>, or building my <span className='text-[color:var(--text-title)]'>Master Grade Gundam collection</span> (yes, they take hours and I love it).</p>
          <br />
          <p className='text-[color:var(--text-not-important)]'>These days, I’m focused on growing webportfolios.dev, sharing my journey on X, and helping other developers build standout portfolios — all while exploring new job opportunities.</p>
        </div>

      </div>
    </section>
  )
}

