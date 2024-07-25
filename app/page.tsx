import { cx } from 'lib/utils'
import { serif } from './fonts'
import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'


export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl text-neutral-800 dark:text-neutral-400 font-normal tracking-">
        Jude Boachie
      </h1>
      <p className={cx(serif.className, 'italic leading-loose pt-2 text-neutral-700 dark:text-neutral-400')}>Bio</p>
      <p className="mb-4">
        Engineer at <Link className='underline underline-offset-2 decoration-neutral-500/50 hover:decoration-neutral-500' href={'https://sokoaerial.com'}>Soko Aerial</Link>. Mastering all manner of craft. Computer Engineering @KNUST.
      </p>
      <div className="my-8">
        <p className={cx(serif.className, 'italic leading-loose pt-2 text-neutral-700 dark:text-neutral-400')}>Writing</p>
        <BlogPosts />
      </div>
    </section>
  )
}
