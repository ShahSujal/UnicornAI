import { atom } from 'jotai'
// type ChatInitialValuesProps = {
//   realtime: boolean
//   setRealtime: React.Dispatch<React.SetStateAction<boolean>>
//   chatRoom: string | undefined
//   setChatRoom: React.Dispatch<React.SetStateAction<string | undefined>>
//   chats: {
//     message: string
//     id: string
//     role: 'assistant' | 'user' | null
//     createdAt: Date
//     seen: boolean
//   }[]
//   setChats: React.Dispatch<
//     React.SetStateAction<
//       {
//         message: string
//         id: string
//         role: 'assistant' | 'user' | null
//         createdAt: Date
//         seen: boolean
//       }[]
//     >
//   >
//   loading: boolean
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>
// }
const countAtom = atom(0)

const countryAtom = atom('Japan')

const citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka'])

const animeAtom = atom([
  {
    title: 'Ghost in the Shell',
    year: 1995,
    watched: true
  },
  {
    title: 'Serial Experiments Lain',
    year: 1998,
    watched: false
  }
])

// const ChatInitialValues: ChatInitialValuesProps = {
//   chatRoom: undefined,
//   setChatRoom: () => undefined,
//   chats: [],
//   setChats: () => undefined,
//   loading: false,
//   setLoading: () => undefined,
//   realtime: false,
//   setRealtime: () => undefined,
// }

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

