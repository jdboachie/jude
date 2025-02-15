'use client';

import Link from 'next/link'
import LocalFont from "next/font/local"
import { LazyMotion, domAnimation, m } from 'framer-motion'
import {WorkExperience, Volunteering } from '@/components/content/work-experience';
import Href from '@/components/href';


const rudiment = LocalFont({
  src: '../font/Redaction_50-Regular.woff2'
})


const staggerChildrenVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.975, },
  show: { opacity: 1, y: 0, scale: 1.0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Page() {
  return (
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
        transition={{ ease: 'easeOut', duration: 0.3, delay: 0.15 }}
        className='gap-16'
      >
        <m.p
          variants={staggerChildrenVariants}
          className='text-right'
        >
          <span className={`text-3xl sm:text-5xl ${rudiment.className} tracking-normal`}>Jude Boachie</span>
        </m.p>
        <m.div id='now' variants={staggerChildrenVariants} >
          <m.p variants={staggerChildrenVariants} className="text-muted-foreground text-xs font-semibold">Now</m.p>
          Engineer at <Href href={'https://sokoaerial.com'}>Soko Aerial</Href>.
          Computer Engineering <Href href={'https://knust.edu.gh'}>@KNUST</Href>.
          Freelance fullstack web and product developer (Nextjs).<br /><span className={'pretty-text'}>Light of the world.</span>
          {/*Mastering all manner of craft. */} Building systems and code for people.
        </m.div>
        <m.div id='now' variants={staggerChildrenVariants} >
          Learning to copy quickly and innovate creatively, guiltlessly exploring passion and interests, appreciating hidden gems in people&apos;s work. Mindful that I can do all things <span className={'pretty-text'}>through Christ who strengthens me</span>.
        </m.div>
        <m.div id='experience' className='mx-auto grid grid-cols-2 xl:my-14 max-xl:grid-flow-row gap-12' variants={staggerChildrenVariants} >
          <WorkExperience />
          <Volunteering />
        </m.div>
        <m.div variants={staggerChildrenVariants} >
          Send me an email at <Link href={'mailto:jdboachie@gmail.com'}>jdboachie@gmail.com</Link>. Let{"'"}s talk.
        </m.div>
      </m.main>
    </LazyMotion>
  )
}
