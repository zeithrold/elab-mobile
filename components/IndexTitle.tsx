import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, useTheme } from 'react-native-paper'

export default function IndexTitle () {
  const {
    colors: {
      primaryContainer,
      onPrimaryContainer
    }
  } = useTheme()
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: primaryContainer
        }
      ]}
    >
      <Text
        style={[
          {
            color: onPrimaryContainer
          },
          styles.title
        ]}
        variant='headlineMedium'
      >
        🎉 欢迎加入科中
      </Text>
      <Text
        style={[
          {
            color: onPrimaryContainer
          }
        ]}
        variant='bodyLarge'
      >
        这里是电气创新实践基地（科中）。在这款应用里，你将通过填报一些信息来参与科中加入报名。
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 12,
    borderRadius: 12
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4
  }
})
