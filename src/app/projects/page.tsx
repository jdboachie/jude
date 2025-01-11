import Link from 'next/link';
import styles from './styles.module.css';
import layoutstyles from './layout.module.css';
import { ArrowUpLeftIcon } from '@/app/icons/arrow-up-left';

export const metadata = {
  title: 'Projects',
  description: 'Little tinkery ones and then really big ones',
}

export default function Page() {

  return (
    <>
      <aside className={layoutstyles.aside}><Link href={'/'}><ArrowUpLeftIcon />Home</Link></aside>
      <main>
        <h1>Projects</h1>
        <p>Just a bunch of links for now</p>
        <ol>
          <li>
            Dashboard UI: guillo.vercel.app
            <div className="iframe-container">
              <iframe
                src="https://guillo.vercel.app/dashboard"
                title="Guillo App"
                className={styles.iframe}
              >
              </iframe>
            </div>
          </li>
          <li>
            Nike Landing page
            <div className="iframe-container">
              <iframe
                src="https://nike-landing-page-six-orpin.vercel.app/"
                title="Nike Landing Page"
                className={styles.iframe}
              >
              </iframe>
            </div>
          </li>
          <li>
            Dictionary
            <div className="iframe-container">
              <iframe
                src="https://dictionary-jade-eta.vercel.app/"
                title="Dictionary"
                className={styles.iframe}
              >
              </iframe>
            </div>
          </li>
        </ol>
      </main>
    </>
  )
}