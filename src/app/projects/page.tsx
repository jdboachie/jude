import Link from 'next/link';
import styles from './styles.module.css';
import layoutstyles from './layout.module.css';
import { ArrowUpLeftIcon } from '@/app/icons/arrow-up-left';

export const metadata = {
  title: 'Projects',
  description: 'Little tinkery ones and then really big ones',
}

interface Project {
  title: string
  description: string
  link: string
  ssUrl?: string
}

export default function Page() {

  const projects: Project[] = [
    {
      title: 'Nike Landing Page',
      description: 'Beautiful product landing page',
      link: 'https://nike-landing-page-six-orpin.vercel.app/'
    },
    {
      title: 'Dictionary',
      description: 'Lookup any word',
      link: 'https://dictionary-jade-eta.vercel.app'
    },
    {
      title: 'Guillo Dashboard',
      description: 'Dashboard design with nextjs and tailwind',
      link: 'https://guillo.vercel.app/dashboard'
    }
  ]

  return (
    <>
      <aside className={layoutstyles.aside}><Link href={'/'}><ArrowUpLeftIcon />Home</Link></aside>
      <main className={styles.main}>
        <h1>Projects</h1>
        {/* <p>Just a bunch of links for now</p> */}
        <ol className={styles.ol}>
          {projects.map((project, index) => (
            <li key={index}>
              <div className={styles.projectheader}>
                <span className={styles.title}>{project.title}</span>
                <Link href={project.link}>{project.link}</Link>
              </div>
              <div className={styles.iframecontainer}>
                <iframe
                  src={project.link}
                  title={project.title}
                  className={styles.iframe}
                >
                </iframe>
              </div>
            </li>
          ))}
        </ol>
      </main>
    </>
  )
}