'use client'

import * as React from 'react'
// import { Cross } from '@phosphor-icons/react'

const Toppie = () => {
  return (
    <div className='z-[100] relative p-7 md:p-8 md:px-16 mb-8 flex justify-between items-center text-muted-foreground'>
      <Time />
      <span className='text-xs'>Kumasi, Ghana</span>
    </div>
  )
}

const Time = () => {
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
    <time className='text-xs max-sm:text-[10px] font-mono tracking-tighter'>{currentTime || 'XX:XX:XX XX'}</time>
  )
}

export default Toppie