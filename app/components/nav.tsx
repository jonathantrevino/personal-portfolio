'use client'
import React from 'react'
import { Logo } from './logo'
import Link from 'next/link'

import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Check if theme is stored
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save to localStorage
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeSwitcher;


export const Nav = () => {

  return (
    <nav className='flex items-center justify-between'>
      <Link href='/'>          <svg width="28" height="24" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.7898 1.69717H8.2677L8.01376 2.459C9.84215 2.459 10.8071 3.98266 11.0611 4.74449C11.1457 8.13041 11.315 16.0704 11.315 20.7429C11.315 25.4155 7.92911 25.9065 6.23615 25.5679C2.86829 24.418 3.69672 20.7429 4.96644 19.7272C5.55897 19.3039 6.4901 18.4067 5.47433 18.2035C1.91912 17.4417 -3.15975 25.3139 5.22038 27.3455C11.9245 28.9707 14.2777 23.4517 14.6163 20.489C14.6163 15.4101 14.7687 5.04922 15.3781 4.23661C16.14 3.22083 17.1557 3.47478 18.6794 3.47478C19.8983 3.47478 20.203 4.65984 20.203 5.25238V17.4417C20.203 21.5048 19.018 22.8591 18.4254 23.0284L18.6794 23.5363H25.2819L25.7898 22.5205C23.7583 22.7237 23.0811 20.9122 22.9964 19.9811V6.77604C22.9964 4.13503 23.6736 3.47478 24.0122 3.47478H25.7898C28.0245 3.47478 28.7525 5.84491 28.8371 7.02998L30.1068 6.5221V1.18928L29.599 0.681396C29.3958 1.29086 26.9749 1.61252 25.7898 1.69717Z" fill="var(--text-color)" />
      </svg>
      </Link>
      {/*<Link href='/blogs' className='text-lg text-[color:#2B3440]'>Blogs</Link>*/}
      <ThemeSwitcher />
    </nav>
  )
}

