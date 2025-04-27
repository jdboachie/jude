'use client';

import {
  motion,
  // animate,
  MotionValue,
  useSpring,
  useTransform,
  useMotionValue,
} from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  Icon,
  Newspaper,
  GithubLogo,
  CircleHalf,
  HouseSimple,
  EnvelopeSimple,
  LightbulbFilament,
  XLogo,
} from "@phosphor-icons/react";
import { TooltipArrow, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { Separator } from './ui/separator';
import { useTheme } from 'next-themes';

interface DockApp {
  icon: Icon
  link: string
  title: string
}

export const navlinks: DockApp[] = [
  {
    title: 'Home',
    icon: HouseSimple,
    link: '/'
  },
  {
    title: 'Projects',
    icon: LightbulbFilament,
    link: '/projects'
  },
  {
    title: 'Writing',
    icon: Newspaper,
    link: '/writing'
  },
];

export const socials: DockApp[] = [
  {
    title: 'Github',
    icon: GithubLogo,
    link: 'https://github.com/jdboachie'
  },
  {
    title: 'Mail',
    icon: EnvelopeSimple,
    link: 'mailto:jdboachie@gmail.com'
  },
  {
    title: 'X (Twitter)',
    icon: XLogo,
    link: 'https://x.com/judeboachie_'
  },
];

const dockButtonStyles = 'grid place-items-center w-10 aspect-square rounded-full border bg-primary-foreground dark:bg-secondary'


function Dock() {

  const mouseX = useMotionValue(Infinity)

  return (
    <div className='fixed flex justify-center sm:pointer-events-none items-center bottom-0 h-24 w-full z-50'>
      <div
        onMouseMove={(e) => {
          mouseX.set(e.pageX)
        }}
        onMouseLeave={() => {mouseX.set(Infinity)}}
        className="pointer-events-auto rounded-full hidden sm:flex bg-background dark:bg-primary-foreground shadow-2xl items-end mb-4 border z-[10] gap-2 p-1.5 h-[54px] max-sm:mx-6 max-sm:overflow-x-scroll"
      >
        {navlinks.map((app, index) => (
          <DockIcon
            app={app}
            key={index}
            mouseX={mouseX}
          />
        ))}
        <Separator orientation='vertical'/>
        {socials.map((app, index) => (
          <DockIcon
          app={app}
          key={index}
          mouseX={mouseX}
          />
        ))}
        <Separator orientation='vertical'/>
        <ThemeToggleButton mouseX={mouseX} />
      </div>
      <div className="hidden max-sm:flex rounded-full bg-background dark:bg-primary-foreground shadow-2xl items-end mb-8 border z-[10] gap-2 p-1.5 h-[54px] max-sm:mx-6 max-sm:overflow-x-scroll">
        {navlinks.map((app, index) => (
          <DockIcon
            app={app}
            key={index}
            mouseX={mouseX}
          />
        ))}
        <Separator orientation='vertical'/>
        {socials.map((app, index) => (
          <DockIcon
          app={app}
          key={index}
          mouseX={mouseX}
          />
        ))}
        {/* <Separator orientation='vertical'/>
        <ThemeToggleButton mouseX={mouseX} /> */}
      </div>
    </div>
  )
}

function DockIcon ({mouseX, app} : {mouseX: MotionValue, app: DockApp}) {

  const ref = React.useRef<HTMLButtonElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (bounds){
      return val - bounds.x - bounds.width/2
    } else {
      return Infinity
    }
  })

  const widthSync = useTransform(distance, [-110, 0, 110], [40, 70, 40])
  const width = useSpring(widthSync, {damping: 10, mass: 0.1, stiffness: 170})

  const y = useMotionValue(0);

  return (
    <Tooltip.Root>
      <TooltipTrigger>
        <motion.button
          ref={ref}
          style={{ width, y, zIndex: 50 }}
          // onClick={() => {
          //   animate(y, [0, -40, 0], {
          //     repeat: 2,
          //     ease: [
          //       [0, 0, 0.2, 1],
          //       [0.8, 0, 1, 1]
          //     ],
          //     duration: 0.6
          //   })
          // }}
          className={dockButtonStyles}
        >
          <span className='sr-only'>{app.title}</span>
          <Link prefetch={true} href={app.link} className='size-full rounded-full place-content-stretch grid'>
            <app.icon weight='duotone' className='text-muted-foreground size-full p-[22.5%]'/>
          </Link>
        </motion.button>
      </TooltipTrigger>
      <Tooltip.Portal>
        <TooltipContent sideOffset={5}>
          {app.title}
          <TooltipArrow />
        </TooltipContent>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

function ThemeToggleButton ({mouseX} : {mouseX: MotionValue}) {

  const ref = React.useRef<HTMLButtonElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (bounds){
      return val - bounds.x - bounds.width/2
    } else {
      return Infinity
    }
  })

  const widthSync = useTransform(distance, [-110, 0, 110], [40, 70, 40])
  const width = useSpring(widthSync, {damping: 10, mass: 0.1, stiffness: 170})

  const y = useMotionValue(0);

  const { theme, setTheme, resolvedTheme } = useTheme()

  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted)
  return (
    <Tooltip.Root>
      <TooltipTrigger>
        <motion.button
          ref={ref}
          style={{ width, y }}
          // onClick={() => {
          //   animate(y, [0, -40, 0], {
          //     repeat: 2,
          //     ease: [
          //       [0, 0, 0.2, 1],
          //       [0.8, 0, 1, 1]
          //     ],
          //     duration: 0.6
          //   })
          // }}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key.toLowerCase() == 'r') {
              setTheme('system')
            }
          }}
          className='w-10 max-sm:size-10 aspect-square rounded-full border bg-primary-foreground dark:bg-secondary'
        >
          <span className="sr-only">Toggle theme</span>
          <div
            className='size-full rounded-full grid place-items-stretch text-muted-foreground p-[22.5%]'
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light': 'dark')}
            }
            onAuxClick={(e: React.MouseEvent) => {
              e.preventDefault()
              setTheme('system')
            }}
          >
            { theme === 'dark' ?
              <div className="hidden dark:block bg-white rounded-full text-muted-foreground size-full" />
              :
              <>
                {theme === 'light' &&
                  <div className="block dark:hidden bg-black rounded-full text-muted-foreground size-full" />
                }
              </>
            }
            {theme === 'system' && <CircleHalf weight='fill' className='text-muted-foreground size-full'/>}
          </div>
        </motion.button>
      </TooltipTrigger>
      <Tooltip.Portal>
        <TooltipContent sideOffset={5}>
          <div className='flex gap-1 size-full text-xs'>
            Switch to {resolvedTheme === 'dark' ? 'light' : 'dark'}
            <span className='text-xs'><kbd>R</kbd> to reset</span>
          </div>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}


export default Dock