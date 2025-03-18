import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className='scroll-m-20 text-lg font-medium'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='scroll-m-20 pb-2 first:mt-0 text-lg font-medium'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='scroll-m-20 text-base font-medium [&:not(:first-child)]:mt-8'>{children}</h3>
    ),
    p: ({ children }) => (
      <p className='leading-[1.65] [&:not(:first-child)]:mt-6'>{children}</p>
    ),
    em: ({children}) => (
      <em className="serif-italic">{children}</em>
    ),
    code: ({children}) => (
      <code className='font-mono text-xs bg-secondary rounded-md p-1'>{children}</code>
    ),
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        width={5000}
        height={5000}
        className='border z-10 rounded-md sm:col-start-1 sm:col-span-2'
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}