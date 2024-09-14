import Section from '@/components/component/common/section-label'
// import UploadButton from '@/components/upload-button'
import { BotIcon } from '@/icons/bot-icon'

import Image from 'next/image'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  chatBot: {
    id: string
    icon: string | null
    welcomeMessage: string | null
  } | null
}

const EditChatbotIcon = ({ register, errors, chatBot }: Props) => {
  return (
    <div className="py-5 flex flex-col gap-5 items-start">
      <Section
        label="Chatbot icon"
        message="Change the icon for the chatbot."
      />
      {/* <UploadButton
        label="Edit Image"
        register={register}
        errors={errors}
      /> */}
      {/* {chatBot?.icon ? ( */}
        <div className="rounded-full overflow-hidden">
          <Image
            src={`https://images.unsplash.com/photo-1614853035986-b230d7d5679c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            alt="bot"
            width={100}
            height={100}
            className='rounded-full object-cover'
          />
        </div>
      {/* ) : (
        <div className="rounded-full cursor-pointer shadow-md w-20 h-20 flex items-center justify-center bg-grandis">
          <BotIcon />
        </div>
      )} */}
    </div>
  )
}

export default EditChatbotIcon
