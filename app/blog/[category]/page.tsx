import CategoryRecents from "@/app/components/blogs/categoryRecents";
import TopCategories from "@/app/components/blogs/topCategories";
import { Spacer } from "@/app/components/spacer";
import { getBlogPosts } from "../utils";
import NotFound from "@/app/not-found";

export async function generateStaticParams() {
  let posts = getBlogPosts()

  const uniqueCategories = Array.from(new Set(posts.map((post) => post.metadata.category)))
  return uniqueCategories.map((category) => ({ category: String(category) }))
}

export function generateMetadata({ params }: { params: { category: string } }) {

  let category = params.category
  return {
    title: `Blog - ${category.toLocaleUpperCase()}`,
    description: `All articles regarding ${category}`,
  }
}

export default function Page({ params }: { params: { category: string } }) {
  console.log(getBlogPosts())
  const recents = getBlogPosts().filter((blog) => blog.metadata.category.includes(params.category));
  console.log(recents)

  if (recents.length === 0) {
    return NotFound()
  }

  return <div className='min-h-[calc(100vh-245.5px)]  mx-auto'>
    <Spacer />
    <div className='flex md:flex-row flex-col-reverse gap-5'>
      <CategoryRecents category={decodeURIComponent(params.category)} />
      <div className='flex-[0.4]'>
        <TopCategories />
      </div>
    </div>
  </div>

}

