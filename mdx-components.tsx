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
      <h1 className='scroll-m-20 text-lg font-ui font-semibold'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='scroll-m-20 pb-2 first:mt-0 text-lg font-ui font-semibold'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='scroll-m-20 text-base font-ui font-medium [&:not(:first-child)]:mt-12'>{children}</h3>
    ),
    p: ({ children }) => (
      <p className='[&:not(:first-child)]:mt-6'>{children}</p>
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
        // className='mt-6 sm:col-span-3 max-lg:w-full max-lg:max-w-5xl mx-auto border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 rounded-xl z-10 border-red-500'
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}