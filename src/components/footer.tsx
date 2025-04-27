import { ClockClockwise } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { Time } from './toppie';

const API_URL = `https://api.github.com/repos/jdboachie/jude/commits/main`;

export default async function Footer() {
  let commitDate;
  let commitHash;

  try {
    const res = await fetch(API_URL, {
      headers: { 'Accept': 'application/vnd.github.v3+json' },
      next: { revalidate: 900 }, // Cache for an hour
    });

    if (!res.ok) throw new Error('Failed to fetch commit data');

    const data = await res.json();
    commitHash = data.sha.substring(0, 7);
    commitDate = new Date(data.commit.author.date).toLocaleDateString();
  } catch (error) {
    console.error(error);
  }

  return (
    <footer className="relative max-sm:mb-24 bg-primary-foreground border-t tabular-nums z-20 w-screen">
      <div className='max-w-6xl size-full mx-auto p-6 flex justify-between items-center text-muted-foreground'>
        <Link href={'https://github.com/jdboachie/jude'} className="flex items-center gap-1 text-xs font-normal no-underline inter-tnum">
          <span className='font-mono'>{commitHash}</span>
          <ClockClockwise className='size-3.5' />
          <p className="font-mono flex items-center gap-0.5"> {commitDate}</p>
        </Link>
        <div className='flex gap-2 font-mono'>
          <span className='text-xs'>Kumasi</span>
          <Time />
        </div>
      </div>
    </footer>
  );
}
