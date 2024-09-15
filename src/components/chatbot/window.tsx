import { ChatBotMessageProps } from '@/schemas/conversation.schema'
import React, { forwardRef } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import RealTimeMode from './real-time'
import Image from 'next/image'
import TabsMenu from '../tabs/intex'
import { BOT_TABS_MENU } from '@/constants/menu'
import ChatIcon from '@/icons/chat-icon'
import { TabsContent } from '../ui/tabs'
import { Separator } from '../ui/separator'
import Bubble from './bubble'
import { Responding } from './responding'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Paperclip, Send } from 'lucide-react'
import { Label } from '../ui/label'
import { CardDescription, CardTitle } from '../ui/card'
import Accordion from '../accordian'
// import UploadButton from '../upload-but6ton'

type Props = {
  errors: any
  register: UseFormRegister<ChatBotMessageProps>
  chats: { role: 'assistant' | 'user'; content: string; link?: string }[]
  onChat(): void
  onResponding: boolean
  domainName: string
  theme?: string | null
  textColor?: string | null
  help?: boolean
  realtimeMode:
    | {
        chatroom: string
        mode: boolean
      }
    | undefined
  helpdesk: {
    id: string
    question: string
    answer: string
    domainId: string | null
  }[]
  setChat: React.Dispatch<
    React.SetStateAction<
      {
        role: 'user' | 'assistant'
        content: string
        link?: string | undefined
      }[]
    >
  >
}

export const BotWindow = forwardRef<HTMLDivElement, Props>(
  (
    {
      errors,
      register,
      chats,
      onChat,
      onResponding,
      domainName,
      helpdesk,
      realtimeMode,
      setChat,
      textColor,
      theme,
      help,
    },
    ref
  ) => {
    console.log(    
      register,
      chats,
      onChat,
      onResponding,
      domainName,
      helpdesk,
      realtimeMode,
      setChat,
      textColor,
      theme,
      help,);
    

      console.log({
        chats
      });
      
    // console.log(errors)
    return (
      <div className="h-[640px] w-[450px] flex flex-col bg-gradient-to-tr to-[#000000] from-[#0000002f] rounded-xl mr-[80px] border-[1px] mt-5 z-10 overflow-hidden backdrop-blur-lg ">
      
        <div className="flex justify-between px-4 pt-4">
          <div className="flex gap-2">
            <Avatar className="w-10 h-10 object-cover">
              <AvatarImage
                src="/images/unicorn.png"
                alt="@unicorn"
                className='object-cover'
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            
            <div className="flex items-start flex-col">
              <h3 className="text-lg font-bold leading-none text-gray-200">
                Shopping Partner
              </h3>
              <p className="text-sm text-gray-400">{domainName.split('.com')[0]}</p>
              {realtimeMode?.mode && (
                <RealTimeMode
                  setChats={setChat}
                  chatRoomId={realtimeMode.chatroom}
                />
              )}
            </div>
          </div>
        </div>
        <TabsMenu
          triggers={BOT_TABS_MENU}
          className=" bg-transparent bg-black border-[1px] border-border m-2"
        >
          <TabsContent value="chat">
            <Separator orientation="horizontal" />
            <div className="flex flex-col h-full">
              <div
                style={{
                  background: theme || '',
                  color: textColor || '',
                }}
                className="px-3 flex h-[410px] flex-col py-5 gap-3 chat-window overflow-y-auto"
                ref={ref}
              >
                {chats.map((chat, key) => (
                  <Bubble
                    key={key}
                    message={chat}
                  />
                ))}
                {onResponding && <Responding />}
              </div>
              <form
                onSubmit={onChat}
                className="flex px-3 py-1 flex-col flex-1 bg-[#19181826]"
              >
                <div className="flex justify-between items-center">
                  <Input
                    {...register('content')}
                    placeholder="Type your message..."
                    className="focus-visible:ring-0 mt-2 rounded-lg pl-2 flex-1 p-0 focus-visible:ring-offset-0 bg-[#0d0d0d31] text-gray-300 outline-none border-none"
                  />
                  <Button
                    type="submit"
                    className="mt-2 mx-2"
                  >
                    <Send />
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="helpdesk">
            <div className="h-[485px] overflow-y-auto overflow-x-hidden p-4 flex flex-col gap-4">
              <div>
                <CardTitle>Help Desk</CardTitle>
                <CardDescription>
                  Browse from a list of questions people usually ask.
                </CardDescription>
              </div>
              <Separator orientation="horizontal" />

              {helpdesk.map((desk) => (
                <Accordion
                  key={desk.id}
                  trigger={desk.question}
                  content={desk.answer}
                />
              ))}
            </div>
          </TabsContent>
        </TabsMenu>
        <div className="flex justify-center bg-[#35353526] ">
          <p className="text-gray-300 font-bold text-xs">Powered By Unicorn Ai</p>
        </div>
      </div>
    )
  }
)

BotWindow.displayName = 'BotWindow'
