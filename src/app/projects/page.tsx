import { Button } from '@/components/ui/button'
import { Link } from '@phosphor-icons/react/dist/ssr'

function Projects() {
  return (
    <main>
      <section className='mb-16'>
        <p className="font-medium sm:col-start-2">Projects</p>
        <p className="text-muted-foreground text-sm">From my learnings and earnings</p>
      </section>
      <section className='w-full grid gap-36 col-span-3'>
        <div className='border bg-background aspect-video max-sm:aspect-[9/16] rounded-xl'>
          <div className="relative px-3 py-2 rounded-t-xl border-b items-center justify-center flex">
            <div className="grid grid-cols-3 gap-2 w-fit absolute max-sm:hidden left-0 px-5">
              {[1, 2, 3].map((_, index) => (
                <span key={index} className='size-3.5 bg-input rounded-full'></span>
              ))}
            </div>
            <div className='border flex gap-1.5 items-center justify-between p-1 rounded-md w-full sm:max-w-sm'>
              <p className='text-xs px-2 text-muted-foreground truncate'>https://nike-landing-page-six-orpin.vercel.app/</p>
              <Button size={'icon'} variant={'ghost'} className='size-6 rounded-lg' ><Link /></Button>
            </div>
          </div>
          <iframe
            src="https://nike-landing-page-six-orpin.vercel.app/"
            className="w-full h-full rounded-b-xl border-none focus:outline-none"
          />
        </div>
        <div className='border bg-background aspect-video max-sm:aspect-[9/16] rounded-xl'>
          <div className="relative p-3 rounded-t-xl border-b items-center justify-center flex">
            <div className="grid grid-cols-3 gap-2 w-fit absolute max-sm:hidden left-0 px-5">
              {[1, 2, 3].map((_, index) => (
                <span key={index} className='size-3.5 bg-input rounded-full'></span>
              ))}
            </div>
            <div className='border flex gap-1.5 items-center justify-between p-1 rounded-md w-full sm:max-w-sm'>
              <p className='text-xs px-2 text-muted-foreground'>https://guillo.vercel.app/dashboard</p>
              <Button size={'icon'} variant={'ghost'} className='size-6 rounded-lg' ><Link /></Button>
            </div>
          </div>
          <iframe
            src="https://guillo.vercel.app/dashboard"
            className="w-full h-full rounded-b-xl border-none focus:outline-none"
          />
        </div>
      </section>
    </main>
  )
}

export default Projects