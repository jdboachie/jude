// import Link from 'next/link';
// import {
//   ArrowUpRight as ArrowUpRightIcon,
//   Link as LinkIcon,
// } from '@phosphor-icons/react/dist/ssr';
import Header from '@/components/header';
// import { Button } from '@/components/ui/button';
// import * as Tooltip from '@radix-ui/react-tooltip';
import { Separator } from '@/components/ui/separator';
import BackLink from '@/components/backlink';
// import { TooltipArrow, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';


interface Project {
  title: string
  link: string
  description: string
  technologies: string[]
  date: Date
}

const projects: Project[] = [
  {
    title: 'Nike Shoes site',
    link: 'https://nike-landing-page-six-orpin.vercel.app',
    description: 'Product landing page',
    technologies: ['React', 'Nextjs', 'TailwindCSS'],
    date: new Date('04/07/2023')
  },
  {
    title: 'Dictionary',
    link: 'https://dictionary-jade-eta.vercel.app?q=definition',
    description: 'Get definitions quick',
    technologies: ['React', 'Nextjs', 'TailwindCSS'],
    date: new Date()
  },
  {
    title: 'Dashboard UI',
    link: 'https://guillo.vercel.app/dashboard',
    description: 'Invoice app dashboard UI with Nivo charts',
    technologies: ['Nextjs', 'TailwindCSS', 'Nivo'],
    date: new Date('04/07/2024')
  },
]

function Projects() {
  return (
    <main>
      <BackLink link='/' text='Index' />
      <Header
        title='Projects'
        desc='Stuff I built while learning'
      />
      <section className='grid sm:mt-12 mt-6 sm:col-span-3 gap-6 pb-32'>
        {[...projects]
          .sort((a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0))
          .map((project, index) => (
          <div key={index} className='sm:col-span-3 flex flex-col gap-8 min-w-0 h-fit'>
            <div className='sm:col-start-2 max-w-[65ch] flex gap-2 items-center mx-auto w-full'>
              <div className='grow whitespace-nowrap'>
                <p className='text-sm'>{project.title}</p>
                <p className='text-muted-foreground text-xs'>{project.description}</p>
              </div>
              <Separator className='shrink' />
              <time className='max-sm:text-xs'>{project.date.getFullYear()}</time>
            </div>
            {/* <div className='z-10 border-t col-span-3 w-full min-w-0 mx-auto bg-primary-foreground aspect-video max-sm:aspect-[9/14] h-fit rounded-xl'>
              <div className="relative px-3 py-2 rounded-t-xl border border-t-0 items-center justify-center flex">
                <div className="grid grid-cols-3 gap-2 w-fit absolute max-sm:hidden left-0 px-5">
                  {[1, 2, 3].map((_, index) => (
                    <span key={index} className='size-3.5 bg-input rounded-full'></span>
                  ))}
                </div>
                <div className='border flex bg-background gap-1.5 items-center justify-between p-1 rounded-md w-full sm:max-w-sm'>
                  <p className='text-xs px-2 text-muted-foreground truncate'>{project.link}</p>
                    <div className='flex w-fit gap-1 text-muted-foreground'>
                      <Tooltip.Root>
                        <TooltipTrigger>
                          <Link
                            target='_blank'
                            href={project.link}
                            className={`inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground size-6 rounded-lg`}
                          >
                            <div className="sr-only">{project.link}</div>
                            <ArrowUpRightIcon />
                          </Link>
                        </TooltipTrigger>
                        <Tooltip.Portal>
                          <TooltipContent sideOffset={5}>
                            Open Link
                            <TooltipArrow />
                          </TooltipContent>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                      <Tooltip.Root>
                        <TooltipTrigger>
                          <Button size={'icon'} variant={'ghost'} className='size-6 rounded-lg' >
                            <LinkIcon />
                            <span className="sr-only">{project.link}</span>
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
                src={project.link}
                name={project.title}
                title={project.title}
                className="w-full h-full rounded-b-xl bg-background border border-t-0 focus:outline-none"
              />
            </div> */}
          </div>
        ))}
      </section>
    </main>
  )
}

export default Projects