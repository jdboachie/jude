import Link from 'next/link';
import styles from './dock.module.css'
import { animate, motion, useMotionValue } from 'framer-motion'
import { Home, PenTool, Rss, Mail, GitHub } from 'react-feather';

const APPS = [
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
    title: 'RSS',
    icon: Rss,
    link: '/rss'
  },
];


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
          >
            <app.icon className={styles.icon}/>
          </DockIcon>
        ))}
      </div>
    </div>
  )
}

function DockIcon ({children, link} : {children: React.ReactNode, link: string}) {
  const y = useMotionValue(0);
  return (
    <motion.button
      // className={styles.icon}
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
      <Link
        href={link}
      >
        {children}
      </Link>
    </motion.button>
  )
}