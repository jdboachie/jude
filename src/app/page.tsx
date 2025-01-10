'use client';


import Link from 'next/link'
import styles from "./page.module.css";
import TheSun from "./components/the-sun";
import { LazyMotion, domAnimation, m } from 'framer-motion'




const staggerChildrenVariants = {
  hidden: { opacity: 0, y: 20, scale: 1, },
  show: { opacity: 1, y: 0, scale: 1.0, transition: { duration: 0.6, ease: 'easeOut' } },
}



export default function Page() {
  return (
    <section className={styles.section}>
      <TheSun />
      <LazyMotion features={domAnimation} strict>
        <m.main
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
          initial='hidden'
          animate='show'
          transition={{ ease: 'easeOut', duration: 0.3, delay: 0.3 }}
          className={styles.main}
        >
          <m.p
            variants={staggerChildrenVariants}
            className={styles.h1}
          >
            Jude Boachie
          </m.p>
          <m.div variants={staggerChildrenVariants} className={styles.contentsection}>
            <p className={styles.sectiontitle}>Bio</p>
            <span className={styles.italic}>Light of the world. ✌️</span>{' '}<br />
            Engineer at <Link className={styles.link} href={'https://sokoaerial.com'}>Soko Aerial</Link>.
            Computer Engineering <Link className={styles.link} href={'https://knust.edu.gh'}>@KNUST</Link>.<br/>
            Freelance fullstack/product developer (Nextjs)<br />
            Mastering all manner of craft. <span className={styles.italic}>Total Success</span>
          </m.div>
          <m.div variants={staggerChildrenVariants} className={styles.contentsection}>
            <p className={styles.sectiontitle}>Past</p>
            <span>In the past, I{"'"}ve worked at <Link className={styles.link} href={'https://tevrozo.com'}>Tevrozo</Link> and Nalo Solutions.</span>
            {' '}Volunteered as the Pre-Collegiate Initiative Chair at <Link className={styles.link} href={'https://nsbeknust.wordpress.com'}>NSBE-KNUST</Link>
          </m.div>
          <m.div variants={staggerChildrenVariants} className={styles.contentsection}>
            <p className={styles.sectiontitle}>Now</p>
            Developing skill through doing, happily exploring passion and interests, appreciating hidden gems in people&apos;s work. Mindful that I can do all things through <span className={'font-medium text-lg leading-none'}>Christ</span> who strengthens me.
            Learning about design for human-computer interfaces.
          </m.div>
          <m.div variants={staggerChildrenVariants} className={styles.contentsection}>
            <p className={styles.sectiontitle}>Connect</p>
            Send me an email at <Link href={'mailto:jdboachie@gmail.com'}>jdboachie@gmail.com</Link>. Let{"'"}s talk.
          </m.div>
        </m.main>
      </LazyMotion>
    </section>
  )
}
