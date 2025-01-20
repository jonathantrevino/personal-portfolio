'use client'
import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from "motion/react"
import { ProjectCardType } from '../constants/project';
import Link from 'next/link';
import { Flame, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

function useParallax(value: any, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}


export const ProjectCard = ({ title, description, image_url, skills, live, users, slug }: ProjectCardType) => {
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 5)
  const router = useRouter()


  // Handle button click and trigger animation
  const handleClick = () => {
    router.push(`/projects/${slug}`)
  };

  return (
    <motion.div
      ref={ref}
      whileHover={{}}
      whileTap={{ scale: 1.02 }}
      initial={'initial'}
      animate={isClicked ? 'clicked' : ''}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      onClick={handleClick}
      className='md:aspect-video p-[30px] rounded-md relative project-card overflow-hidden transition-all space-y-5 border border-[color:var(--skill-card)] group cursor-pointer'
    >

      <div className='flex lg:flex-row flex-col lg:justify-between gap-5 gap-y-4'>
        <span>
          <h3 className='font-bold text-[23px]'>{title}</h3>
          <p className=''>{description}</p>
        </span>

        <div className='flex gap-4 flex-wrap'>
          <div className='rounded-lg'>
            <h4 className='text-sm font-light'>Total Users</h4>
            <span className='flex gap-2 items-center'>
              <p className='text-2xl font-extrabold'>110+ Users</p>
              <Star fill='orange' stroke='orange' />
            </span>
          </div>
          <div className='rounded-lg'>
            <h4 className='text-sm font-light'>Monthly Visitors</h4>
            <span className='flex gap-2 items-center'>
              <p className='text-2xl font-extrabold'>9,000</p>
              <Flame fill='red' stroke='orange' />
            </span>
          </div>
        </div>

      </div>

      <div className='flex gap-3 flex-wrap'>{skills && skills.map((skill) => <div key={skill} className='skill-card px-2 py-1 rounded-md'>{skill}</div>)}</div>
      <div className='justify-center items-end flex'>
        <div className='lg:relative lg:-bottom-32 md:absolute md:-bottom-[320px] -bottom-24 relative transition-all group-hover:rotate-[-6deg]  group-hover:translate-x-32 duration-300'>
          <motion.img style={{ y }} className='px-4' src={image_url} width={669} height={476} alt='webportfolios project preview' />
        </div>
      </div>
    </motion.div >
  )
}

