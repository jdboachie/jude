import Link from 'next/link'
import React from 'react'

const Quote = ({quote, by, from, link} : {quote: string, by?: string, from: string, link: string}) => {
  return (
    <Link href={link} className='no-underline mt-10 mb-6 gap-4'>
      <q className="text-2xl italic font-light font-serif">
        {quote}
      </q>
      <div className="mt-1 grid w-full lg:flex justify-end">
        <div className='max-w-sm w-full'>
          {by &&
            <div className='text-sm flex grow'>
              <hr className='bg-muted grow self-center max-sm:hidden mr-2' />
              <div className='w-fit flex gap-1'>
                <p>{by},</p>
                <p className="text-sm text-muted-foreground sm:pl-1 flex sm:justify-end sm:text-right">
                  {from}
                </p>
              </div>

            </div>
          }
        </div>
      </div>
    </Link>
  )
}

export default Quote