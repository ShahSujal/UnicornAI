'use client'
import { useChatBot } from '@/hooks/chatbot/use-chatbot'
import React from 'react'
import { BotWindow } from './window'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { BotIcon } from '@/icons/bot-icon'

type Props = {}

const AiChatBot = (props: Props) => {
  const {
    onOpenChatBot,
    botOpened,
    onChats,
    register,
    onStartChatting,
    onAiTyping,
    messageWindowRef,
    currentBot,
    loading,
    onRealTime,
    setOnChats,
    errors,
  } = useChatBot()

  // console.log({
  //   onOpenChatBot,
  //   botOpened,
  //   onChats,
  //   register,
  //   onStartChatting,
  //   onAiTyping,
  //   messageWindowRef,
  //   currentBot,
  //   loading,
  //   onRealTime,
  //   setOnChats,
  //   errors,
  // });
  

  return (
    <div className="h-screen flex flex-col justify-end items-end bg-[#171717] gap-4">
      {botOpened && (
        <BotWindow
          errors={errors}
          setChat={setOnChats}
          realtimeMode={onRealTime}
          helpdesk={currentBot?.helpdesk!}
          domainName={currentBot?.name!}
          ref={messageWindowRef}
          help={currentBot?.chatBot?.helpdesk}
          theme={currentBot?.chatBot?.background}
          textColor={currentBot?.chatBot?.textColor}
          chats={onChats}
          register={register}
          onChat={onStartChatting}
          onResponding={onAiTyping}
        />
      )}

          <div className=' w-96 h-[120px] absolute right-44 bottom-8 bg-gradient-to-tr from-[#fffac7] to-[#f3b8cf] blur-[96px]'>
          
          </div>
          <div className=' w-96 h-[120px] absolute right-0 top-8 bg-gradient-to-tr from-[#fffac7] to-[#f3b8cf] blur-[96px]'>
          
          </div>
          <div className=' w-96 h-[120px] absolute left-0 top-8 bg-gradient-to-tr from-[#0e84f3] to-[#f60264] blur-[96px]'>
          
          </div>
          <div className='absolute left-4 text-[60px] text-gray-200 text-center font-paps font-bold top-1/4 '>
          Talk with your Buisness<br/> partner Unicorn Ai
          </div>
     
        {/* {currentBot?.chatBot?.icon ? ( */}
         <div className=' w-24 h-24 bg-gradient-to-tr to-[#e9b5ea] from-[#debdf8] rounded-full justify-center flex items-center cursor-pointer ' onClick={onOpenChatBot}>
         <Image
            src={`/images/unicorn.png`}
            alt="bot"
            height={500}
            width={500}
            className=' w-20 h-20 object-contain'
          />
         </div>
        {/* ) : ( */}
          {/* <BotIcon /> */}
        {/* )} */}
      </div>
    // </div>
  )
}

export default AiChatBot
