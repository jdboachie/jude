import * as React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import styles from "./tooltip.module.css";
import { cn } from "@/lib/utils";

export const TooltipTrigger = ({children} : {children: React.ReactNode}) => {
  return <Tooltip.Trigger asChild>
    {children}
  </Tooltip.Trigger>
}

export const TooltipContent = ({children, sideOffset} : {children: React.ReactNode, sideOffset: number}) => {
  return <Tooltip.Content sideOffset={sideOffset} className={cn(styles.Content, 'bg-background border')} >
    {children}
  </Tooltip.Content>
}

export const TooltipArrow = () => {
  return <Tooltip.Arrow className={'fill-background dark:fill-border'} />
}
