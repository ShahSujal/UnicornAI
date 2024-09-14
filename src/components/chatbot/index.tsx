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
    <div className="h-screen flex flex-col justify-end items-end bg-[#eaeaea] gap-4">
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
