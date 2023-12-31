import RoomCancelSelection from 'components/room/RoomCancelSelection'
import RoomList from 'components/room/RoomList'
import RoomTitle from 'components/room/RoomTitle'
import { useFocusEffect } from 'expo-router'
import { useAccessToken, useRoomList, useRoomSelection, useStatus } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { View, ScrollView, RefreshControl, Alert } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'
import { room as roomStore } from 'store'

// eslint-disable-next-line complexity
const InterviewScreen = observer(() => {
  const { isLoading: isAccessTokenLoading } = useAccessToken()
  const { data: roomSelection, isLoading: isRoomSelectionLoading, mutate: roomSelectionMutate } = useRoomSelection()
  const { mutate: roomListMutate, isLoading: isRoomListLoading } = useRoomList()
  const { data: status, isLoading: isStatusLoading, mutate: statusMutate } = useStatus()
  const isLoading = isAccessTokenLoading || roomStore.roomLoading || roomStore.forceRefresh || isStatusLoading || isRoomListLoading
  const {
    colors: {
      background
    }
  } = useTheme()
  useFocusEffect(React.useCallback(() => {
    if (isLoading) return
    roomStore.setForceRefresh(true)
  }, []))
  useFocusEffect(React.useCallback(() => {
    void statusMutate()
  }, []))
  React.useEffect(() => {
    if (roomStore.forceRefresh && !roomStore.roomLoading) {
      Promise.all([
        roomSelectionMutate(),
        roomListMutate()
      ])
        .catch((err) => {
          console.error(err)
          Alert.alert('出现了问题', '请联系科中。')
        })
        .finally(() => {
          roomStore.setForceRefresh(false)
        })
    }
  }, [roomStore.forceRefresh])
  React.useEffect(() => {
    if (roomSelection === undefined || isRoomSelectionLoading) return
    roomStore.setSelected(roomSelection)
  }, [roomSelection, isRoomSelectionLoading])
  React.useEffect(() => {
    if (!roomStore.roomLoading) {
      Promise.all([
        roomSelectionMutate(),
        roomListMutate()
      ])
        .catch((err) => {
          console.error(err)
          Alert.alert('出现了问题', '请联系科中。')
        })
    }
  }, [roomStore.roomLoading])
  return (
    <View style={{ flex: 1, backgroundColor: background }}>
      <Appbar.Header>
        <Appbar.Content title="面试场次" />
      </Appbar.Header>
      <ScrollView
        style={{ flex: 1, backgroundColor: background }}
        contentContainerStyle={{ backgroundColor: background }}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => {
              roomStore.setForceRefresh(true)
            }}
          />
          }
      >
        <RoomTitle />{
          status?.textform && status?.ticket
            ? <RoomList />
            : null
        }
      </ScrollView>
      <RoomCancelSelection />
    </View>
  )
})

export default InterviewScreen
