import React from 'react';
import {
  LinkSimple as LinkIcon
} from '@phosphor-icons/react/dist/ssr';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

const Header = (
  {
    link,
    title,
    desc,
    date,
    children
  }:{
    link?: string,
    title?: string,
    desc?: string,
    date?: string,
    children?: React.ReactNode
  }
) => {
  return (
    <header
      className='
        lg:col-span-2 lg:col-start-2 flex flex-col w-full
        max-sm:min-w-0 max-lg:mx-auto lg:grid lg:grid-cols-[65ch_1fr]
      '
    >
      <div className='relative sm:col-start-1 mb-8'>
        {title && <p className="sm:col-start-2 font-medium">{title}</p>}
        {desc && <p className="text-muted-foreground text-sm">{desc}</p>}
        {date && <p className="text-muted-foreground text-sm">{date}</p>}
        {children}
        {link &&
        // TODO: should display functinal copy button
          <div
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