import Link from "next/link";

export default function NotFound() {
  return (
    <div className='h-[calc(100vh-245.5px)] min-h-[400px] flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='leading-tight'>404 - Page Not Found</h1>
        <p className='leading-loose'>The page you are looking for does not exist.</p>
        <Link href='/' className='underline text-sm text-[color:var(--less-important)]'>Go Home</Link>
      </div>
    </div>
  )
}
