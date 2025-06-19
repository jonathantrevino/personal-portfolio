import React from 'react'
import { skills } from '../constants/project'
import Image from 'next/image'

export const Skill = () => {
  return (
    <section className='space-y-[24px]' id='tools'>
      <div className='space-y-[0px]'>
        <h2 className='title'>My Tools</h2>
        <p className='text-[color:var(--text-not-important)]'>My go-to stack for building things that scale.</p>
      </div>
      <div className="relative grid grid-cols-6 sm:grid-cols-7 lg:grid-cols-10 gap-[20px]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full h-full aspect-square group relative hover:scale-[1.05] transition-all z-[1]"
          >
            <Image
              className="rounded-md transition-all ease-in-out group-hover:scale-[1.05] group-hover:z-10 select-none"
              src={skill.image_url}
              alt={skill.title}
              fill
              draggable={false}
            />
            <div className='w-full  relative h-full flex justify-center z-[10]'>
              <div className="group-hover:scale-100 scale-50 group-hover:opacity-100 group-hover:bg-[color:var(--bg-container)] rounded-md px-2 opacity-0 absolute bottom-1 block shadow-lg group-hover:z-20 text-xs md:text-sm  transition-all">
                <div className='flex jusitfy-center text-center w-fit z-[10]'>
                  {skill.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </section>)
}

