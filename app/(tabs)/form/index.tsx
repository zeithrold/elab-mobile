import FormEntry from 'components/form/FormEntry'
import FormTitle from 'components/form/FormTitle'
import React from 'react'
import { ScrollView } from 'react-native'

export default function IndexScreen () {
  return (
    <ScrollView>
      <FormTitle />
      <FormEntry />
    </ScrollView>
  )
}
