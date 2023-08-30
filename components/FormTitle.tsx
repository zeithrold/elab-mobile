import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, useTheme } from 'react-native-paper'

export default function FormTitle () {
  const {
    colors: {
      secondaryContainer,
      onSecondaryContainer
    }
  } = useTheme()
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: secondaryContainer
        }
      ]}
    >
      <Text
        style={[
          {
            color: onSecondaryContainer
          },
          styles.title
        ]}
        variant='headlineMedium'
      >
        📝填写你的报名信息
      </Text>
      <Text
        style={[
          {
            color: onSecondaryContainer,
            marginBottom: 8
          }
        ]}
        variant='bodyLarge'
      >
        电气创新实践基地的加入需要您的一些信息，这些信息将用于我们的管理和您的加入。
      </Text>
      <Text
        style={[
          {
            color: onSecondaryContainer
          }
        ]}
        variant='bodyLarge'
      >
        您需要同时填写您的基本信息和问题表单。填写完成后，选择面试场次即可完成报名。
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
