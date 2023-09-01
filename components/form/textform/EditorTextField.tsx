import { useLocalSearchParams } from 'expo-router'
import { useAnswer, useTextForm } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { textForm } from 'store'
import { useEffectOnce } from 'usehooks-ts'

const EditorTextField = observer(() => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { isLoading: isTextFormLoading } = useTextForm()
  const { trigger } = useAnswer(id)
  const [isComponentLoaded, setIsComponentLoaded] = React.useState(false)

  useEffectOnce(
    React.useCallback(() => {
      setIsComponentLoaded(false)
    }, [isComponentLoaded])
  )

  React.useEffect(() => {
    if (isComponentLoaded || isTextFormLoading) return
    trigger()
      .then((answer) => {
        console.log({ answer })
        textForm.setAnswer(answer)
        textForm.setLoading(false)
        textForm.setModified(false)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setIsComponentLoaded(true)
      })
  }, [isComponentLoaded, isTextFormLoading])

  return (
    <View
      style={styles.root}
    >
      <TextInput
        label="你的回答"
        placeholder='你的回答将会被用作面试依据。'
        multiline
        disabled={textForm.loading}
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
