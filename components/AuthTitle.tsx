import React from 'react'
import Title from './Title'
import { useTheme } from 'react-native-paper'

const AuthTitle = () => {
  const {
    colors: {
      primaryContainer,
      onPrimaryContainer
    }
  } = useTheme()
  return (
    <Title
      containerColor={primaryContainer}
      onContainerColor={onPrimaryContainer}
      title="🔑 让我们开始登录吧"
      content="报名系统依托账号建设，请登录账号以继续。"
    />
  )
}

export default AuthTitle
