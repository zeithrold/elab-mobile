import TicketAppbar from 'components/form/ticket/TicketAppbar'
import TicketForm from 'components/form/ticket/TicketForm'
import TicketTitle from 'components/form/ticket/TicketTitle'
import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import { useTheme } from 'react-native-paper'

export default function TicketScreen () {
  const {
    colors: {
      background
    }
  } = useTheme()
  return (
    <View style={[styles.root, { backgroundColor: background }]}>
      <TicketAppbar />
      <ScrollView>
        <TicketTitle />
        <TicketForm />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
