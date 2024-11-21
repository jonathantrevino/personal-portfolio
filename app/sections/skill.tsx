import React from 'react'
import { skills } from '../constants/project'
import Image from 'next/image'

export const Skill = () => {
  return (
    <section>
      <h2 className='title'>Skills</h2>
      <div className="relative flex flex-wrap sm:grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-10  gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="sm:w-full sm:h-full w-[95px] h-[95px] aspect-square group relative bg-base-200 hover:scale-[1.05] transition-all"
          >
            <Image
              className="rounded-md transition-all ease-in-out group-hover:scale-[1.05] group-hover:z-10"
              src={skill.image_url}
              alt={skill.title}
              fill
            />
            <div className="group-hover:scale-100 scale-50 group-hover:opacity-100 group-hover:bg-gray-50 rounded-md px-2 opacity-0 absolute bottom-2 right-2 block shadow-lg border border-base-300 group-hover:z-20 sm:text-sm md:text-xs lg:text-sm transition-all">
              {skill.title}
            </div>
          </div>
        ))}
      </div>{" "}    </section>
  )
}

