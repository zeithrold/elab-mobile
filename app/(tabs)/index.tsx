import UserStatus from 'components/UserStatus'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

export default function BasicInfoScreen () {
  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Content
          title="首页"
        />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <View style={styles.text}>
          <Text variant='headlineLarge'>欢迎来到科中</Text>
          <Text variant='bodyLarge'>
            你好
          </Text>
        </View>
        <UserStatus />
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
  text: {
    padding: 12
  }
})
