import { getBlogPosts } from '@/app/blogs/utils';
import Link from 'next/link';
import React from 'react'
import BlogPreview from './blogPreview';

const CategoryRecents = ({ category }: { category: string }) => {
  const recents = getBlogPosts().filter((blog) => blog.metadata.category.includes(category));

  if (recents.length === 0) {
    return (
      <div className='flex-[0.6] space-y-8'>
        <h1 className='title'>Recently Published - <span className='italic'>Invalid Category</span></h1>
        <div className='space-y-8'>
          <p className='not-important text-center'>No articles found for this category</p>
        </div>
      </div>
    )
  }

  return (
    <div className='flex-[0.6] space-y-8'>
      <h1 className='title'>Recently Published - {category}</h1>
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

export default CategoryRecents
