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
    <footer className="z-[100] max-w-5xl mx-auto p-6 mb-8 flex justify-between items-center font-mono text-muted-foreground text-xs">
      <Link href={'https://github.com/jdboachie/jude'} className="text-xs font-normal no-underline">{commitHash}</Link>
      <p className="text-xs font-normal">Updated {commitDate}</p>
    </footer>
  );
}
