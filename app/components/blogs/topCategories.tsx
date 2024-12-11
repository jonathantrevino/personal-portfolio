import { getCategories } from '@/app/blogs/utils';
import { topCategories } from '@/app/constants/categories'
import Link from 'next/link';
import React from 'react'

const TopCategories = () => {
  const categories = getCategories();
  console.log(categories)
  return (
    <div className='space-y-2'>
      <h2>Top Categories</h2>
      <div className='flex flex-wrap sm:grid  grid-cols-2 lg:grid-cols-3 gap-3'>
        {categories.map((category, index) =>
          <Link key={index} className='col-span-1 p-2 text-center bg-[color:var(--container-color)] rounded-md hover:scale-[1.01] transition-all' role='button' href={`/blogs/category/${category}`}>{category}</Link>
        )}
      </div>
    </div>
  )
}

export default TopCategories
