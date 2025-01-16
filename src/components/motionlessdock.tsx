'use client'

import { APPS } from './dock';
import styles from './dock.module.css'
import { animate, motion, useMotionValue } from 'framer-motion'


export default function MotionlessDock() {

  return (
    <div className={styles.dockregion}>
      <div
        className={styles.motionlessdock}
      >
        {APPS.map((app, index) => (
          <DockIcon
            link={app.link}
            key={index}
            title={app.title}
          >
            <app.icon weight='duotone' size={32} className={styles.icon}/>
          </DockIcon>
        ))}
      </div>
    </div>
  )
}

function DockIcon ({children, link, title} : {children: React.ReactNode, link: string, title: string}) {
  const y = useMotionValue(0);
  return (
    <motion.a
      href={link}
      style={{ y }}
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
      <span className='sr-only'>{title}</span>
      {children}
    </motion.a>
  )
}
