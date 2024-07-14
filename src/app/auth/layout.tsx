import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const user = await currentUser()

  if (user) redirect('/')

  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
       <div className=' w-full h-[90px] flex flex-row items-center'>
       <Image
          src="/images/unicorn.webp"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: '40px',
            height: '40px',
          }}
          width={0}
          height={0}
        />
        <h1 className=' text-[30px] text-black font-semibold font-mono mx-4'>Unicorn Ai</h1>
       </div>
        {children}
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream  flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Hi, I’m Unicorn Ai
        </h2>
        <p className="text-iridium md:text-sm mb-10">
          Unicorn Ai is cutting edge in market{' '}
          
          research and analysis
        </p>
        <Image
          src="/images/chatbot.png"
          alt="app image"
          loading="lazy"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-44"
          width={0}
          height={0}
        />
      </div>
    </div>
  )
}

export default Layout