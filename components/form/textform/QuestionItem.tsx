import React from 'react'
import { List, useTheme } from 'react-native-paper'
import { type Question } from 'type'

function Icon (props: { submitted: boolean }) {
  const {
    colors: {
      primary,
      error
    }
  } = useTheme()
  return (
    <List.Icon
      {...props}
      icon={props.submitted ? 'check' : 'question'}
      color={
        props.submitted ? primary : error
      }
    />
  )
}

export default function QuestionItem ({ question }: { question: Question }) {
  return (
    <List.Item
      title={question.question}
      description={question.text}
      left={props => <Icon {...props} submitted={question.submitted} />}
      onPress={() => {

      }}
    />
  )
}
