/* eslint-disable react/jsx-pascal-case */

import React from 'react'
import { observer } from 'mobx-react-lite'
import { Alert, StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'
import { room as roomStore } from 'store'
import { useAccessToken } from 'lib/hooks'
import { ApplyV1 } from 'lib'
import config from 'store/config'

const RoomCancelSelection = observer(() => {
  const { data: accessToken, isLoading: accessTokenLoading } = useAccessToken()
  const handleCancelSelection = () => {
    if (accessToken === undefined) return
    const applyV1 = new ApplyV1(accessToken)
    roomStore.setRoomLoading(true)
    applyV1.clearRoomSelection()
      .catch((err) => {
        console.error(err)
        Alert.alert('出现了问题', '请联系科中。')
      })
      .finally(() => {
        roomStore.setRoomLoading(false)
      })
  }
  return (
    <FAB
      icon='content-save-off'
      label='取消选择'
      visible={roomStore.selected !== '' && !config.isAfter}
      variant='tertiary'
      disabled={accessTokenLoading || roomStore.loading}
      style={styles.fabStyle}
      onPress={() => {
        handleCancelSelection()
      }}
    />
  )
})

const styles = StyleSheet.create({
  fabStyle: {
    bottom: 16,
    // right: 16,
    alignSelf: 'center',
    position: 'absolute'
  }
})

export default RoomCancelSelection
