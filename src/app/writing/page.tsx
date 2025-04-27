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
  // {
  //   title: 'Inspired by',
  //   description: 'Why you should copy people',
  //   date: new Date('June 1, 2025'),
  //   link: 'inspired-by'
  // },
  // {
  //   title: 'Focus',
  //   description: 'Becoming a master of one',
  //   date: new Date('July 1, 2025'),
  //   link: 'focus'
  // },
]

function Writing() {
  // Group posts by year
  const postsByYear = posts.reduce<Record<number, Post[]>>((acc, post) => {
    const year = post.date.getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  // Sort years descending
  const sortedYears = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      <BackLink link='/' text='Index' />
      <Header
        title='Writing'
        desc='Infrequent thoughts on software development'
      />
      <section className='grid sm:mt-8 mt-4 mb-44 divide-y border-t border-muted hover:text-muted-foreground/70'>
        {sortedYears.map((year) => (
          <div key={year} className="grid grid-cols-[auto,1fr]">
            <div className="text-muted-foreground font-medium w-[3em] sm:w-[7em] pt-4 text-sm">{year}</div>
            <div className="flex flex-col divide-y">
              {[...postsByYear[year]]
                .sort((a, b) => (b.date.getTime()) - (a.date.getTime()))
                .map((post, index) => (
                <Link
                  prefetch={true}
                  href={`/writing/${post.link}`}
                  key={index}
                  className="no-underline py-3 hover:no-underline hover:text-primary flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <p className="font-medium">{post.title}</p>
                    {/* {post.description && (
                      <p className="text-muted-foreground text-sm">{post.description}</p>
                    )} */}
                  </div>
                  <time className="text-muted-foreground text-sm min-w-[60px] text-right">
                    {post.date.toLocaleDateString('en-US', {
                      month: '2-digit',
                      day: '2-digit',
                    })}
                  </time>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Writing;
