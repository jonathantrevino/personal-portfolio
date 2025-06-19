import React from 'react'
import { ProjectCard } from '../components/projectCard'
import { project_card } from '../constants/project'
import Link from 'next/link'
import Image from 'next/image'



export const Project = () => {
  return (
    <section className='space-y-[24px]' id='work'>
      <div className='space-y-[0px]'>
        <h2 className='title'>My Work</h2>
        <p className='text-[color:var(--text-not-important)]'>Selection of real-world projects I’ve built.</p>
      </div>
      <div className=''>
        <ProjectCard
          title={
            <Link href='/' className='flex gap-[10px] items-center w-fit'>
              <span className='block relative w-fit'>
                <Image src='/web-logo.svg' width={28} height={28} alt='logo' />
                <Image src='/web-cursor.svg' className='absolute right-1 bottom-0' width={8} height={8} alt='logo' />
              </span>
              <p className='text-sm font-semibold'>webportfolios<span className=''>.dev</span></p>
            </Link>
          }
          description={
            <p className='text-sm text-[color:var(--text-not-important)]'>A platform where developers can browse real-world portfolios and upload their own to gain exposure—<span className='text-[color:var(--text-title)]'>used by hundreds of developers</span> and featuring automated newsletters and built-in analytics.</p>
          }
          image_url={['/webportfolios.webp']}
          skills={['Next.js', 'Tailwind', 'Typescript', 'Firebase', 'AWS']}
          live={'https://www.webportfolios.dev'}
          users={400}
          slug={'webportfolios.dev'}
        />
      </div>
    </section>
  )
}

