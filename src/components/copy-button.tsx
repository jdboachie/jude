'use client';

import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  LinkSimple as LinkIcon,
  Check as CheckIcon,
} from '@phosphor-icons/react/dist/ssr';

import { Button } from './ui/button';
import { TooltipArrow, TooltipContent, TooltipTrigger } from './ui/tooltip';

const CopyButton = ({ url }: { url: string }) => {
  const [copied, setCopied] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true);
        setOpen(true);
        try {
          navigator.vibrate([50, 75, 75]);
        } catch {

        }
        setTimeout(() => {
          setCopied(false);
          setOpen(false);
        }, 2500);
      })
      .catch(console.error);
  }

  return (
    <Tooltip.Root open={open} onOpenChange={setOpen}>
      <TooltipTrigger>
        <Button
          size="icon"
          variant="secondary"
          onClick={handleClick}
          className="rounded-full absolute top-1.5 right-0 hover:scale-105 active:scale-95 transition-all duration-150 ease-out"
        >
          <span className="sr-only">{url}</span>
          {copied ? <CheckIcon className="size-4 transition-transform scale-110" /> : <LinkIcon className="size-4" />}
        </Button>
      </TooltipTrigger>
      <Tooltip.Portal>
        <TooltipContent sideOffset={5}>
          {copied ? "Copied!" : "Copy link"}
          <TooltipArrow />
        </TooltipContent>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};

export default CopyButton;
