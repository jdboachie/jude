import * as Tooltip from '@radix-ui/react-tooltip';
import { TooltipArrow, TooltipContent, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { Link as LinkIcon } from '@phosphor-icons/react/dist/ssr'

const Href = ({href, className, children} : {href: string, className?: string, children: React.ReactElement | string}) => {
  return (
    <Tooltip.Root>
      <TooltipTrigger>
        <Link href={href} className={className}>{children}</Link>
      </TooltipTrigger>
      <Tooltip.Portal>
        <TooltipContent sideOffset={5}>
          <div className='flex gap-2 items-center size-full text-xs'>
            <LinkIcon weight='light' className='text-primary' />
            <span className='text-xs'>{href}</span>
          </div>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

export default Href