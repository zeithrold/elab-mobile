import React from 'react'
import { useTheme } from 'react-native-paper'
import Title from '../../Title'

export default function TextFormTitle () {
  const {
    colors: {
      primaryContainer,
      onPrimaryContainer
    }
  } = useTheme()
  return (
    <Title
      title='📄 表单填报'
      content='在这里填写表单填报，回答下面的所有问题。'
      containerColor={primaryContainer}
      onContainerColor={onPrimaryContainer}
    />
  )
}
