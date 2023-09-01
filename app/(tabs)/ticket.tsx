import TicketAppbar from 'components/form/ticket/TicketAppbar'
import TicketForm from 'components/form/ticket/TicketForm'
import TicketTitle from 'components/form/ticket/TicketTitle'
import React from 'react'
import { ScrollView } from 'react-native'

export default function TicketScreen () {
  return (
    <>
      <TicketAppbar />
      <ScrollView>
        <TicketTitle />
        <TicketForm />
      </ScrollView>
    </>
  )
}
