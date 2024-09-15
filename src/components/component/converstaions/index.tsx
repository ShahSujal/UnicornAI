"use client";
import { useConversation } from "@/hooks/conversation/use-conversation";
import React, { useEffect, useState } from "react";
import ConversationSearch from "@/components/component/converstaions/search";
import { Loader } from "@/components/component/common/loader";
import ChatCard from "@/components/component/converstaions/chat-card";
import { CardDescription } from "@/components/ui/card";
import { onGetChatMessages, onGetConversationMode, onGetDomainChatRooms } from "@/actions/conversation";
import { chatAtom, chatRoomAtom } from "@/lib/jotai/states";
import { useAtom } from "jotai";

type Props = {
  domains?:
    | {
        name: string;
        id: string;
        icon: string;
      }[]
    | undefined;
};

const ConversationMenu = ({ domains }: Props) => {
  const { register, chatRooms, loading } = useConversation();
  const [chats, setChats] = useAtom(chatAtom)
  const [chatroom,setChatRoom] = useAtom(chatRoomAtom)
  const showChats = async (id: string) => {
    setChatRoom(id)
    const messages = await onGetChatMessages(id)
   if (!messages) {
    return
   }
    setChats(messages[0].message)
    const get = await onGetConversationMode(id);
  };

  return (
    <div className="py-3 px-0 w-[450px] ">
      {/* <TabsMenu triggers={TABS_MENU}>
        <TabsContent value="unread"> */}
          <ConversationSearch domains={domains} register={register} />
          <div className="flex flex-col">
            <Loader loading={loading}>
              {chatRooms.length ? (
                chatRooms.slice(6,7).map((room) => (
                  <ChatCard
                    seen={room.chatRoom[0].message[0]?.seen}
                    id={room.chatRoom[0].id}
                    onChat={() => showChats(room.chatRoom[0].id)}
                    createdAt={room.chatRoom[0].message[0]?.createdAt}
                    key={room.chatRoom[0].id}
                    title={room.email!}
                    description={room.chatRoom[0].message[0]?.message}
                  />
                ))
              ) : (
                <CardDescription>No chats for you domain</CardDescription>
              )}
            </Loader>
          </div>
        {/* </TabsContent>
      </TabsMenu> */}
    </div>
  );
};

export default ConversationMenu;
