import Link from 'next/link';
import {
  ArrowArcLeft as BackIcon,
} from '@phosphor-icons/react/dist/ssr';

const BackLink = ({text, link} : {text: string, link: string}) => {
  return (
    <aside className='lg:col-start-1 lg:sticky lg:top-[126px] w-full z-0 pt-1 pb-8 self-start grid items-start'>
      <Link
        href={link}
        prefetch={true}
        className='flex items-center w-fit gap-2 no-underline hover:no-underline text-muted-foreground hover:text-primary transition-colors duration-300'
      >
        <BackIcon />
        <span className='text-lg font-serif italic leading-[0]'>{text}</span>
      </Link>
    </aside>
  )
}

export default BackLink