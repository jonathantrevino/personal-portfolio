import { getBlogPosts } from '@/app/blogs/utils'
import Link from 'next/link';
import React from 'react'
import BlogPreview from './blogPreview';

const Recents = () => {
  const recents = getBlogPosts();
  return (
    <div className='flex-[0.6] space-y-8'>
      <h1 className='title'>Recently Published</h1>
      <div className='space-y-8'>
        {recents.sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          } else {
            return 1
          }

        }).map((blog) =>
          <BlogPreview key={blog.slug} blog={blog} />
        )}
      </div>
    </div>
  )
}

export default Recents
