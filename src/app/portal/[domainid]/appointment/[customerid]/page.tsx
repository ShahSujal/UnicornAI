import {
  onDomainCustomerResponses,
  onGetAllDomainBookings,
} from '@/actions/appointment'
import React from 'react'

type Props = { params: { domainid: string; customerid: string } }

const CustomerSignUpForm = async ({ params }: Props) => {
  const questions = await onDomainCustomerResponses(params.customerid)
  const bookings = await onGetAllDomainBookings(params.domainid)

  console.log(bookings, questions);
  
  if (!questions) return null

  return (
  <div className=' flex flex-col justify-center items-center'>
     Portal form
  </div>
  )
}

export default CustomerSignUpForm
