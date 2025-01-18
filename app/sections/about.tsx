import Image from 'next/image'
import React from 'react'
import { AboutImages } from '../components/aboutImages'
import Link from 'next/link'

export const About = () => {
  return (
    <div className='flex gap-[17px] flex-col-reverse xl:flex-row'>
      <div className='space-y-5 mx-auto'>
        <div>
          <span className='flex gap-2 items-center'>
            <svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.75 8L44.9167 12L36.75 16" stroke="var(--text-color)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.08333 12H44.9167" stroke="var(--text-color)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className='text-[18px] font-light'>Hello Again</h3>
          </span>
          <h2 className='text-[23px] font-bold'>I'm Jonathan Trevino</h2>
        </div>
        <div className='space-y-[23px] leading-7'>
          <p>I specialize in web development and enjoy leveraging  AWS to design cost effective and scalable cloud solutions.</p>
          <p>When I’m not coding, I'm usually re-arranging my room, tweaking my nvim configuration, or building more Gundam models to add to my collection-currently at Master Grade level.</p>
          <div>Right now, I'm focused on growing
            <Link href='https://www.webportfolios.dev' className='inline-flex items-center align-middle ml-[5px] py-[1px] px-1 bg-[color:var(--container-color)] rounded-md border border-[color:var(--skill-card)]'>
              <svg className='mr-1' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6061 19.4445C15.4874 19.4445 19.4444 15.4874 19.4444 10.6061C19.4444 5.72478 15.4874 1.7677 10.6061 1.7677C5.72475 1.7677 1.76767 5.72478 1.76767 10.6061C1.76767 15.4874 5.72475 19.4445 10.6061 19.4445Z" stroke="var(--text-color)" strokeWidth="1.76768" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.6061 1.7677C8.33657 4.15066 7.07071 7.31532 7.07071 10.6061C7.07071 13.8968 8.33657 17.0615 10.6061 19.4445C12.8756 17.0615 14.1414 13.8968 14.1414 10.6061C14.1414 7.31532 12.8756 4.15066 10.6061 1.7677Z" stroke="var(--text-color)" strokeWidth="1.76768" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.76767 10.6061H19.4444" stroke="var(--text-color)" strokeWidth="1.76768" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              webportfolios
              <span className='font-medium text-[color:var(--cta)]'>.dev</span>
            </Link>{" "}
            while actively searching for job opportunities. I'm actively sharing my journey on X, building in public, growing a community of developers, and helping them craft standout portfolios.

          </div>
        </div>
      </div>
      <div className='relative h-[300px] mx-auto w-full'>
        <AboutImages />
      </div>
    </div >
  )
}

