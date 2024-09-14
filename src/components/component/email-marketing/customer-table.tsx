'use client'
import React from 'react'
import { DataTable } from '../../table'
import { EMAIL_MARKETING_HEADER } from '@/constants/menu'
import { TableCell, TableRow } from '../../ui/table'
import { Card } from '../../ui/card'
import { cn } from '@/lib/utils'


type CustomerTableProps = {
  domains: {
    customer: {
      Domain: {
        name: string
      } | null
      id: string
      email: string | null
    }[]
  }[]
  onSelect(email: string): void
  select: string[]
  onId(id: string): void
  id?: string
}

export const CustomerTable = ({
  domains,
  onSelect,
  select,
  onId,
  id,
}: CustomerTableProps) => {
  return (
    <DataTable headers={EMAIL_MARKETING_HEADER}>
      {domains.map((domain) =>
        domain.customer.map((c) => (
          <TableRow key={c.id}>
            <TableCell>
              <Card
                onClick={() => onSelect(c.email as string)}
                className={cn(
                  'rounded-full w-5 h-5 border-4 cursor-pointer',
                  select.includes(c.email as string) ? 'bg-orange' : 'bg-peach'
                )}
              />
            </TableCell>
            <TableCell>{c.email}</TableCell>
            <TableCell>{c.email}</TableCell>
            <TableCell className="text-right">{c.Domain?.name}</TableCell>
          </TableRow>
        ))
      )}
    </DataTable>
  )
}
