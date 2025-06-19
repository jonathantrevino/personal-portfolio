'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Socials = () => {
  return (
    <div className='flex gap-2'>
      <Link target='_blank' href='https://linkedin.com/in/jonathan-trevino' className='hover:rotate-3'>
        <Image src='/linkedin.svg' width={30} height={30} alt='' />
      </Link>
      <Link target='_blank' href='https://github.com/jonathantrevino' className='hover:rotate-3'>
        <Image src='/github.svg' width={30} height={30} alt='' />
      </Link>
      <Link target='_blank' href='https://x.com/jtrevdev' className='hover:rotate-3'>
        <Image src='/x.svg' width={30} height={30} alt='' />
      </Link >
    </div>
  )
}

