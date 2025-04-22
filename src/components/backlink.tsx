import Link from 'next/link';
import {
  ArrowArcLeft as BackIcon,
} from '@phosphor-icons/react/dist/ssr';

const BackLink = ({text, link} : {text: string, link: string}) => {
  return (
    <aside className='md:col-start-1 md:sticky md:top-[120px] w-full z-0 pb-8 self-start grid items-start'>
      <Link
        href={link}
        prefetch={true}
        className='flex items-center w-fit gap-1 no-underline hover:no-underline text-muted-foreground hover:text-primary transition-colors duration-300'
      >
        <BackIcon />
        <span className='sm:text-lg text-[1rem] font-serif italic leading-[0]'>{text}</span>
      </Link>
    </aside>
  )
}

export default BackLink