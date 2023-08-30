import React from 'react'
import { List } from 'react-native-paper'
import { type Question } from 'type'
import QuestionItem from './QuestionItem'

export default function QuestionList () {
  const [questions, setQuestion] = React.useState<Question[]>([])
  return (
    <List.Section>
      <List.Subheader>问题列表</List.Subheader>
      {
        questions.map((question, index) => (
          <QuestionItem
            question={question}
            key={question.id}
          />
        ))
      }
    </List.Section>
  )
}
