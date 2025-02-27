import React from 'react';
import Link from 'next/link';
import {
  ArrowBendUpLeft as ArrowBendUpLeftIcon,
  Link as LinkIcon
} from '@phosphor-icons/react/dist/ssr';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

const Header = (
  {
    link,
    backlink,
    backlinktext,
    title,
    desc,
    date,
    children
  }:{
    link?: string,
    backlink: string,
    backlinktext: string,
    title?: string,
    desc?: string,
    date?: string,
    children?: React.ReactNode
  }
) => {
  return (
    <header className='relative sm:col-span-3 flex flex-col w-full max-lg:max-w-[65ch] max-sm:min-w-0 max-lg:mx-auto lg:grid sm:grid-cols-[1fr_65ch_1fr]'>
      <aside className='lg:fixed lg:top-[145px] w-full z-0 pt-0 pb-8 self-start grid items-start'>
        <Link
          href={backlink}
          className='flex items-center w-fit gap-2 hover:text-primary no-underline hover:no-underline'
        >
          <ArrowBendUpLeftIcon weight='light' />
          <span className='text-lg font-serif italic'>{backlinktext}</span>
        </Link>
      </aside>
      <div className='relative sm:col-start-2 mb-8'>
        {title && <p className="sm:col-start-2 font-semibold">{title}</p>}
        {desc && <p className="text-muted-foreground">{desc}</p>}
        {date && <p className="text-muted-foreground text-sm">{date}</p>}
        {children}
        {link &&
        // fix this: it should display copy link instead
          <div
            // href={link}
            className={
              cn(buttonVariants(
                {size: 'icon', variant: 'secondary'}),
                'rounded-full absolute bottom-2 right-0 border'
              )
            }
          >
            <>
              <span className="sr-only">{link}</span>
              <LinkIcon className='size-4' />
            </>
          </div>
        }
      </div>
    </header>
  )
}

export default Header