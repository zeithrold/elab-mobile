import React from 'react'
import { useTheme } from 'react-native-paper'
import Title from '../Title'
import { View } from 'components/Themed'
import { useStatus } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import config from 'store/config'

// eslint-disable-next-line complexity
const RoomTitle = observer(() => {
  const {
    colors: {
      primaryContainer,
      onPrimaryContainer,
      errorContainer,
      onErrorContainer,
      background
    }
  } = useTheme()
  const { data: status } = useStatus()
  const available = status?.textform && status?.ticket
  const container = available ? primaryContainer : errorContainer
  const onContainer = available ? onPrimaryContainer : onErrorContainer
  return (
    <View style={{ backgroundColor: background }}>
      <Title
        title={available ? '💬 选择面试场次' : '❌ 请先完成填报'}
        content={
          available
            ? config.isAfter ? '报名已结束，请前往报名二维码页面查看你的面试场次。' : '在这里选择你想要参加的面试场次。'
            : '您没有完成基本信息与表单填报，请先完成前两项填报。'
        }
        containerColor={container}
        onContainerColor={onContainer}
      />
    </View>
  )
})

export default RoomTitle
