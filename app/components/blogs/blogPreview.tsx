import { formatDate } from '@/app/blog/utils'
import Link from 'next/link'
import React from 'react'

const BlogPreview = ({ blog }: any) => {
  return (
    <article key={blog.slug} className=''>
      <Link href={`/blog/${blog.metadata.category}/${blog.slug}`} className='space-y-3'>
        <h3 className='font-bold'>{blog.metadata.title}</h3>
        <p className='leading-relaxed'>{blog.metadata.summary}</p>
        <p className='not-important'>{formatDate(blog.metadata.publishedAt)}</p>
      </Link>
    </article>)
}

export default BlogPreview
