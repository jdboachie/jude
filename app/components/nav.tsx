import Link from 'next/link'
import { cx } from 'lib/utils'


const navItems = {
  '/': {
    name: 'Index',
  },
  '/writing': {
    name: 'Writing',
  },
  '/projects': {
    name: 'Projects'
  }
}

export function Navbar() {
  return (
    <div className='relative py-8 flex justify-end'>
      <nav
        className="flex top-0 items-end relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <div className="flex gap-2 space-x-0 justify-end">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className={cx(
                  "transition-all text-sm no-underline hover:underline underline-offset-0 text-neutral-700 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200 flex align-end justify-end relative py-1 m-1",
                  // name === 'Index' ? `${sans.className}` : ''
                )}
              >
                {name}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
