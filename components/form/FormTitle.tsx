import React from 'react'
import { useTheme } from 'react-native-paper'
import Title from '../Title'

export default function FormTitle () {
  const {
    colors: {
      tertiaryContainer,
      onTertiaryContainer
    }
  } = useTheme()
  return (
    <Title
      title='📝 填写你的报名信息'
      content='电气创新实践基地的加入需要您的一些信息，这些信息将用于我们的管理和您的加入。'
      containerColor={tertiaryContainer}
      onContainerColor={onTertiaryContainer}
    />
  )
}
