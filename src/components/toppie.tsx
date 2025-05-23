'use client'

import * as React from 'react'

const Toppie = () => {
  return (
    <div className='font-ui z-[100] max-w-6xl mx-auto relative p-6 md:p-6 sm:mb-8 flex justify-between items-center text-muted-foreground'>
      <div className='flex gap-2'>
        <Time />
     </div>
      <span className='text-xs'>Kumasi, Ghana</span>
    </div>
  )
}


export const Time = () => {
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
    <time className='text-xs font-mono tabular-nums tracking-tight'>{currentTime || '00:00:00 XM'}</time>
  )
}

export default Toppie