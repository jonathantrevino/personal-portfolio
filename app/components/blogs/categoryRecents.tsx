import { getBlogPosts } from '@/app/blog/utils';
import React from 'react'
import BlogPreview from './blogPreview';

const CategoryRecents = ({ category }: { category: string }) => {
  const recents = getBlogPosts().filter((blog) => blog.metadata.category.includes(category));

  return (
    <div className='flex-[0.6] space-y-8'>
      <h1 className='text-[23px]'>Recently Published - {category.toLocaleUpperCase()} </h1>
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
