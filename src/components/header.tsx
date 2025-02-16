import React from 'react';
import Link from 'next/link';
import {
  ArrowBendUpLeft as ArrowBendUpLeftIcon,
  Link as LinkIcon
} from '@phosphor-icons/react/dist/ssr';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import Href from './href';

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
    <header className='sm:col-span-3 flex flex-col w-full max-lg:max-w-[65ch] max-sm:min-w-0 max-lg:mx-auto lg:grid sm:grid-cols-[1fr_65ch_1fr]'>
      <aside className='max-lg:pb-8 grid items-start'>
        <Link
          href={backlink}
          className='flex items-center w-fit gap-2 text-muted-foreground hover:text-primary no-underline hover:no-underline'
        >
          <ArrowBendUpLeftIcon weight='light' />
          <span className='text-base font-serif italic'>{backlinktext}</span>
        </Link>
      </aside>
      <div className='relative sm:col-start-2 mb-8'>
        {title && <p className="sm:col-start-2 font-semibold">{title}</p>}
        {desc && <p className="text-muted-foreground text-sm">{desc}</p>}
        {date && <p className="text-muted-foreground text-sm">{date}</p>}
        {children}
        {link &&
          <Href
            href={link}
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
          </Href>
        }
      </div>
    </header>
  )
}

export default Header