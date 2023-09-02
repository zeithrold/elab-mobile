import { observer } from 'mobx-react-lite'
import React from 'react'
import { View } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'
import Title from '../components/Title'
import config from 'store/config'

const NotAvailable = observer(() => {
  const {
    colors: {
      background,
      tertiaryContainer,
      onTertiaryContainer
    }
  } = useTheme()
  return (
    <View style={[{ backgroundColor: background, flex: 1 }]}>
      <Appbar.Header>
        <Appbar.Content title='报名尚未开始' />
      </Appbar.Header>
      <View>
        <Title
          containerColor={tertiaryContainer}
          onContainerColor={onTertiaryContainer}
          title='报名尚未开始'
          content={`报名尚未开始，请耐心等待。报名系统开放时间为${config.applyBeginTime.toLocaleString('zh-CN', {
            dateStyle: 'full',
            timeStyle: 'medium'
          })}`}
        />
      </View>
    </View>
  )
})

export default NotAvailable
