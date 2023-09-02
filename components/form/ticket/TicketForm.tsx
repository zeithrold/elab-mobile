import React from 'react'
import { View, StyleSheet } from 'react-native'
import NameInput from './NameInput'
import StudentIdInput from './StudentIdInput'
import GroupInput from './GroupInput'
import ClassInput from './ClassInput'
import ContactInput from './ContactInput'
import SubmitButton from './SubmitButton'
import { Divider } from 'react-native-paper'
import { useTicket } from 'lib/hooks'
import { useEffectOnce } from 'usehooks-ts'
import { ticket as ticketStore } from 'store'

export default function TicketForm () {
  const { data, trigger } = useTicket()
  useEffectOnce(
    React.useCallback(() => {
      ticketStore.setLoading(true)
      trigger()
        .then((ticket) => {
          ticketStore.setTicket(ticket)
        })
        .catch((err) => {
          console.error(err)
        })
    }, [data])
  )

  return (
    <View style={styles.container}>
      <NameInput />
      <ClassInput />
      <StudentIdInput />
      <ContactInput />
      <GroupInput />
      <Divider style={{ marginVertical: 16 }} />
      <SubmitButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  formItem: {
    marginVertical: 8
  }
})
