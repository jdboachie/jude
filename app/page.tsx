import { BlogPosts } from 'app/components/posts'
import { cx } from 'lib/utils'
import { serif } from './fonts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl text-neutral-800 dark:text-neutral-400 font-medium tracking-tighter">
        Jude Boachie
      </h1>
      <p className={cx(serif.className, 'italic leading-loose py-2 text-neutral-700 dark:text-neutral-400')}>Bio</p>
      <p className="mb-4">
        {`Engineer at Soko Aerial. Mastering all manner of craft. Computer Engineering @KNUST.`}
      </p>
      <div className="my-8">
        <p className={cx(serif.className, 'italic leading-loose py-2 text-neutral-700 dark:text-neutral-400')}>Writing</p>
        <BlogPosts />
      </div>
    </section>
  )
}
