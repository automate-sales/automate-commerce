import type { MDXComponents } from 'mdx/types'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{paddingBottom: '15px', fontSize: '1.8rem'}}>{children}</h1>
    ),
    p: ({ children }) => (
      <p style={{paddingBottom: '12px', fontSize: '1rem'}}>{children}</p>
    ),
    a: ({ children, href }) => (
      <Link href={href as Url} className='text-blue-400 hover:underline'>{children}</Link>
    ),
    h2: () => (
      <div/>
    ),
    hr: () => (
      <div/>
    ),
    ...components,
  }
}