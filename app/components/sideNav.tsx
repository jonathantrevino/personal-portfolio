'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


const SideNav = () => {

  const [theme, setTheme] = useState('dark');


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Check if theme is stored
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = (selectedTheme: string) => {
    const newTheme = selectedTheme
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save to localStorage
  };

  return (
    <aside className='col-span-12 lg:col-span-1'>
      <nav className='sticky top-[120px] flex flex-row lg:flex-col lg:justify-start justify-between gap-[35px] col-span-2'>
        <Link href='/' className='w-fit'>

          <Image src={theme === 'light' ? '/light-logo.svg' : '/dark-logo.svg'} width={30} height={28} alt='logo' />

        </Link>
        {/*<div className='space-y-[25px] text-[color:var(--text-not-important)] flex flex-col'>
          <Link href='/#work' className='w-fit hover:translate-x-1 transition-all'>Work</Link>
          <Link href='/#tools' className='w-fit hover:translate-x-1 transition-all'>Tools</Link>
          <Link href='/#certs' className='w-fit hover:translate-x-1 transition-all'>Certs</Link>
          <Link href='/blog' className='w-fit hover:translate-x-1 transition-all'>Blog</Link>
        </div>*/}
        <button className={`w-fit flex gap-2 rounded-md text-xs items-center active:scale-95 group`} onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>
          <Image src={theme === 'dark' ? '/dark.svg' : '/light.svg'} width={34} height={34} alt='' />

        </button>

      </nav>
    </aside>
  )
}

export default SideNav
