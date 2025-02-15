import Link from 'next/link';
import {
  ArrowBendUpLeft as ArrowBendUpLeftIcon
} from '@phosphor-icons/react/dist/ssr';

function Writing() {
  return (
    <>
      <section className='sm:col-span-3 flex flex-col xl:grid sm:grid-cols-[1fr_65ch_1fr]'>
        <aside className='max-xl:pb-8 grid items-start'>
          <Link
            href={'/'}
            className='flex items-center w-fit gap-2 text-muted-foreground hover:text-primary no-underline hover:no-underline'
          >
            <ArrowBendUpLeftIcon />
            <span className='text-sm'>Index</span>
          </Link>
        </aside>
        <div className='sm:col-start-2 mb-8'>
          <p className="sm:col-start-2">Writing</p>
          <p className="text-muted-foreground text-sm">Infrequent thoughts on software development</p>
        </div>
      </section>
      <section>
        <p className='text-xs text-muted-foreground text-center w-full'>Nothing to see here yet</p>
        <Link href={'/writing/focus'}> &apos;cept this ofcourse</Link>
      </section>
    </>
  )
}

export default Writing