import { useRouter } from 'expo-router'
import React from 'react'
import { List, useTheme } from 'react-native-paper'
import { textForm } from 'store'
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
      icon={props.submitted ? 'check-circle' : 'help-circle'}
      color={
        props.submitted ? primary : error
      }
    />
  )
}

export default function QuestionItem ({ question }: { question: Question }) {
  const router = useRouter()
  return (
    <List.Item
      title={question.question}
      description={question.text}
      left={props => <Icon {...props} submitted={question.submitted} />}
      onPress={() => {
        textForm.setId(question.id)
        router.push(`/textform/${question.id}`)
      }}
    />
  )
}
