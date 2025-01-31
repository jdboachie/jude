'use client';

import Link from 'next/link'
import LocalFont from "next/font/local"
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react';


const rudiment = LocalFont({
  src: 'public/font/Redaction_50-regular.woff2'
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
          className='text-xl grid text-right'
        >
          <span className={`text-5xl lg:text-6xl ${rudiment.className} tracking-normal`}>Jude Boachie</span>
          <span className={'pretty-text text-muted-foreground'}>Light of the world. </span>{' '}<br />
        </m.p>
        <m.div id='now' variants={staggerChildrenVariants} >
          <m.p variants={staggerChildrenVariants} className="text-muted-foreground text-sm font-medium">Now</m.p>
          Engineer at <Link className={''} href={'https://sokoaerial.com'}>Soko Aerial</Link>.
          Computer Engineering <Link href={'https://knust.edu.gh'}>@KNUST</Link>.
          Fullstack/product developer (Nextjs).<br />
          {/*Mastering all manner of craft. */} Building systems and code for people.
        </m.div>
        <m.div id='now' variants={staggerChildrenVariants} >
          Learning to copy quickly and innovate creatively, guiltlessly exploring passion and interests, appreciating hidden gems in people&apos;s work. Mindful that I can do all things <span className={'pretty-text'}>through Christ who strengthens me</span>.
        </m.div>
        {/* <m.div id='past' variants={staggerChildrenVariants} >
          In the past, I&apos;ve worked at <Link href={'https://tevrozo.com'}>Tevrozo</Link> and Nalo Solutions.
          {' '}Volunteered as the Pre-Collegiate Initiative Chair at <Link href={'https://nsbeknust.wordpress.com'}>NSBE-KNUST</Link>.
        </m.div> */}
        <m.div id='experience' className='mx-auto grid grid-cols-2 xl:my-14 max-xl:grid-flow-row gap-12' variants={staggerChildrenVariants} >
          <div className='flex flex-col gap-3'>
            <p className="text-muted-foreground text-sm font-medium">Work Experience</p>
            <div className='gap-12 flex flex-col'>
              <div className="flex max-sm:flex-col gap-1 sm:gap-6">
                <time className='text-muted-foreground'>2023-Now</time>
                <div className=''>
                  <Link href={'https://sokoaerial.com'} className='w-fit flex flex-wrap gap-1'>Software Engineer at Soko Aerial Robotics<ArrowUpRight /></Link>
                  <p className='text-muted-foreground'>Remote, Ghana</p>
                </div>
              </div>
              <div className="flex max-sm:flex-col gap-1 sm:gap-6">
                <time className='text-muted-foreground'>2024-2024</time>
                <div className=''>
                  <Link href={'https://tevrozo.com'} className='w-fit flex flex-wrap gap-1'>Fullstack Web Developer at Tevrozo <ArrowUpRight /></Link>
                  <p className='text-muted-foreground'>Nextjs, TailwindCSS, TypeScript, Firebase</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <p className="text-muted-foreground text-sm font-medium">Volunteering</p>
            <div className='gap-12 flex flex-col'>
              <div className="flex max-sm:flex-col gap-1 sm:gap-6">
                <time className='text-muted-foreground'>2022-2023</time>
                <div className=''>
                  <Link href={'https://nsbe.org'} className='w-fit flex flex-wrap gap-1'>PCI Chair at NSBE-KNUST<ArrowUpRight /></Link>
                  <p className='text-muted-foreground'>Kumasi, Ghana</p>
                  <p className='text-muted-foreground'>(Pre-Collegiate Initiative Chair) Helped train high school students in STEM</p>
                </div>
              </div>
            </div>
          </div>
        </m.div>
        <m.div variants={staggerChildrenVariants} >
          Send me an email at <Link href={'mailto:jdboachie@gmail.com'}>jdboachie@gmail.com</Link>. Let{"'"}s talk.
        </m.div>
      </m.main>
    </LazyMotion>
  )
}