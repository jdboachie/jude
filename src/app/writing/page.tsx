import Link from 'next/link';
import Header from '@/components/header';
import BackLink from '@/components/backlink';

interface Post {
  title: string
  description: string
  date: Date
}

const posts: Post[] = [
  {
    title: 'Focus',
    description: 'Becoming a master of one',
    date: new Date('March 20, 2025')
  },
  {
    title: 'Inspired by',
    description: 'Why you should copy people',
    date: new Date('April 1, 2025')
  },
]

function Writing() {
  return (
    <>
      <BackLink link='/' text='Index' />
      <Header
        title='Writing'
        desc='Infrequent thoughts on software development'
      />
      {/* whenI'mdone */}
      <p className="text-muted-foreground text-sm">These posts are not finished! My first post will be in April 2025</p>
      <section className='grid sm:mt-8 mt-4 mb-36 divide-y border-t'>
      {[...posts]
          .sort((a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0))
          .map((post, index) => (
          <Link href={`/writing/${post.title.toLowerCase().replace(/\s+/g, '-')}`} key={index} className='no-underline sm:col-span-3 flex flex-col gap-8 min-w-0 h-fit py-4'>
            <div className="flex items-center gap-6">
              <div className='flex items-center w-full gap-2'>
                <p className='font-medium text-sm'>{post.title}</p>
                {post.description && <p className="max-sm:hidden text-muted-foreground font-normal text-sm">{post.description}</p>}
              </div>
              <time className="text-muted-foreground text-right sm:w-40 w-32 text-sm">{post.date.toLocaleString('en-US', { month: 'long' })} {post.date.getUTCFullYear()}</time>
            </div>
          </Link>
        ))}
      </section>
    </>
  )
}

export default Writing