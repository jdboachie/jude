import Link from 'next/link'
import { formatDate, getBlogPosts } from '../writing/utils'

export async function BlogPosts() {
  const allBlogs = getBlogPosts()

  return (
    <div className='hover:text-neutral-400 transition-colors duration-300 dark:text-neutral-200 dark:hover:text-neutral-600 grid '>
      {allBlogs
        .sort((a: { metadata: { publishedAt: string | number | Date } }, b: { metadata: { publishedAt: string | number | Date } }) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col p-2 hover:text-neutral-900 dark:hover:text-neutral-100"
            href={`/writing/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="truncate w-[120px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
