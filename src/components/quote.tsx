import React from 'react'

const Quote = ({quote, by, from} : {quote: string, by?: string, from: string}) => {
  return (
    <div className='mt-10 mb-6 gap-4'>
      <q className="text-2xl italic font-light font-serif">
        {quote}
      </q>
      <div className="mt-1 grid justify-end">
        {by &&
          <p className='text-sm flex justify-end'>
            {by}
            <span className='sm:flex hidden text-sm'>,</span>
          </p>
        }
        <p className="text-sm text-muted-foreground sm:pl-1 flex sm:justify-end sm:text-right">
          {from}
        </p>
      </div>
    </div>
  )
}

export default Quote