'use client'

import Link from 'next/link'
import { cx } from 'lib/utils'
import Image from 'next/image'
import { display, serif } from './fonts'
import { LazyMotion, domAnimation, m } from 'framer-motion'



const iconStyles = 'stroke-2 stroke-neutral-800 dark:stroke-white dark:fill-neutral-200'

function TwitterIcon() {
  return (
    <svg className={iconStyles} xmlns="http://www.w3.org/2000/svg" width="20" height="20"  viewBox="0 0 256 256"><path d="M208,216H160L48,40H96Z" opacity="0.2"></path><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path></svg>
  )
}

function GithubIcon() {
  return (
    <svg className={iconStyles} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z" opacity="0.2"></path><path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path></svg>
  )
}

function EmailIcon() {
  return (
    <svg className={iconStyles} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M232,116v60a8,8,0,0,1-8,8H128V116A52,52,0,0,0,76,64H180A52,52,0,0,1,232,116Z" opacity="0.2"></path><path d="M104,152a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H96A8,8,0,0,1,104,152Zm136-36v60a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V192H32a16,16,0,0,1-16-16V116A60.07,60.07,0,0,1,76,56h76V24a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H168V56h12A60.07,60.07,0,0,1,240,116ZM120,176V116a44,44,0,0,0-88,0v60Zm104-60a44.05,44.05,0,0,0-44-44H168v72a8,8,0,0,1-16,0V72H116.75A59.86,59.86,0,0,1,136,116v60h88Z"></path></svg>
  )
}


const staggerChildrenVariants = {
  hidden: { opacity: 0, y: 20, scale: 1, },
  show: { opacity: 1, y: 0, scale: 1.0, transition: { duration: 0.6, ease: 'easeOut' } },
}



export default function Page() {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.section
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
        className='flex flex-col gap-12 pb-8'
      >
        <m.h1
        variants={staggerChildrenVariants}
          className={cx("mb-8 text-9xl max-md:text-7xl mx-8 font- italic tracking-tighter", display.className)}
        >
          Jude Boachie
        </m.h1>
        {/* <m.p variants={staggerChildrenVariants} className={cx(serif.className, 'italic leading-loose pt-2')}>Bio</m.p> */}
        <m.div variants={staggerChildrenVariants}>
          <span className={cx(serif.className, 'text-lg font-medium')}>Light of the world.</span>{' '}
          Engineer at <Link className='underline underline-offset-2 decoration-neutral-500/50 hover:decoration-neutral-500' href={'https://sokoaerial.com'}>Soko Aerial</Link>.
          Mastering all manner of craft. Computer Engineering @KNUST.{' '}<span className='inline-flex'>Total Success <Image alt='sparkles emoji' src={'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/2728.png'} width={500} height={500} className='size-5' /></span>
        </m.div>
        <m.div variants={staggerChildrenVariants}>
          <p className={cx('text-xs leading-loose pt-2 font-medium')}>Past</p>
          <span>In the past, I{"'"}ve worked at <Link className='underline' href={'https://tevrozo.com'}>Tevrozo</Link> and Nalo Solutions.</span>
          {' '}Volunteered as the Pre-Collegiate Initiative Chair at <Link className='underline' href={'https://nsbeknust.wordpress.com'}>NSBE-KNUST</Link>
        </m.div>
        <m.div variants={staggerChildrenVariants}>
          <p className={cx('text-xs leading-loose pt-2 font-medium')}>Now</p>
          Developing skill through doing, happily exploring passion and interests, appreciating hidden gems in people's work. Mindful that I can do all things through <span className={cx(serif.className, 'font-medium text-lg leading-none')}>Christ</span> who strengthens me.
          Learning about design for human-computer interfaces.
        </m.div>
        <m.div variants={staggerChildrenVariants} className="flex flex-col">
          <p className={cx('leading-loose pt-2 text-xs font-medium')}>Connect</p>
          <div className='flex items-center gap-1.5 items-center mb-2'><TwitterIcon/><Link className='text-sm' href={'https://x.com/iamjudeboachie'}>@iamjudeboachie</Link></div>
          <div className='flex items-center gap-1.5 items-center mb-2'><GithubIcon/><Link className='text-sm' href={'https://x.com/iamjudeboachie'}>@jdboachie</Link></div>
          <div className='flex items-center gap-1.5 items-center mb-2'><EmailIcon/><Link className='text-sm' href={'mailto:jdboachie@gmail.com'}>jdboachie@gmail.com</Link></div>
        </m.div>
      </m.section>
    </LazyMotion>
  )
}
