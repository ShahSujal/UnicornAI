import React from 'react'
import { Spinner } from '@/components/component/common/spinner'
import { cn } from '@/lib/utils'

type LoaderProps = {
  loading: boolean
  children: React.ReactNode
  className?: string
  noPadding?: boolean
}

export const Loader = ({
  loading,
  children,
  className,
}: LoaderProps) => {
  return loading ? (
    <div className={cn(className || 'w-full py-5 flex justify-center')}>
      <Spinner />
    </div>
  ) : (
    children
  )
}
