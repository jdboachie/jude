'use client';

import {
  motion,
  animate,
  MotionValue,
  useSpring,
  useTransform,
  useMotionValue,
} from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';
import styles from './dock.module.css';
import tooltipstyles from './tooltip.module.css';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  Icon,
  Newspaper,
  GithubLogo,
  // TwitterLogo,
  HouseSimple,
  EnvelopeSimple,
  LightbulbFilament,
  XLogo,
} from "@phosphor-icons/react";

interface DockApp {
  icon: Icon
  link: string
  title: string
}

export const APPS: DockApp[] = [
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
  {
    title: 'GitHub',
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
    link: 'https://x.com/judeboachieonx'
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

  const widthSync = useTransform(distance, [-200, 0, 200], [40, 65, 40])
  const width = useSpring(widthSync, {damping: 10, mass: 0.01, stiffness: 170})

  const y = useMotionValue(0);

  return (
    <Tooltip.Provider delayDuration={150}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.button
            ref={ref}
            className={styles.dockbutton}
            style={{ width, y }}
            onClick={() => {
              animate(y, [0, -40, 0], {
                repeat: 2,
                ease: [
                  [0, 0, 0.2, 1],
                  [0.8, 0, 1, 1]
                ],
                duration: 0.6
              })
            }}
          >
            <Link href={app.link} className={styles.link}>
              <span className='sr-only'>{app.title}</span>
              <app.icon weight='duotone' size={40} className={styles.icon} />
            </Link>
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