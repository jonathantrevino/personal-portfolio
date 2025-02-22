import React from 'react'
import { Spacer } from '../components/spacer'
import SideNav from '../components/sideNav'
import { Project } from '../sections/project'
import { Hero } from '../sections/hero'
import Recents from '../components/blogs/recents'

const page = () => {
  return (
    <div className="">
      <Spacer />
      <Recents />
    </div>
  )
}

export default page
