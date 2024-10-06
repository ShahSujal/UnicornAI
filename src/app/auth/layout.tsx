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
        <h1 className=' text-[30px] text-black font-semibold font-fragment mx-4'>Unicorn Ai</h1>
       </div>
        {children}
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream  flex-col pt-10 gap-3">
        <h2 className="text-gray-700 md:text-[60px] font-paps ml-8 z-10 font-bold">
          Hi, I’m your assistant
        </h2>
        <p className="text-iridium md:text-sm mb-10 ml-8 z-10">
        Unicorn AI is a powerful platform designed to help businesses enhance user engagement and growth. It offers personalized email marketing, real-time sentiment analysis using generative AI, and an AI chatbot for one-on-one customer interactions. With features like in-app notifications and a seamless SDK integration, businesses can easily manage customer support, track engagement, and boost satisfaction. Unicorn AI provides an all-in-one solution for streamlined business operations.
        </p>
        <video
          src="/images/blob.mp4"
          autoPlay
          loop
          muted
          className="absolute shrink-0 !w-[1600px] top-0"
          width={0}
          height={0}
        />
      </div>
    </div>
  )
}

export default Layout