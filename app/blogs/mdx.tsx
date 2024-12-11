import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image';
import Link from 'next/link';
import { highlight } from 'sugar-high'

function slugify(str: string) {
  return str.toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, "-and-")
    .replace(/\-\-+/g, "-")
}

function createHeading(level: number) {
  const Heading = ({ children }: any) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor'
        })
      ],
      children
    )
  }
  Heading.displayName = `Heading${level}`
  return Heading
}

function roundedImage(props: any) {
  return <Image alt={props.alt} className='rounded-lg' {...props} />
}

function customLink(props: any) {
  let href = props.href;
  if (href.startsWith('/')) {
    return <Link href={href} {...props}>{props.children}</Link>
  }

  if (href.startsWith('#')) {
    return <a {...props}>{props.children}</a>
  }
  return <a target="_blank" rel='noopener noreferrer' {...props}>{props.children}</a>
}

function customCode({ children, ...props }: any) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: roundedImage,
  a: customLink,
  code: customCode,
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
  )
}
