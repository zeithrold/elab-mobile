import React from 'react'
import { useTheme } from 'react-native-paper'
import Title from '../../Title'

export default function TicketTitle () {
  const {
    colors: {
      primaryContainer,
      onPrimaryContainer
    }
  } = useTheme()
  return (
    <Title
      title='✉️ 基本信息填报'
      content='在这里填写基本信息填报，填写好后点击保存。考核通过后将向教务处报送在这里填报的信息。'
      containerColor={primaryContainer}
      onContainerColor={onPrimaryContainer}
    />
  )
}
