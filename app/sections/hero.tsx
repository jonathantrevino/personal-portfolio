import React from 'react'
import { Socials } from '../components/socials'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className='space-y-[24px]'>
      <span className='space-y-[10px]'>
        <h1 className='text-[color:var(--text-title)]'>Jonathan Trevino</h1>
        <p className='text-[18px]'>Software engineer in web development</p>
      </span>
      <div className='max-w-[515px] text-[color:var(--text-not-important)] text-sm'>
        <span className='text-[color:#F15B22] font-medium'>UTSA</span>{" "}
        graduate, 2+ years experience developing websites that solve real problems.
      </div>
      <Socials />
    </section>
  )
}

