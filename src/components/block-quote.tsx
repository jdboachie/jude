import * as React from 'react'

const BlockQuote = ({children} : {children: React.ReactNode}) => {
  return (
    <blockquote className='lg:col-start-3 text-xs mt-6 text-muted-foreground'>{children}</blockquote>
  )
}

export default BlockQuote