import React from 'react'
import { projects } from '@/app/constants/project'
import { Spacer } from '@/app/components/spacer'
import Image from 'next/image'
import Link from 'next/link'
import NotFound from '@/app/not-found'
import { ExternalLink, MoveLeft, MoveRight } from 'lucide-react'

// or Dynamic metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug)

  return {
    title: `Jonathan Trevino ${project ? '- ' + project.slug : '- 404'}`,
    description: project?.description,
  }

}

export async function generateStaticParams() {
  return projects.map((item) => ({
    slug: item.slug,
  }))
}

const Page: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const { slug } = params

  const project = projects.find((project) => project.slug === slug)

  if (!slug || !project) {
    return NotFound()
  }
  return (
    <main className='space-y-7'>
      <section className='space-y-3'>
        <div className='flex justify-between sm:flex-row flex-col-reverse gap-3'>
          <span>
            <h1 className='title'>{project.title}</h1>
            <p className=''>{project.description}</p>
          </span>
          <div className='flex flex-row-reverse gap-[24px] items-center text-[color:var(--text-base)] justify-end'>
            {project.live &&
              <Link href={project.live} className='flex gap-2 hover:text-[color:var(--text-title)] group' target='_blank' rel='noopener noreferrer'>
                <ExternalLink className='group-hover:scale-[1.05] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all ease-in-out' />
                View Website
              </Link>
            }
            <Link href={'/'} className='flex gap-2 hover:text-[color:var(--text-title)] group'>
              <MoveLeft className='group-hover:scale-[1.05] group-hover:-translate-x-[2px] transition-all ease-in-out' />
              Go Back
            </Link>
          </div>

        </div>
        <div className='flex gap-3 flex-wrap'>{project.skills && project.skills.map((skill) => <div key={skill} className='bg-[color:var(--bg-container)] border border-[color:var(--bg-stroke)] text-[color:var(--text-title)] px-2 py-1 rounded-md text-sm'>{skill}</div>)}</div>
      </section>
      <div className='p-8 pb-0 min-h-[244px] bg-[color:var(--bg-container)]'>
        <Image className='w-full' src={project.image_url[0]} width={669} height={476} alt='webportfolios project preview' />
      </div>
      <section className='space-y-5'>
        <div className='space-y-3'>
          <h3 className='text-[25px] font-semibold text-[color:var(--text-title)]'>Overview</h3>
          <p className='leading-relaxed  text-[color:var(--text-base)]'>{project.overview}</p>
        </div>
        <div className='space-y-3'>
          <h3 className='text-[25px] font-semibold text-[color:var(--text-title)]'>Features</h3>
          <ul className='leading-relaxed text-[color:var(--text-base)] space-y-2 list-disc ml-4'>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </div>
        <div className='space-y-3'>
          <h3 className='text-[25px] font-semibold text-[color:var(--text-title)]'>Challenges</h3>
          <ul className='leading-relaxed text-[color:var(--text-base)] space-y-2 list-disc ml-4'>{project.obstacles.map((obstacle) => <li key={obstacle}>{obstacle}</li>)}</ul>
        </div>
        <div className='space-y-3'>
          <h3 className='text-[25px] font-semibold text-[color:var(--text-title)]'>Results</h3>
          <p className='leading-relaxed text-[color:var(--text-base)]'>{project.results}</p>
        </div>
      </section>
      <Spacer />
    </main>
  )
}

export default Page
