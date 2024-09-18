import ChangePassword from '@/components/settings/change-password'
import DarkModetoggle from '@/components/settings/dark-mode'
import React from 'react'

const Page = () => {
  return (
    <>
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
      
        <DarkModetoggle />
        <ChangePassword />
      </div>
    </>
  )
}

export default Page
