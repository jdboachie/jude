import { ArrowUpLeftIcon } from '@/app/icons/arrow-up-left'
import Link from 'next/link'
import styles from './layout.module.css'
import { BlogPosts } from '@/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog - its why I wrote it',
}

export default function Page() {
  return (
    <>
      <aside className={styles.aside}><Link href={'/'}><ArrowUpLeftIcon />Home</Link></aside>
      <main>
        <h1>Writing</h1>
        <BlogPosts />
      </main>
    </>
  )
}