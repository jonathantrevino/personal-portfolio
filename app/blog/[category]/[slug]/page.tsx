import React from 'react'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
import { CustomMDX } from '@/app/blog/mdx'
import { Spacer } from '@/app/components/spacer'
import NotFound from '@/app/not-found'
import { baseUrl } from '@/app/sitemap'
import { Metadata } from 'next'

export async function generateStaticParams() {
  let posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string, category: string } }): Metadata {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) { return {} }

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;

  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    creator: 'Jonathan Trevino',
    authors: [{ name: 'Jonathan Trevino' }],
    category: 'technology',
    openGraph: {
      title,
      description,
      publishedTime,
      type: 'article',
      url: `${baseUrl}/blog/${post.metadata.category[0]}/${post.slug}`,
      images: [
        { url: ogImage }
      ]
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [ogImage],
    }
  }
}

const page = ({ params }: { params: { category: string, slug: string } }) => {
  console.log(params)
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) { return NotFound() }
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
