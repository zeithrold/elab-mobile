import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Appbar, HelperText, List, TextInput } from 'react-native-paper'

export default function TabTwoScreen () {
  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Content
          title="报名"
        />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <View>
          <List.Section>
            <List.Subheader>基本信息填报</List.Subheader>
            <View style={styles.form}>
              <TextInput label='你的姓名' error />
              <HelperText type='error'>请填写。</HelperText>

              <TextInput label='学号' error keyboardType='number-pad' />
              <HelperText type='error'>请填写。</HelperText>
            </View>
          </List.Section>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1
  },
  form: {
    padding: 12
  }
})
