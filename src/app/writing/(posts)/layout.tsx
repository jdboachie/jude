import { ArrowUpLeftIcon } from '@/app/icons/arrow-up-left'
import Link from 'next/link'
import styles from '../layout.module.css'
export default function MdxLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <aside className={styles.aside}><Link href={'/writing'}><ArrowUpLeftIcon />Writing</Link></aside>
      {children}
    </>
  )
}