import { serif } from 'app/fonts'
import { cx } from 'lib/utils'
import Link from 'next/link'

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
    <aside className="-ml-[8px] mb-16 tracking-tight justify-end flex">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pl-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={cx(
                    "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1",
                    name === 'Index' ? `italic ${serif.className}` : ''
                  )}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
