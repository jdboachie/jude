'use client'

import { GeistMono } from 'geist/font/mono';
import { cx } from 'lib/utils';
import Link from 'next/link'
import * as React from 'react'
// import { m } from 'framer-motion'
// import { staggerChildrenVariants } from 'app/page';


function ArrowIcon() {
  return (
    <svg
      className='hover:-translate-x-1 hover:-translate-y-1 duration-500 ease-out'
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return date.toLocaleDateString(undefined, options);
}

// Function to format the time into a human-readable format
function formatTime(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  };

  return date.toLocaleTimeString(undefined, options);
}


export default function Footer() {

  const [currentDate, setCurrentDate] = React.useState<string>('');
  const [currentTime, setCurrentTime] = React.useState<string>('');

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentDate(formatDate(now));
      setCurrentTime(formatTime(now));
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="footer mb-16 col-span-6 border-t border-t-neutral-300 dark:border-t-neutral-800">
      <ul className="text-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 sm:flex-row sm:space-x-4 sm:space-y-0 dark:text-neutral-400">
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <p className="mr-2 h-7 items-center flex underline-offset-4">rss</p>
            <ArrowIcon />
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jdboachie"
          >
            <p className="mr-2 h-7 items-center flex underline-offset-4">github</p>
            <ArrowIcon />
          </Link>
        </li>
        {/* <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com/templates/next.js/portfolio-starter-kit"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">view source</p>
          </a>
        </li> */}
      </ul>
      <div className="flex justify-between mt-8">
        <p className="text-neutral-600 text-sm dark:text-neutral-300">
          © {new Date().getFullYear()} MIT Licensed
        </p>
        <p className={cx(GeistMono.className, "text-neutral-600 text-sm dark:text-neutral-300")}>
          {currentTime}
        </p>
      </div>
    </footer>
  )
}
