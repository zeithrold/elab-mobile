import FormEntry from 'components/FormEntry'
import FormTitle from 'components/FormTitle'
import React from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-paper'

export default function IndexScreen () {
  return (
    <ScrollView>
      <FormTitle />
      <FormEntry />
    </ScrollView>
  )
}
