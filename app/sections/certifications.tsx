import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Certifications = () => {
  return (
    <section className='space-y-[24px]' id='certs'>
      <div className='space-y-[0px]'>
        <h2 className='title'>Certifications</h2>
        <p className='text-[color:var(--text-not-important)]'>Recognized credentials that validate my technical skills.</p>
      </div>
      <div className='grid grid-cols-10'>
        <div className='col-span-4 flex gap-[20px]'>
          <Link href='https://cp.certmetrics.com/amazon/en/public/verify/credential/c13732e2942048e58693ce2a4a44d527' className='hover:scale-[1.05]'>
            <Image src='/aws-solutions-architect.webp' width={160} height={160} alt='solutions architect certificate badge' />
          </Link>
          <Link href='https://cp.certmetrics.com/amazon/en/public/verify/credential/9c771bcf4178411381a1ed7938c5664f' className='hover:scale-[1.05]'>
            <Image src='/aws-cloud-practitioner.webp' width={160} height={160} alt='solutions architect certificate badge' />

          </Link>
        </div>
        <div className='col-span-6 space-y-[14px]'>
          <h2 className='text-lg text-[color:var(--text-title)]'>AWS Certifications</h2>
          <p className='text-sm text-[color:var(--text-not-important)]'>Working on projects like webportfolios.dev introduced me to <span className='text-[color:var(--text-title)]'>AWS</span>, where tools like <span className='text-[color:var(--text-title)]'>Amazon Rekognition</span> helped streamline key features. That hands-on experience sparked my interest in pursuing <span className='text-[color:var(--text-title)]'>AWS certifications</span> to deepen my understanding and continue building smarter, scalable solutions.</p>

        </div>
      </div>

    </section>
  )
}

export default Certifications
