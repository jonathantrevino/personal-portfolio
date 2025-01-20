import React from 'react'
import { projects } from '@/app/constants/project'
import { Spacer } from '@/app/components/spacer'
import Image from 'next/image'
import Link from 'next/link'
import NotFound from '@/app/not-found'
import { MoveLeft } from 'lucide-react'

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
    <div>
      <Spacer />
      <main className='space-y-7'>
        <section className='space-y-3'>
          <div className='flex justify-between sm:flex-row flex-col-reverse gap-3'>
            <span>
              <h1 className='title'>{project.title}</h1>
              <h2 className='description'>{project.description}</h2>
            </span>
            <div className='flex gap-5'>
              <div className=''>
                <Link className='flex gap-2 self-end group' href={`/`}><MoveLeft className='group-hover:-translate-x-1 transition-all' />Go Back</Link>
              </div>
              <span className='flex gap-2 h-fit'>
                {project.live &&
                  <Link className='text-[color:var(--cta)] group overflow-visible transition-all ease-out flex gap-2' href={project.live} rel='noreferrer' target='_blank'>
                    View Website
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link group-hover:scale-[1.07] group-hover:rotate-3">
                      <path className='' d="M15 3h6v6" /><path className='' d="M10 14 21 3" />
                      <path className='' d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </Link>}
              </span>
            </div>

          </div>
          <div className='flex gap-3 flex-wrap'>{project.skills && project.skills.map((skill) => <div key={skill} className='skill-card px-2 py-1 rounded-md'>{skill}</div>)}</div>
        </section>
        <Image className='w-full border border-gray-200' src={project.image_url} width={669} height={476} alt='webportfolios project preview' />
        <section className='space-y-5'>
          <div className='space-y-3'>
            <h3 className='text-xl font-semibold'>Overview</h3>
            <p className='leading-relaxed'>{project.overview}</p>
          </div>
          <div className='space-y-3'>
            <h3 className='text-xl font-semibold'>Features</h3>
            <ul className='leading-relaxed space-y-2 list-disc ml-4'>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </div>
          <div className='space-y-3'>
            <h3 className='text-xl font-semibold'>Challenges</h3>
            <ul className='leading-relaxed space-y-2 list-disc ml-4'>{project.obstacles.map((obstacle) => <li key={obstacle}>{obstacle}</li>)}</ul>
          </div>
          <div className='space-y-3'>
            <h3 className='text-xl font-semibold'>Results</h3>
            <p className='leading-relaxed'>{project.results}</p>
          </div>
        </section>
        <Spacer />
      </main>
    </div>
  )
}

export default Page
