'use client'
import React from 'react'
import { ProjectCardType } from '../constants/project'
import Link from 'next/link'
import { ExternalLink, MoveRight } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'

export const ProjectCard = ({ title, description, image_url, skills, live, users, slug }: ProjectCardType) => {
  return (
    <div className='grid grid-cols-10 gap-[20px]'>
      <div className='col-span-4 bg-[color:var(--bg-container)] p-8 pb-0 min-h-[244px]'>
        <Image src={image_url[0]} width={294} height={340} alt='' />
      </div>
      <div className='col-span-6 space-y-[65px]'>
        <div className='space-y-[24px]'>
          <span className='space-y-[14px]'>
            {title}
            {description}
          </span>
          <div className='flex gap-2 flex-wrap'>
            {skills.map((skill, index) =>
              <div key={index} className='text-[color:var(--text-title)] px-2 py-1 bg-[color:var(--bg-container)] border border-[color:var(--bg-stroke)] w-fit rounded-lg text-sm'>{skill}</div>
            )}
          </div>
        </div>
        <div className='flex gap-[24px] items-center text-[color:var(--text-base)] justify-end'>
          {live &&
            <Link href={live} className='flex gap-2 hover:text-[color:var(--text-title)] group' target='_blank' rel='noopener noreferrer'>
              <ExternalLink className='group-hover:scale-[1.05] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all ease-in-out' />
              View Website
            </Link>
          }
          <Link href={'/projects/' + slug} className='flex gap-2 hover:text-[color:var(--text-title)] group'>
            <MoveRight className='group-hover:scale-[1.05] group-hover:translate-x-[2px] transition-all ease-in-out' />
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

