import React from 'react'
import { projects } from '@/app/constants/project'
import { Spacer } from '@/app/components/spacer'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export async function generateStaticParams() {
  return projects.map((item) => ({
    slug: item.slug,
  }))
}

const Page: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const { slug } = params

  const project = projects.find((project) => project.slug === slug)

  if (!slug || !project) {

    return <div>Project Not Found</div>
  }
  console.log(slug)
  return (
    <div>
      <Spacer />
      <main className='space-y-7'>
        <section className='space-y-3'>
          <div className='flex justify-between sm:flex-row flex-col gap-3'>
            <span>
              <h1 className='title'>{project.title}</h1>
              <h2 className='description'>{project.description}</h2>
            </span>
            <span className='flex gap-2 h-fit'>{project.live && <Link className='group overflow-visible hover:scale-[1.07] hover:rotate-3 transition-all ease-out' href={project.live}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link">
                <path className='' d="M15 3h6v6" /><path className='' d="M10 14 21 3" />
                <path className='' d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </Link>}</span>

          </div>
          <div className='flex gap-3 flex-wrap'>{project.skills && project.skills.map((skill) => <div className='bg-gray-200 px-2 py-1 rounded-md'>{skill}</div>)}</div>
        </section>
        <Image className='w-full border border-gray-200' src={project.image_url} width={669} height={476} alt='webportfolios project preview' />
        <section className='space-y-5'>
          <div className='space-y-3'>
            <h3 className='text-xl'>Overview</h3>
            <p className='leading-relaxed'>{project.overview}</p>
          </div>
          <div className='space-y-3'>
            <h3 className='text-xl'>Features</h3>
            <ul className='leading-relaxed space-y-2 list-disc ml-4'>{project.features.map((feature) => <li>{feature}</li>)}</ul>
          </div>
          <div className='space-y-3'>
            <h3 className='text-xl'>Challenges</h3>
            <ul className='leading-relaxed space-y-2 list-disc ml-4'>{project.obstacles.map((obstacle) => <li>{obstacle}</li>)}</ul>
          </div>
          <div className='space-y-3'>
            <h3 className='text-xl'>Results</h3>
            <p className='leading-relaxed'>{project.results}</p>
          </div>
        </section>
        <Spacer />
      </main>
    </div>
  )
}

export default Page