import React from 'react'
import { useTheme } from 'react-native-paper'
import Title from '../../Title'
import { observer } from 'mobx-react-lite'
import config from 'store/config'

const TicketTitle = observer(() => {
  const {
    colors: {
      primaryContainer,
      onPrimaryContainer
    }
  } = useTheme()
  return (
    <Title
      title='✉️ 基本信息填报'
      content={ config.isAfter ? '报名已经结束，若您已经提交报名，下面的基本信息已经提交至科中。' : '在这里填写基本信息填报，填写好后点击保存。考核通过后将向教务处报送在这里填报的信息。'}
      containerColor={primaryContainer}
      onContainerColor={onPrimaryContainer}
    />
  )
})

export default TicketTitle

