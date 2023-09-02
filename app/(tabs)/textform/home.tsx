import QuestionList from 'components/form/textform/QuestionList'
import TextFormTitle from 'components/form/textform/TextFormTitle'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'

const TextFormScreen = observer(() => {
  const {
    colors: {
      background
    }
  } = useTheme()
  return (
    <View style={[styles.root, { backgroundColor: background }]}>
      <Appbar.Header>
        <Appbar.Content
          title="文本填报"
        />
      </Appbar.Header>
      <ScrollView>
        <TextFormTitle />
        <QuestionList />
      </ScrollView>
    </View>
  )
})

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})

export default TextFormScreen
