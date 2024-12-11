import React from 'react'
import { Socials } from './socials'
import { Copy } from 'lucide-react'
import Image from 'next/image'
import { LocationTime } from './locationTime'
import EmailCopy from './emailCopy'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='space-y-[17px]'>
      <div className=''>
        <h2 className='title text-[23px]'>Let's Connect</h2>
        <p className='font-light'>Any questions, proposals, or collaborations? Feel free to reach out.</p>
      </div>
      <div className='space-y-[17px]'>
        <EmailCopy />
        <Socials />
      </div>
    </footer>
  )
}

