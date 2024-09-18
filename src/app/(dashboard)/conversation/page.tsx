import { onGetAllAccountDomains } from '@/actions/settings'
import ConversationMenu from '@/components/component/converstaions'
import Messenger from "@/components/component/converstaions/messenger"
import React from 'react'

const ConversationPage = async () => {
  const domains = await onGetAllAccountDomains()
  return (
    <div className="w-full h-full flex">
      <ConversationMenu domains={domains?.domains} />
      <div className="w-full flex flex-col">
        <Messenger />
      </div>
    </div>
  )
}

export default ConversationPage
