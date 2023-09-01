import React from 'react'
import { ActivityIndicator, List } from 'react-native-paper'
import QuestionItem from './QuestionItem'
import { useQuestionList, useTextForm } from 'lib/hooks'
import { useFocusEffect } from 'expo-router'

export default function QuestionList () {
  const { data: questions, isLoading: isQuestionLoading, mutate: mutateQuestionList } = useQuestionList()
  const { isLoading: isTextFormLoading, mutate: mutateTextForm } = useTextForm()
  useFocusEffect(React.useCallback(() => {
    void Promise.all([mutateQuestionList(), mutateTextForm()])
  }, []))
  const isLoading = isQuestionLoading || isTextFormLoading
  return (
    <List.Section>
      <List.Subheader>问题列表</List.Subheader>
      {
        questions === undefined || isLoading
          ? <ActivityIndicator />
          : questions.map((question) => (
            <QuestionItem
              question={question}
              key={question.id}
            />
          ))
      }
    </List.Section>
  )
}
