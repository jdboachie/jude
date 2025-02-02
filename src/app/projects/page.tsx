import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight as ArrowUpRightIcon, Link as LinkIcon } from '@phosphor-icons/react/dist/ssr';
import * as Tooltip from '@radix-ui/react-tooltip';
import { TooltipArrow, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const projects: string[] = [
  'https://nike-landing-page-six-orpin.vercel.app',
  'https://dictionary-jade-eta.vercel.app',
  'https://guillo.vercel.app/dashboard',
]

function Projects() {
  return (
    <main>
      <section className='mb-24'>
        <p className="font-medium sm:col-start-2">Projects</p>
        <p className="text-muted-foreground text-sm">From my learnings and earnings</p>
      </section>
      <section className='w-full h-fit grid gap-y-36 col-span-3'>
      {projects.map((link, index) => (
          <div key={index} className='border w-full min-w-0 bg-background aspect-video max-sm:aspect-[9/16] rounded-xl'>
            <div className="relative px-3 py-2 rounded-t-xl border-b items-center justify-center flex">
              <div className="grid grid-cols-3 gap-2 w-fit absolute max-sm:hidden left-0 px-5">
                {[1, 2, 3].map((_, index) => (
                  <span key={index} className='size-3.5 bg-input rounded-full'></span>
                ))}
              </div>
              <div className='border flex gap-1.5 items-center justify-between p-1 rounded-md w-full sm:max-w-sm'>
                <p className='text-xs px-2 text-muted-foreground truncate'>{link}/</p>
                  <div className='flex w-fit gap-1 text-muted-foreground'>
                    <Tooltip.Root>
                      <TooltipTrigger>
                        <Link
                          href={link}
                          target='_blank'
                          className={`inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground size-6 rounded-lg`}
                        >
                          <div className="sr-only">{link}</div>
                          <ArrowUpRightIcon />
                        </Link>
                      </TooltipTrigger>
                      <Tooltip.Portal>
                        <TooltipContent sideOffset={5}>
                          Open
                          <TooltipArrow />
                        </TooltipContent>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                    <Tooltip.Root>
                      <TooltipTrigger>
                        <Button size={'icon'} variant={'ghost'} className='size-6 rounded-lg' >
                          <LinkIcon />
                          <p className="sr-only">{link}</p>
                        </Button>
                      </TooltipTrigger>
                      <Tooltip.Portal>
                        <TooltipContent sideOffset={5}>
                          Copy Link
                          <TooltipArrow />
                        </TooltipContent>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </div>
              </div>
            </div>
            <iframe
              src={link}
              name={link}
              className="w-full h-full rounded-b-xl border-none focus:outline-none"
            />
          </div>
      ))}
      </section>
    </main>
  )
}

export default Projects