import React from 'react'
import { formatDate, getBlogPosts } from '../utils'
import { CustomMDX } from '../mdx'
import { Spacer } from '@/app/components/spacer'

const page = ({ params }: { params: { slug: string } }) => {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) { return <div>Not Found</div> }
  return (
    <div>
      <Spacer />
      <article className='prose max-w-screen-md mx-auto'>
        <div className='m-0 leading-tight'>
          <h1 className='text-[33px]'>{post.metadata.title}</h1>
          <span className='text-[color:var(--not-important)]'>
            {formatDate(post.metadata.publishedAt)}
          </span>
        </div>
        <CustomMDX source={post.content} />
      </article>
      <Spacer />
    </div>
  )
}

export default page
