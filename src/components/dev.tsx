import { Alert, AlertTitle } from "@/components/ui/alert"

import React from 'react'

const Dev = () => {
  return (
    <div className="fixed top-0 w-screen z-10 sm:border-t-2 sm:border-dashed sm:border-red-500 items-center grid justify-center">
      <Alert variant={'destructive'} className="border-0 p-1">
        <AlertTitle className="font-mono text-xs text-[0.65rem] text-red-500">This site is still in development!</AlertTitle>
      </Alert>
    </div>

  )
}

export default Dev