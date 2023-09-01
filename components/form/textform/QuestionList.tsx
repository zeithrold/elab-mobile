import React from 'react'
import { ActivityIndicator, List } from 'react-native-paper'
import QuestionItem from './QuestionItem'
import { useQuestionList } from 'lib/hooks'
import { useFocusEffect } from 'expo-router'

export default function QuestionList () {
  const { data: questions, isLoading, mutate } = useQuestionList()
  useFocusEffect(React.useCallback(() => {
    void mutate()
  }, []))
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
