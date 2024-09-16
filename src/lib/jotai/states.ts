import { atom } from 'jotai'



type chats = {
  message: string
  id: string
  role: 'assistant' | 'user' | null
  createdAt: Date
  seen: boolean
}[]

export const chatRoomAtom = atom<string>()
export const chatAtom = atom<chats>([])
export const stepsAtom = atom<number>(1)
export const chatsLoadingAtom = atom<boolean>(true)
export const sidebarExpandAtom = atom<boolean>(true)

