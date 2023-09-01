import QuestionList from 'components/form/textform/QuestionList'
import TextFormTitle from 'components/form/textform/TextFormTitle'
import React from 'react'
import { ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper'

export default function TextFormScreen () {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content
          title="文本填报"
        />
      </Appbar.Header>
      <ScrollView>
        <TextFormTitle />
        <QuestionList />
      </ScrollView>
    </>
  )
}
