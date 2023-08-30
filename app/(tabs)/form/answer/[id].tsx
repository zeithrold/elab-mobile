import React from 'react'
import { View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'

const AnswerEditor = () => {
  // will be replaced with SWR
  const [question, setQuestion] = React.useState({
    id: '',
    question: '',
    text: ''
  })
  const [anaswer, setAnswer] = React.useState('')
  React.useEffect(() => {
    setQuestion({
      id: '1',
      question: '你的姓名是？',
      text: '请填写你的姓名'
    })
  })
  return (
    <View>
      <Text>
        {question.question}
      </Text>
      <Text>
        {question.text}
      </Text>
      <TextInput
        value={anaswer}
        onChangeText={setAnswer}
      />
    </View>
  )
}

export default AnswerEditor
