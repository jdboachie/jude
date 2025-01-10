'use client';

import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion'
import * as React from 'react'
import styles from './dock.module.css'
import tooltipstyles from './tooltip.module.css'
import * as Tooltip from '@radix-ui/react-tooltip';
import { Home, PenTool, Rss, Mail, GitHub, Icon, Twitter } from 'react-feather';
import Link from 'next/link';

// const SCALE = 2.25; // max scale factor of an icon
// const DISTANCE = 110; // pixels before mouse affects an icon
// const NUDGE = 40; // pixels icons are moved away from mouse
// const SPRING = {
//   mass: 0.1,
//   stiffness: 170,
//   damping: 12,
// };

interface DockApp {
  title: string,
  icon: Icon
  link: string
}
const APPS: DockApp[] = [
  {
    title: 'Home',
    icon: Home,
    link: '/'
  },
  {
    title: 'Writing',
    icon: PenTool,
    link: '/writing'
  },
  {
    title: 'Mail',
    icon: Mail,
    link: 'mailto:jdboachie@gmail.com'
  },
  {
    title: 'GitHub',
    icon: GitHub,
    link: 'https://github.com/jdboachie'
  },
  {
    title: 'Twitter (X)',
    icon: Twitter,
    link: 'https://x.com/judeboachieonx'
  },
  {
    title: 'RSS',
    icon: Rss,
    link: '/rss'
  },
];


function Dock() {

  const mouseX = useMotionValue(Infinity)

  return (
    <div className={styles.dockregion}>
      <div
        onMouseMove={(e) => {
          mouseX.set(e.pageX)
        }}
        onMouseLeave={() => {mouseX.set(Infinity)}}
        className={styles.dock}
      >
        {APPS.map((app, index) => (
          <DockIcon
            app={app}
            key={index}
            mouseX={mouseX}
          />
        ))}
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

  const widthSync = useTransform(distance, [-200, 0, 200], [40, 80, 40])
  const width = useSpring(widthSync, {damping: 10, mass: 0.01, stiffness: 170})

  const y = useMotionValue(0);

  return (
    <Tooltip.Provider delayDuration={150}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.button
            ref={ref}
            style={{ width, y }}
            onClick={() => {
              animate(y, [0, -40, 0], {
                repeat: 2,
                ease: [
                  [0, 0, 0.2, 1],
                  [0.8, 0, 1, 1]
                ],
                duration: 0.7
              })
            }}
          >
            <Link href={app.link}><app.icon className={styles.icon} /></Link>
          </motion.button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={tooltipstyles.Content} sideOffset={5}>
            {app.title}
            <Tooltip.Arrow className={tooltipstyles.Arrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default Dock