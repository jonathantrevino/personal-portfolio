import CategoryRecents from "@/app/components/blogs/categoryRecents";
import TopCategories from "@/app/components/blogs/topCategories";
import { Spacer } from "@/app/components/spacer";

export default function Page({ params }: { params: { category: string } }) {
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

