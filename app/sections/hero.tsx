import React from 'react'
import { Socials } from '../components/socials'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className='space-y-[17px]'>
      <div className='space-y-[7px]'>
        <h1>Jonathan Trevino</h1>
        <h2>Software engineer in web development</h2>
      </div>
      <div className='max-w-[544px] text-less-important'>
        <span className='text-[color:#F15B22] font-medium'>UTSA</span>{" "}
        Graduate, 2+ years experience developing websites that solve real problems, currently building
        <Link href='https://www.webportfolios.dev' className='inline-flex items-center align-middle ml-[5px] py-[1px] px-1 bg-[color:var(--container-color)] rounded-md border border-[color:var(--skill-card)]'>
          <svg className='mr-1' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6061 19.4445C15.4874 19.4445 19.4444 15.4874 19.4444 10.6061C19.4444 5.72478 15.4874 1.7677 10.6061 1.7677C5.72475 1.7677 1.76767 5.72478 1.76767 10.6061C1.76767 15.4874 5.72475 19.4445 10.6061 19.4445Z" stroke="var(--text-color)" strokeWidth="1.76768" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.6061 1.7677C8.33657 4.15066 7.07071 7.31532 7.07071 10.6061C7.07071 13.8968 8.33657 17.0615 10.6061 19.4445C12.8756 17.0615 14.1414 13.8968 14.1414 10.6061C14.1414 7.31532 12.8756 4.15066 10.6061 1.7677Z" stroke="var(--text-color)" strokeWidth="1.76768" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.76767 10.6061H19.4444" stroke="var(--text-color)" strokeWidth="1.76768" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          webportfolios
          <span className='font-medium text-[color:var(--cta)]'>.dev</span>
        </Link>
      </div>
      <Socials />
    </section>
  )
}

