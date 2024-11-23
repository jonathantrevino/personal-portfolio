'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from "motion/react"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ProjectCardType } from '../constants/project';
import Link from 'next/link';
import { ExternalLink, MoveRight } from 'lucide-react';

function useParallax(value: any, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}


export const ProjectCard = ({ title, description, image_url, skills, live, users, slug }: ProjectCardType) => {
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 35)


  // Handle button click and trigger animation
  const handleClick = () => {
    setIsClicked(!isClicked);
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
      className='md:aspect-video p-[30px] rounded-md relative project-card overflow-hidden transition-all space-y-5'
    >
      <div className='flex justify-between overflow-visible'>
        <span>
          <span className='text-gray-500 text-sm not-important'>{users}+ Users</span>
          <h3 className='font-bold text-[23px]'>{title}</h3>
          <p className=''>{description}</p>
        </span>
        <span className='flex gap-2 h-fit overflow-visible'>{live &&
          <Link className='group overflow-visible hover:scale-[1.07] hover:rotate-3 transition-all ease-out' href={live}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
              <path className='' d="M15 3h6v6" /><path className='' d="M10 14 21 3" />
              <path className='' d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </Link>}</span>
      </div>
      <div className='flex justify-between md:flex-row flex-col gap-5 flex-wrap'>
        <div className='flex gap-3 flex-wrap'>{skills && skills.map((skill) => <div key={skill} className='skill-card px-2 py-1 rounded-md'>{skill}</div>)}</div>
        <Link className='flex gap-2 self-end group' href={`/projects/${slug}`}>Read More<MoveRight className='group-hover:translate-x-1 transition-all' /></Link>
      </div>
      <div className='justify-center items-end md:flex hidden'>
        <div className='lg:relative lg:-bottom-24 absolute -bottom-80'>
          <motion.img style={{ y }} className='px-4' src={image_url} width={669} height={476} alt='webportfolios project preview' />
        </div>
      </div>
    </motion.div>
  )
}

