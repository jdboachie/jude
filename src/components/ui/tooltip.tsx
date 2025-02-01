import * as React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import styles from "./tooltip.module.css";

export const TooltipTrigger = ({children} : {children: React.ReactNode}) => {
  return <Tooltip.Trigger asChild>
    {children}
  </Tooltip.Trigger>
}

export const TooltipContent = ({children, sideOffset} : {children: React.ReactNode, sideOffset: number}) => {
  return <Tooltip.Content sideOffset={sideOffset} className={styles.Content} >
    {children}
  </Tooltip.Content>
}

export const TooltipArrow = () => {
  return <Tooltip.Arrow className={'fill-border'} />
}
