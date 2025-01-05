import './styles.css'
import { BlogPosts } from "../components/posts"
import { ArrowUpLeft } from '../icons/arrow-up-left'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog - its why I wrote it',
}

export default function Page() {
  return (
    <section>
      <aside><ArrowUpLeft /><Link href={'/'}>Index</Link></aside>
      <main>
        <h1>Writing</h1>
        <BlogPosts />
      </main>
    </section>
  )
}
