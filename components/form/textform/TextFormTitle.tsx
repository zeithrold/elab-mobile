import React from 'react'
import { useTheme } from 'react-native-paper'
import Title from '../../Title'
import { observer } from 'mobx-react-lite'
import config from 'store/config'

const TextFormTitle = observer(() => {
  const {
    colors: {
      primaryContainer,
      onPrimaryContainer
    }
  } = useTheme()
  return (
    <Title
      title='📄 表单填报'
      content={ config.isAfter ? '报名已经结束，若您已经提交下面的表单，您的表单已经成功报送至科中。' : '在这里填写表单填报，回答下面的所有问题。'}
      containerColor={primaryContainer}
      onContainerColor={onPrimaryContainer}
    />
  )
})

export default TextFormTitle
