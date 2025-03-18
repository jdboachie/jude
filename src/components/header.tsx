import CopyButton from './copy-button';

const Header = (
  {
    link,
    title,
    desc,
    date,
    children
  }:{
    link?: string,
    title?: string,
    desc?: string,
    date?: string,
    children?: React.ReactNode
  }
) => {
  return (
    <header
      className='
        lg:col-span-2 lg:col-start-2 flex flex-col w-full
        max-sm:min-w-0 max-lg:mx-auto lg:grid lg:grid-cols-[65ch_1fr]
      '
    >
      <div className='relative sm:col-start-1 mb-8'>
        {title && <p className="sm:col-start-2 font-medium">{title}</p>}
        {desc && <p className="text-muted-foreground text-sm">{desc}</p>}
        {date && <p className="text-muted-foreground text-sm">{date}</p>}
        {children}
        {link && <CopyButton url={link} />}
      </div>
    </header>
  )
}

export default Header