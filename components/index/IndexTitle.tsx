import React from 'react'
import { useTheme } from 'react-native-paper'
import Title from '../Title'

export default function IndexTitle () {
  const {
    colors: {
      primaryContainer,
      onPrimaryContainer
    }
  } = useTheme()
  return (
    <Title
      title='🎉 欢迎加入科中'
      content='这里是电气创新实践基地（科中）。在这款应用里，你将通过填报一些信息来参与科中加入报名。'
      containerColor={primaryContainer}
      onContainerColor={onPrimaryContainer}
    />
  )
}
