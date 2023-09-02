import EditorAppbar from 'components/form/textform/EditorAppbar'
import EditorTextField from 'components/form/textform/EditorTextField'
import EditorTitle from 'components/form/textform/EditorTitle'
import { useLocalSearchParams } from 'expo-router'
import { useQuestion } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ActivityIndicator, useTheme } from 'react-native-paper'

const AnswerEditor = observer(() => {
  const {
    colors: {
      background
    }
  } = useTheme()
  const { id } = useLocalSearchParams<{ id: string }>()
  const { data: question, isLoading } = useQuestion(id)
  return (
    <View
      style={[styles.root, { backgroundColor: background }]}
    >
      <EditorAppbar />
      {
        isLoading || question === undefined
          ? <ActivityIndicator />
          : <EditorTitle question={question} />
      }
      <EditorTextField />
    </View>
  )
})

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})

export default AnswerEditor
