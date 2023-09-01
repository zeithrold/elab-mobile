import Title from 'components/Title'
import React from 'react'
import { useTheme } from 'react-native-paper'
import { type Question } from 'type'

export default function EditorTitle ({ question }: { question: Question }) {
  const {
    colors: {
      primaryContainer,
      onPrimaryContainer
    }
  } = useTheme()
  return (
    <Title
      title={'✍️ ' + question.question}
      content={question.text}
      containerColor={primaryContainer}
      onContainerColor={onPrimaryContainer}
    />
  )
}
