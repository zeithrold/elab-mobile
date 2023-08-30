import React from 'react'
import { View, StyleSheet } from 'react-native'
import NameInput from './NameInput'
import StudentIdInput from './StudentIdInput'
import GroupInput from './GroupInput'
import ClassInput from './ClassInput'
import ContactInput from './ContactInput'
import SubmitButton from './SubmitButton'
import { Divider } from 'react-native-paper'

export default function TicketForm () {
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
