import Title from 'components/Title'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useTheme } from 'react-native-paper'

const QRCodeTitle = observer(() => {
  const {
    colors: {
      onPrimaryContainer,
      primaryContainer
    }
  } = useTheme()
  return (
    <Title
      onContainerColor={onPrimaryContainer}
      containerColor={primaryContainer}
      title="我们海映楼见"
      content="您的报名已经受理。请在指定时间内前往海映楼参加面试。"
    />
  )
})

export default QRCodeTitle
