import { ClockCounterClockwise } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

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
    <footer className="font-mono z-[100] max-w-6xl mx-auto p-6 max-sm:mb-8 flex justify-between items-center text-muted-foreground">
      <Link href={'https://github.com/jdboachie/jude'} className="text-xs font-normal no-underline inter-tnum">{commitHash}</Link>
      <p className="text-xs font-normal inter-tnum flex items-center gap-0.5"><ClockCounterClockwise /> {commitDate}</p>
    </footer>
  );
}
