import { useLocalSearchParams } from 'expo-router'
import { useAnswer } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { textForm } from 'store'
import config from 'store/config'
import { useEffectOnce } from 'usehooks-ts'

const EditorTextField = observer(() => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { trigger } = useAnswer(id)

  useEffectOnce(React.useCallback(() => {
    textForm.setTextFormLoading(true)
    trigger()
      .then((answer) => {
        textForm.setAnswer(answer)
        textForm.setTextFormLoading(false)
        textForm.setModified(false)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [id]))

  return (
    <View
      style={styles.root}
    >
      <TextInput
        label="你的回答"
        placeholder='你的回答将会被用作面试依据。'
        multiline
        disabled={textForm.textFormLoading || config.isAfter}
        value={textForm.answer}
        onChangeText={(text) => {
          textForm.setAnswer(text)
        }}
        contentStyle={{
          fontSize: 18,
          lineHeight: 24,
          minHeight: 200
          // paddingVertical: 16
        }}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 8
  }
})

export default EditorTextField
