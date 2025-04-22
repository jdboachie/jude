import React from 'react'

const Quote = ({quote, by, from} : {quote: string, by?: string, from: string}) => {
  return (
    <div className='mt-10 mb-6'>
      <p className="py-4  text-3xl italic font-medium font-serif">“{quote}”</p>
      <div className="sm:text-right sm:flex justify-end">
        {by && <p className='text-sm flex'>
          {by}
          <span className='sm:flex hidden text-sm'>,</span>
        </p>}
        <p className="text-sm text-muted-foreground sm:pl-1 flex sm:justify-end sm:text-right">
          {from}
        </p>
      </div>
    </div>
  )
}

export default Quote