import Link from 'next/link';
import Header from '@/components/header';

function Writing() {
  return (
    <>
      <Header
        backlink='/'
        backlinktext='Index'
        title='Writing'
        desc='Infrequent thoughts on software development'
      />
      <section>
        <p className='text-xs text-muted-foreground text-center w-full'>Nothing to see here yet</p>
        <Link href={'/writing/focus'}> &apos;cept this ofcourse</Link>
      </section>
    </>
  )
}

export default Writing