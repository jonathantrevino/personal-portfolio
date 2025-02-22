'use client'
import Image from 'next/image'
import React from 'react'
import { ProjectCardType } from '../constants/project'
import Link from 'next/link'
import { ExternalLink, MoveRight } from 'lucide-react'

export const ProjectCard = ({ title, description, image_url, skills, live, users, slug }: ProjectCardType) => {
  return (
    <div className='space-y-4'>
      <div className='bg-[color:var(--container-color)] border-[color:var(--skill-card)] flex justify-center border overflow-hidden rounded-t-md'>
        <Image src={image_url} width={669} height={47} className='shadow-md shadow-gray-200 project-image' alt='screenshot of homepage for webportfolios.dev' />
      </div>
      <div className='flex items-start justify-between gap-8 flex-wrap gap-y-2'>
        <div className='space-y-1'>
          <h3 className='flex gap-1 items-center text-xl font-medium'>
            <svg className='mr-1' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6061 19.4445C15.4874 19.4445 19.4444 15.4874 19.4444 10.6061C19.4444 5.72478 15.4874 1.7677 10.6061 1.7677C5.72475 1.7677 1.76767 5.72478 1.76767 10.6061C1.76767 15.4874 5.72475 19.4445 10.6061 19.4445Z" stroke="var(--text-color)" strokeWidth="1.76768" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.6061 1.7677C8.33657 4.15066 7.07071 7.31532 7.07071 10.6061C7.07071 13.8968 8.33657 17.0615 10.6061 19.4445C12.8756 17.0615 14.1414 13.8968 14.1414 10.6061C14.1414 7.31532 12.8756 4.15066 10.6061 1.7677Z" stroke="var(--text-color)" strokeWidth="1.76768" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1.76767 10.6061H19.4444" stroke="var(--text-color)" strokeWidth="1.76768" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {title}
          </h3>
          <div className='flex gap-1 text-sm flex-wrap'> Directory of developer portfolios. Built with {skills.map((skill, index) => <div className='' key={skill}><span className='font-bold'>{skill}</span>{index === skills.length - 1 ? '' : ','}</div>)}</div>
        </div>
        <div className='flex justify-end items-end gap-5'>
          <div className='flex gap-2 pt-2'>
            <Link href={live ? live : '/'} role='button' className='flex gap-2 items-center w-fit text-[color:var(--text-less-important)] font-extralight'><ExternalLink size={18} />Visit Website</Link>
          </div>
          <Link href={slug ? `/projects/` + slug : '/'} role='button' className='flex gap-2 items-center w-fit'><MoveRight size={18} />Read More</Link>
        </div>

      </div>
    </div >
  )
}

