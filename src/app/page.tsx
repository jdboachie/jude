'use client';

import Link from 'next/link'
import LocalFont from "next/font/local"
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { WorkExperience, Volunteering } from '@/components/content/work-experience';
import Href from '@/components/href';


const rudiment = LocalFont({
  src: '../font/Redaction_50-Regular.woff2'
})

const staggerChildrenVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
              staggerChildren: 0.2,
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
          <span className={`text-4xl ${rudiment.className}`}>Jude Boachie</span>
        </m.p>
        <m.div id='now' variants={staggerChildrenVariants} >
          <m.p variants={staggerChildrenVariants} className="text-muted-foreground text-xs font-medium">Now</m.p>
          Software engineer at <Href href={'https://sokoaerial.com'}>Soko Aerial Robotics</Href>.
          Freelance fullstack web developer. Studying computer Engineering at <Href href={'https://knust.edu.gh'}>KNUST</Href>.
          <span className={'serif-italic'}><br className='sm:hidden' /> Light of the world.</span>
          {/*Mastering all manner of craft. */} Building systems and code for people.
        </m.div>
        <m.div id='now' variants={staggerChildrenVariants} >
          <m.p variants={staggerChildrenVariants} className="text-muted-foreground text-xs font-medium">Inspiration</m.p>
          Learning to be inspired by others, innovating creatively, guiltlessly exploring passion and interests, appreciating hidden gems in people&apos;s work. Mindful that I can do all things <span className={'serif-italic'}>through Christ who strengthens me</span>.
        </m.div>
        <m.div id='experience' className='mx-auto xl:my-14 grid gap-12' variants={staggerChildrenVariants} >
          <WorkExperience />
          <Volunteering />
        </m.div>
        <m.div variants={staggerChildrenVariants} >
          Send a dm on Twitter or send me an email at <Link href={'mailto:jdboachie@gmail.com'}>jdboachie@gmail.com</Link>. Let{"'"}s talk.
        </m.div>
      </m.main>
    </LazyMotion>
  )
}
