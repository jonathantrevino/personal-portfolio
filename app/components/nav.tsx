import React from 'react'
import { Logo } from './logo'
import Link from 'next/link'

export const Nav = () => {
  return (
    <nav className='flex items-center justify-between'>
      <Link href='/'><Logo /></Link>
      {/*<Link href='/blogs' className='text-lg text-[color:#2B3440]'>Blogs</Link>*/}
    </nav>
  )
}

