import { ArrowUpLeftIcon } from '@/app/icons/arrow-up-left'
import Link from 'next/link'
import styles from './layout.module.css'

export const metadata = {
  title: 'Projects',
  description: 'Read my blog - its why I wrote it',
}

export default function Page() {
  return (
    <>
      <aside className={styles.aside}><Link href={'/'}><ArrowUpLeftIcon />Home</Link></aside>
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
                width="100%"
                height="450px"
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
                width="100%"
                height="500px"
              >
              </iframe>
            </div>
          </li>
        </ol>
      </main>
    </>
  )
}