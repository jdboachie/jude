import Link from 'next/link'
import styles from './posts.module.css'
import { formatDate } from '../app/writing/utils'

export async function BlogPosts() {
  const allBlogs = [
    {
      slug: 'focus',
      metadata: {
        publishedAt: '2025-01-14',
        title: 'Focus'
      }
    },
    // {
    //   slug: 'my-new-site',
    //   metadata: {
    //     publishedAt: '2025-01-24',
    //     title: 'My New Site'
    //   }
    // },
  ]

  return (
    <div className={styles.blogpostlist}>
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
            className={styles.blogpost}
            href={`/writing/${post.slug}`}
          >
            <p className={styles.posttitle}>
              {post.metadata.title}
            </p>
            <div className='hr' />
            <time className={styles.postdate}>
              {formatDate(post.metadata.publishedAt, false)}
            </time>
          </Link>
        ))}
    </div>
  )
}
