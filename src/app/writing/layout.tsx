import styles from './layout.module.css'
export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <section className={styles.main}>
      {children}
    </section>
  )
}