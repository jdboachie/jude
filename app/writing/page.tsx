import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className='flex flex-col gap-8 pb-8'>
      <h1 className="font-medium text-lg mb-8 tracking-tighter">Writing</h1>
      <BlogPosts />
    </section>
  )
}
