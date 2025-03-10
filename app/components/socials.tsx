'use client'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Socials = () => {
  return (
    <div className='flex gap-5'>
      <Link target='_blank' href='https://linkedin.com/in/jonathan-trevino' className='hover:rotate-3'>
        <Linkedin />
      </Link>
      <Link target='_blank' href='https://github.com/jonathantrevino' className='hover:rotate-3'>
        <Github />
      </Link>
      <Link target='_blank' href='https://x.com/jtrevdev' className='hover:rotate-3'>
        <Twitter />
      </Link >
    </div>
  )
}

