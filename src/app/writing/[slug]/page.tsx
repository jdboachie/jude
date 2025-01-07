import '.././styles.css'

import Link from 'next/link'
import { baseUrl } from '@/app/sitemap'
import { notFound } from 'next/navigation'
import { CustomMDX } from '@/app/components/mdx'
import { formatDate, getBlogPosts } from '@/app/writing/utils'
import { ArrowUpLeft } from '@/app/icons/arrow-up-left'


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
        <aside className='italics'><Link href={'/writing'}><ArrowUpLeft />Writing</Link></aside>
      <article>
        <div className="blog-title">
          <h1>
            {post.metadata.title}
          </h1>
          <time>
            {formatDate(post.metadata.publishedAt)}
          </time>
        </div>
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
