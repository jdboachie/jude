'use client';

import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  LinkSimple as LinkIcon,
  Check as CheckIcon,
} from '@phosphor-icons/react/dist/ssr';

import { Button } from './ui/button';
import { TooltipArrow, TooltipContent, TooltipTrigger } from './ui/tooltip';

const CopyButton = ({url}: {url: string}) => {
  const [copied, setCopied] = React.useState<boolean>(false);

  function handleClick() {
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2500);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  }

  return (
    <Tooltip.Root>
      <TooltipTrigger>
        <Button
          size={'icon'}
          variant={'secondary'}
          onClick={handleClick}
          className={'rounded-full absolute top-1 right-0 border'}
        >
          <>
            <span className="sr-only">{url}</span>
            {copied ? <CheckIcon className='size-4' /> : <LinkIcon className='size-4' />}
          </>
        </Button>
      </TooltipTrigger>
      <Tooltip.Portal>
        <TooltipContent sideOffset={5}>
          Copy link
          <TooltipArrow />
        </TooltipContent>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

export default CopyButton