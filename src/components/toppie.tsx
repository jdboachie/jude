'use client'

import * as React from 'react'
import { Cross } from '@phosphor-icons/react'

const Toppie = () => {

  const [currentTime, setCurrentTime] = React.useState<string>('');

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Intl.DateTimeFormat('en-US',
        {
          timeZone: 'Africa/Accra',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true, // 24-hour format, set to true for 12-hour format
        }
      );
      setCurrentTime(now.format(new Date()));
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='z-[100] relative p-4 md:p-8 md:px-16 flex justify-between items-center text-muted-foreground'>
      <time className='text-xs max-sm:text-[10px] font-mono font-light'>{currentTime || 'XX:XX:XX XX'}</time>
      <Cross weight='duotone' className='size-3 sm:size-4' />
    </div>
  )
}

export default Toppie