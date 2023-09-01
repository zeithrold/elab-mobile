import EditorAppbar from 'components/form/textform/EditorAppbar'
import EditorTextField from 'components/form/textform/EditorTextField'
import EditorTitle from 'components/form/textform/EditorTitle'
import { useLocalSearchParams } from 'expo-router'
import { useQuestion } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

const AnswerEditor = observer(() => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { data: question, isLoading } = useQuestion(id)
  return (
    <>
      <EditorAppbar />
      {
        isLoading || question === undefined
          ? <ActivityIndicator />
          : <EditorTitle question={question} />
      }
      <EditorTextField />
    </>
  )
})

export default AnswerEditor
