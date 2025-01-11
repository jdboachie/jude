import '.././styles.css'

import Link from 'next/link'
import { baseUrl } from '@/app/sitemap'
import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { formatDate, getBlogPosts } from '@/app/writing/utils'
import { ArrowUpLeftIcon } from '@/app/icons/arrow-up-left'
import PostHeader from './components/post-header'


export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params } : {params: Promise<{ slug: string }>}) {

  const slug = (await params).slug
  const post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params } : {params: Promise<{ slug: string }>}) {

  const slug = (await params).slug
  const post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <aside><Link href={'/writing'}><ArrowUpLeftIcon />Writing</Link></aside>
      <article>
        <PostHeader
          slug={post.slug}
          title={post.metadata.title}
          publishedAt={formatDate(post.metadata.publishedAt)}
        />
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
