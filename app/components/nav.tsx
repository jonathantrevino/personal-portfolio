'use client'
import React from 'react'
import Link from 'next/link'

import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark');
  const strokeColor = theme === 'dark' ? 'white' : 'black';


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
    <div className='flex gap-2'>
      {theme === 'light' &&
        <button className={`flex gap-2 rounded-md text-xs group items-center active:scale-95`} onClick={() => toggleTheme('dark')}>
          <svg className='group-hover:rotate-45' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10Z"
              stroke={strokeColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 1.875V2.5"
              stroke={strokeColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 12.5V13.125"
              stroke={strokeColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.875 7.5H2.5"
              stroke={strokeColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 7.5H13.125"
              stroke={strokeColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.4775 3.52246L11.0356 3.96434"
              stroke={strokeColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.96434 11.0356L3.52246 11.4775"
              stroke={strokeColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.52246 3.52246L3.96434 3.96434"
              stroke={strokeColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.0356 11.0356L11.4775 11.4775"
              stroke={strokeColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Dark
        </button>
      }
      {theme === 'dark' &&
        <button className={`flex gap-2 rounded-md text-xs items-center active:scale-95 group`} onClick={() => toggleTheme('light')}>
          <svg className='group-hover:-rotate-12' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.5 1.875C6.75408 2.62092 6.33503 3.63261 6.33503 4.6875C6.33503 5.74239 6.75408 6.75408 7.5 7.5C8.24592 8.24592 9.25761 8.66498 10.3125 8.66498C11.3674 8.66498 12.3791 8.24592 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59738C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82298C5.29995 2.2049 6.38748 1.875 7.5 1.875Z"
              stroke={strokeColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 1.875V4.375"
              stroke={strokeColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.75 3.125H11.25"
              stroke={strokeColor}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Light
        </button>
      }
    </div>
  )
};

export default ThemeSwitcher;


export const Nav = () => {

  return (
    <nav className='xl:hidden flex items-center justify-between'>
      <div className='flex gap-8'>
        <Link href='/'>
          <svg width="28" height="24" className='w-fit' viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.7898 1.69717H8.2677L8.01376 2.459C9.84215 2.459 10.8071 3.98266 11.0611 4.74449C11.1457 8.13041 11.315 16.0704 11.315 20.7429C11.315 25.4155 7.92911 25.9065 6.23615 25.5679C2.86829 24.418 3.69672 20.7429 4.96644 19.7272C5.55897 19.3039 6.4901 18.4067 5.47433 18.2035C1.91912 17.4417 -3.15975 25.3139 5.22038 27.3455C11.9245 28.9707 14.2777 23.4517 14.6163 20.489C14.6163 15.4101 14.7687 5.04922 15.3781 4.23661C16.14 3.22083 17.1557 3.47478 18.6794 3.47478C19.8983 3.47478 20.203 4.65984 20.203 5.25238V17.4417C20.203 21.5048 19.018 22.8591 18.4254 23.0284L18.6794 23.5363H25.2819L25.7898 22.5205C23.7583 22.7237 23.0811 20.9122 22.9964 19.9811V6.77604C22.9964 4.13503 23.6736 3.47478 24.0122 3.47478H25.7898C28.0245 3.47478 28.7525 5.84491 28.8371 7.02998L30.1068 6.5221V1.18928L29.599 0.681396C29.3958 1.29086 26.9749 1.61252 25.7898 1.69717Z" fill="var(--text-color)" />
          </svg>
        </Link>
        <ul className='flex gap-4'>
          <li>
            <Link href='/blog' className=''>Blog</Link>
          </li>
          {/*<li>
            <Link href='/archive' className=''>Archive</Link>
          </li>*/}
          {/*<li>
            <Link href='/creatives' className=''>Creatives</Link>
          </li>*/}
        </ul>
      </div>
      <div className='flex items-center gap-5'>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

