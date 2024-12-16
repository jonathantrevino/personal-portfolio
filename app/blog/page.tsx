import React from 'react'
import Recents from '../components/blogs/recents'
import { Spacer } from '../components/spacer'
import TopCategories from '../components/blogs/topCategories'

export function generateMetadata() {
  return {
    title: 'Blog',
    description: 'Personal blog where I share my insights, experiences, and tips on web development, building projects, and my journey as a developer.',
  }
}

const page = () => {
  return (
    <div className='min-h-[calc(100vh-245.5px)]  mx-auto'>
      <Spacer />
      <div className='flex md:flex-row flex-col-reverse gap-5'>
        <Recents />
        <div className='flex-[0.4]'>
          <TopCategories />
        </div>
      </div>
    </div>
  )
}

export default page
