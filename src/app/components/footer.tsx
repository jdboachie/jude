
// function Footer() {
  //   return (
//     <footer className={styles.footer}><p>✌️❤️</p></footer>
//   )
// }

// export default Footer

'use client'

import Link from 'next/link'
import * as React from 'react'
import styles from './footer.module.css'
import { ArrowUpLeft } from '../icons/arrow-up-left';
// import { GeistMono } from 'geist/font/mono';

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
      <div className={styles.footercontent}>
        {/* <ul className={styles.linklist}>
          <li>
            <Link
              className=""
              rel="noopener noreferrer"
              target="_blank"
              href="/rss"
            >
              <p className="">rss</p>
              <ArrowUpLeft />
            </Link>
          </li>
          <li>
            <Link
              className=""
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/jdboachie"
            >
              <p className="">github</p>
              <ArrowUpLeft />
            </Link>
          </li>
        </ul> */}
        <div className={styles.deets}>
          <p className={styles.copy}>
            {new Date().getFullYear()}
            <Link className={styles.link} href={'https://maps.app.goo.gl/RXv5TQN8pWe5cqms6'}>Kumasi</Link>
          </p>
          <p className={styles.time}>
            {currentTime || '--:--:--'}
          </p>
        </div>
      </div>
    </footer>
  )
}
