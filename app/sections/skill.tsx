import React from 'react'
import { skills } from '../constants/project'
import Image from 'next/image'

export const Skill = () => {
  return (
    <section>
      <h2 className='title'>Skills</h2>
      <div className="relative flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-[95px] h-[95px] aspect-square group relative bg-base-200 hover:scale-[1.05] transition-all"
          >
            <Image
              className="rounded-md transition-all ease-in-out group-hover:scale-[1.05] group-hover:z-10"
              src={skill.image_url}
              alt={skill.title}
              fill
            />
            <div className='w-full h-[85px] relative sm:h-[95px] flex justify-center'>
              <div className="group-hover:scale-100 scale-50 group-hover:opacity-100 group-hover:bg-[color:var(--skill-image)] rounded-md px-2 opacity-0 absolute bottom-2 block shadow-lg group-hover:z-20 text-xs md:text-sm  transition-all">
                <div className='flex jusitfy-center text-center w-fit'>
                  {skill.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}    </section>
  )
}

