import Link from 'next/link';
import Header from '@/components/header';
import BackLink from '@/components/backlink';

interface Post {
  title: string
  description: string
  date: Date
  link: string
}

const posts: Post[] = [
  {
    title: "AI's frontend",
    description: 'Why LLMs are so popular',
    date: new Date('April 16, 2025'),
    link: 'ai-frontend'
  },
  {
    title: 'Inspired by',
    description: 'Why you should copy people',
    date: new Date('April 1, 2025'),
    link: 'inspired-by'
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
      <section className='grid sm:mt-8 mt-4 mb-36 divide-y border-t'>
      {[...posts]
          .sort((a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0))
          .map((post, index) => (
          <Link prefetch={true} href={`/writing/${post.link}`} key={index} className='no-underline fixthis!!!-link sm:col-span-3 flex flex-col gap-8 min-w-0 h-fit py-4'>
            <div className="flex items-center gap-6">
              <div className='flex items-center w-full gap-2'>
                <p className='font-medium'>{post.title}</p>
                {post.description && <p className="max-sm:hidden text-muted-foreground font-normal">{post.description}</p>}
              </div>
              <time className="text-muted-foreground text-right sm:w-40 w-36 text-sm">{post.date.toLocaleString('en-US', { month: 'long' })} {post.date.getUTCFullYear()}</time>
            </div>
          </Link>
        ))}
      </section>
    </>
  )
}

export default Writing