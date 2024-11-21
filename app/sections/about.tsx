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
              <path d="M36.75 8L44.9167 12L36.75 16" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.08333 12H44.9167" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h3 className='text-[18px] font-light'>Hello Again</h3>
          </span>
          <h2 className='text-[23px] font-bold'>I'm Jonathan Trevino</h2>
        </div>
        <div className='max-w-[565px] space-y-[13px] leading-relaxed'>
          <p>I am a developer at my core who focuses on building impactful products that solve real problems.</p>
          <p>When I’m not coding you will often find me re-arranging my room, contemplating buying another keyboard, or building another Gundam (currently at Perfect Grade).</p>
          <p>At the moment I am working on growing webpotfolios.dev, a directory for developer portfolios and sharing the journey on X (Twitter?). My goal is try to help as many developers as I can.</p>
        </div>
      </div>
      <div className='relative h-[300px] xl:w-[570px]'>
        <AboutImages />
      </div>
    </div >
  )
}

