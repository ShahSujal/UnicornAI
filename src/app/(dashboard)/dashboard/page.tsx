"use client"
import { getUserAppointmentDetails } from '@/actions/appointment'
import { userInfo } from '@/actions/auth'
import { getUserClients, getUserPlanInfo } from '@/actions/dashboard'
import DashBoard from '@/components/component/dashboard'
import React from 'react'

const page = async() => {
  const clients = await getUserClients()
  const bookings = await getUserAppointmentDetails()
  const plan = await getUserPlanInfo()
  const user = await userInfo()
  if (!user) {
    return <div></div>;
  }
  return (
    <DashBoard clients={clients} bookings={bookings} plan={plan} user={user}  />
  )
}

export default page