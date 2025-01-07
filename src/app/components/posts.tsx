import Link from 'next/link'
import styles from './posts.module.css'
import { formatDate, getBlogPosts } from '../writing/utils'

export async function BlogPosts() {
  const allBlogs = getBlogPosts()

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
