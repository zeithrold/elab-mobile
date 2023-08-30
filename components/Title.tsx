import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export interface TitleProps {
  title: string
  content: string
  containerColor: string
  onContainerColor: string
}

export default function Title ({
  title,
  content,
  containerColor,
  onContainerColor
}: TitleProps) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: containerColor
        }
      ]}
    >
      <Text
        style={[
          {
            color: onContainerColor
          },
          styles.title
        ]}
        variant='headlineMedium'
      >
        {title}
      </Text>
      <Text
        style={[
          {
            color: onContainerColor
          }
        ]}
        variant='bodyLarge'
      >
        {content}
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
