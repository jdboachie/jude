import LocalFont from 'next/font/local'

import { Tapestry, EB_Garamond } from 'next/font/google'

export const sans = LocalFont({
  // src: 'fonts/Inter-VariableFont_slnt,wght.ttf'
  src: 'fonts/test-soehne-buch.woff2'
})

export const serif = LocalFont({
  src: 'fonts/Newsreader-Italic-VariableFont_opsz,wght.ttf',
})

export const display = EB_Garamond({
  weight: ['400', '700'],
  style: ['italic',], //, 'normal
  subsets: ['latin']
})