import { LoaderIcon } from 'lucide-react'
import React from 'react'

const Update = ({ title, message }: { title: string, message: string }) => {
  return (
    <div className='my-12 relative bg-[color:var(--blue-container-color)] border border-[color:var(--blue-border-color)] px-[var(--pad-x)] py-[var(--pad-y)] rounded-md space-y-2'>
      <h2 className='!m-0 text-2xl rounded-md w-fit flex items-center gap-2'><LoaderIcon className='animate-slowRotate' />{title}</h2>
      <div className=''>
        <p className='!m-0'>{message}</p>
      </div>
    </div>
  )
}

export default Update 
