import Image from 'next/image'
import React from 'react'
import { AboutImages } from '../components/aboutImages'

export const About = () => {
  return (
    <div className='flex gap-[17px] flex-col-reverse xl:flex-row'>
      <div className='space-y-5'>
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
        <div className='max-w-[565px] space-y-[13px] leading-relaxed'>
          <p>Although I enjoy taking on various roles, my current focus is web development, especially when it comes to configuring cloud services.</p>
          <p>When I’m not coding you will often find me re-arranging my room, contemplating buying another keyboard, or building another Gundam (currently at Master Grade level).</p>
          <p>Currently, I’m focused on growing webportfolios.dev, a directory for developer portfolios, while sharing my journey on X (formerly Twitter). My goal is to support as many developers as possible through the products I create.</p>

        </div>
      </div>
      <div className='relative h-[300px] xl:w-[570px]'>
        <AboutImages />
      </div>
    </div >
  )
}

