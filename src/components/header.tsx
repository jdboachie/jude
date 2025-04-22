import CopyButton from './copy-button';

const Header = (
  {
    draft,
    isNew,
    link,
    title,
    desc,
    date,
    children
  }:{
    draft?: boolean,
    isNew?: boolean,
    link?: string,
    title?: string,
    desc?: string,
    date?: string,
    children?: React.ReactNode
  }
) => {
  return (
    <header
      className=' font-ui
        lg:col-span-2 lg:col-start-2 flex flex-col w-full
        max-sm:min-w-0 max-lg:mx-auto lg:grid lg:grid-cols-[65ch_1fr]
      '
    >
      <div className='relative sm:col-start-1 mb-6'>
        {title &&
          <div className="sm:col-start-2 flex gap-2 items-center">
            <p className='font-medium'>{title}</p>
            {draft && <div className='h-fit text-xs items-center flex border border-amber-500/50 px-2 bg-amber-400 dark:bg-amber-700 rounded-full'>Draft</div>}
            {isNew && <div className='h-fit text-xs items-center flex border border-blue-500/50 px-2 bg-gradient-to-t from-blue-400 to-cyan-300 dark:from-blue-700 dark:to-cyan-600 rounded-full'>New</div>}
          </div>
        }
        {desc && <p className="text-muted-foreground text-sm">{desc}</p>}
        {date && <p className="text-muted-foreground text-sm">{date}</p>}
        {children}
        {link && <CopyButton url={link} />}
      </div>
    </header>
  )
}

export default Header