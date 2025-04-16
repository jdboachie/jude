'use client'

import * as React from 'react'

const Toppie = () => {
  return (
    <div className='z-[100] max-w-6xl mx-auto relative p-6 md:p-6 sm:mb-8 flex justify-between items-center text-muted-foreground'>
      <div className='flex gap-2'>
        <Time />
        <DevIndicator />
     </div>
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
    <time className='text-xs max-sm:text-[10px] inter-tnum'>{currentTime || '00:00:00 XM'}</time>
  )
}

const DevIndicator = () => {
  return (
    <p className="dark:shadow-inner -translate-y-[1.2px] bg-secondary flex text-xs max-sm:text-[10px] rounded-full border px-2 truncate">
      v2
    </p>
  )
}

export default Toppie