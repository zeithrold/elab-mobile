import React from 'react'
import { useTheme } from 'react-native-paper'
import Title from '../Title'

export default function RoomTitle () {
  const {
    colors: {
      primaryContainer,
      onPrimaryContainer
    }
  } = useTheme()
  return (
    <Title
      title='💬 选择面试场次'
      content='在这里选择你想要参加的面试场次。'
      containerColor={primaryContainer}
      onContainerColor={onPrimaryContainer}
    />
  )
}
