'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import MaxMenu from './maximized-menu'
import { MinMenu } from './minimized-menu'
import { useAtom } from 'jotai'
import { sidebarExpandAtom } from '@/lib/jotai/states'
import { useClerk } from '@clerk/nextjs'
import { redirect, usePathname } from 'next/navigation'

type Props = {
  domains:
    | {
        id: string
        name: string
        icon: string
      }[]
    | null
    | undefined
}

const SideBar = ({ domains }: Props) => {
  // const { expand, onExpand, page, onSignOut } = useSideBar()
  const pathname = usePathname()
  const page = pathname.split('/').pop()
  const { signOut } = useClerk()
  const [expand, setExpand] = useAtom(sidebarExpandAtom)
  const onSignOut = () => signOut(() => redirect('/'))
  return (
    <div
      className={cn(
        'bg-cream dark:bg-neutral-950 h-full w-[60px] fill-mode-forwards fixed md:relative',
        expand === true
          ? 'animate-open-sidebar'
          : expand === false && 'animate-close-sidebar'
      )}
    >
      {expand ? (
        <MaxMenu
          domains={domains}
          current={page!}
          onSignOut={onSignOut}
        />
      ) : (
        <MinMenu
          domains={domains}
          current={page!}
          onSignOut={onSignOut}
        />
      )}
    </div>
  )
}

export default SideBar
