import React from 'react'
import { Socials } from '../components/socials'

export const Hero = () => {
  return (
    <section className='space-y-[17px]'>
      <div className='space-y-[7px]'>
        <h1>Jonathan Trevino</h1>
        <h2>Software engineer in web development</h2>
      </div>
      <div className='max-w-[544px] text-less-important'>UTSA Graduate, 2+ years experience developing websites that solve real problems, currently building webportfolios.dev</div>
      <Socials />
    </section>
  )
}

