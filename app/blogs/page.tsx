import React from 'react'
import Recents from '../components/blogs/recents'
import { Spacer } from '../components/spacer'
import TopCategories from '../components/blogs/topCategories'

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
