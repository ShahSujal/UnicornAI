import { onGetAllCampaigns, onGetAllCustomers } from '@/actions/mail'
import EmailMarketing from '@/components/component/email-marketing'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const Page = async () => {
  const user = await currentUser()

  if (!user) return null
  const customers = await onGetAllCustomers(user.id)
  const campaigns = await onGetAllCampaigns(user.id)

  const subscription = {
    plan: 'PRO' as 'STANDARD' | 'PRO' | 'ULTIMATE',
    credits: 1000
  }
  return (
    <>
      {/* <InfoBar></InfoBar> */}
      <EmailMarketing
        campaign={campaigns?.campaign!}
        subscription={subscription!}
        domains={customers?.domains!}
      />
    </>
  )
}

export default Page
