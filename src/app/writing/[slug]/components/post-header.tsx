
import styles from './styles.module.css'
import LinkButton from './linkbutton';

export default function PostHeader ({
  slug,
  title,
  publishedAt
} : {
  slug: string,
  title: string,
  publishedAt: string
}) {

  return (
    <div className={styles.postheader}>
      <div className={styles.grid}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <time className={styles.publishedAt}>
          {publishedAt}
        </time>
      </div>
      <LinkButton link={`https://jude.vercel.app/writing/${slug}`} />
    </div>
  )
}