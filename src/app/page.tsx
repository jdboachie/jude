'use client';


import Link from 'next/link'
import { LazyMotion, domAnimation, m } from 'framer-motion'




const staggerChildrenVariants = {
  hidden: { opacity: 0, y: 20, scale: 1, },
  show: { opacity: 1, y: 0, scale: 1.0, transition: { duration: 0.6, ease: 'easeOut' } },
}



export default function Page() {
  return (
    <section>
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
          className='flex flex-col gap-12'
        >
          <m.p
            variants={staggerChildrenVariants}
            className='text-xl font-semibold'
          >
            Jude Boachie
          </m.p>
          <m.div id='now' variants={staggerChildrenVariants} >
            <span className={'pretty-text'}>Light of the world. </span>{' '}<br />
            Engineer at <Link className={''} href={'https://sokoaerial.com'}>Soko Aerial</Link>.
            Getting a degree in Computer Engineering <Link href={'https://knust.edu.gh'}>@KNUST</Link>.
            Fullstack/product developer (Nextjs)<br />
            {/*Mastering all manner of craft. */} Building systems and code for people.
          </m.div>
          <m.div id='past' variants={staggerChildrenVariants} >
            In the past, I&apos;ve worked at <Link href={'https://tevrozo.com'}>Tevrozo</Link> and Nalo Solutions.
            {' '}Volunteered as the Pre-Collegiate Initiative Chair at <Link href={'https://nsbeknust.wordpress.com'}>NSBE-KNUST</Link>.
          </m.div>
          <m.div id='now' variants={staggerChildrenVariants} >
            Learning to copy quickly and innovate creatively, guiltlessly exploring passion and interests, appreciating hidden gems in people&apos;s work. Mindful that I can do all things <span className={'pretty-text'}>through Christ who strengthens me</span>.
            Figuring out how things work.
          </m.div>
          <m.div variants={staggerChildrenVariants} >
            Send me an email at <Link href={'mailto:jdboachie@gmail.com'}>jdboachie@gmail.com</Link>. Let{"'"}s talk.
          </m.div>
        </m.main>
      </LazyMotion>
    </section>
  )
}