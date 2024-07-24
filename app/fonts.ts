import { Inter, Newsreader } from 'next/font/google'

export const sans = Inter({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const serif = Newsreader({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  style: ['italic', 'normal']
})