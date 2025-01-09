'use client'

import Link from 'next/link'
import * as React from 'react'
import styles from './footer.module.css'
// import { Mail, GitHub, Rss } from 'react-feather';
import Dock from './dock';
import MotionlessDock from './motionlessdock';

export default function Footer() {

  const [currentTime, setCurrentTime] = React.useState<string>('');

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Intl.DateTimeFormat('en-US',
        {
          timeZone: 'Africa/Accra',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false, // 24-hour format, set to true for 12-hour format
        }
      );
      setCurrentTime(now.format(new Date()));
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className={styles.footer}>
      <Dock />
      <MotionlessDock />
      <div className={styles.footercontent}>
        {/* <p className={styles.quote}>
          Favour surounds me like a shield
        </p> */}
        <div className={styles.deets}>
          <p className={styles.copy}>
            {new Date().getFullYear()}
            <Link className={styles.location} href={'https://maps.app.goo.gl/NUWZT3FZbK4unb5YA'}>Ghana 🖤</Link>
          </p>
          <p className={styles.time}>
            {currentTime || '--:--:--'}
          </p>
        </div>
      </div>
    </footer>
  )
}
