import Link from 'next/link';
import {
  ArrowBendUpLeft as ArrowBendUpLeftIcon,
} from '@phosphor-icons/react/dist/ssr';

const BackLink = ({text, link} : {text: string, link: string}) => {
  return (
    <aside className='lg:col-start-1 lg:sticky lg:top-[120px] w-full z-0 pt-0 pb-8 self-start grid items-start'>
      <Link
        href={link}
        className='flex items-center w-fit gap-2 hover:text-primary no-underline hover:no-underline'
      >
        <ArrowBendUpLeftIcon weight='light' />
        <span className='text-lg font-serif italic'>{text}</span>
      </Link>
    </aside>
  )
}

export default BackLink