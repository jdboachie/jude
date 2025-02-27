import Link from 'next/link';
import Header from '@/components/header';

interface Post {
  title: string
  description: string
  date: Date
}

const posts: Post[] = [
  {
    title: 'Focus',
    description: 'Becoming a master of one',
    date: new Date('3/25/2025')
  },
  {
    title: 'Inspired by',
    description: 'Why you should copy people',
    date: new Date('3/25/2025')
  },
]

function Writing() {
  return (
    <>
      <Header
        backlink='/'
        backlinktext='Index'
        title='Writing'
        desc='Infrequent thoughts on software development'
      />
      <section className='grid sm:mt-8 mt-4 mb-36 divide-y hover:text-muted-foreground'>
      <div className='sm:col-span-3 flex flex-col gap-8 min-w-0 h-fit py-4'>
        <div className="flex items-center gap-6">
          <time className="text-muted-foreground w-20 text-sm">date</time>
          <div className='flex items-center w-full gap-3'>
            <p className='text-muted-foreground text-sm'>title</p>
            {/* <p className="max-sm:hidden text-muted-foreground text-xs">description</p> */}
          </div>
        </div>
      </div>
      {[...posts]
          .sort((a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0))
          .map((post, index) => (
          <Link href={`/writing/${post.title.toLowerCase().replace(/\s+/g, '-')}`} key={index} className='hover:text-primary no-underline sm:col-span-3 flex flex-col gap-8 min-w-0 h-fit py-4'>
            <div className="flex items-center gap-6">
              <time className="text-muted-foreground w-20 text-xs">{post.date.toLocaleDateString()}</time>
              <div className='flex items-center w-full gap-3'>
                <p className='font-medium font-serif text-lg'>{post.title}</p>
                {post.description && <p className="max-sm:hidden text-sm">{post.description}</p>}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  )
}

export default Writing