import React from 'react'
import { ProjectCard } from '../components/projectCard'
import { project_card } from '../constants/project'



export const Project = () => {
  return (
    <section className='space-y-[10px]'>
      <h2 className='title'>Projects</h2>
      <div className='grid grid-cols-1 :grid-cols-2 gap-5'>
        {project_card.map((details) => (
          <ProjectCard key={details.title} title={details.title} description={details.description} image_url={details.image_url} skills={details.skills} live={details.live} users={details.users} slug={details.slug} />
        ))}
      </div>
    </section>
  )
}

