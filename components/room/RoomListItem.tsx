import { observer } from 'mobx-react-lite'
import React from 'react'
import axios from 'axios'
import { Alert } from 'react-native'
import { ApplyV1 } from 'lib'
import { room as roomStore } from 'store'
import { List, RadioButton } from 'react-native-paper'
import { type RoomListItemProps } from 'type'
import { useAccessToken } from 'lib/hooks'

const handleRoomSelection = (accessToken: string, id: string) => {
  roomStore.setRoomLoading(true)
  const applyV1 = new ApplyV1(accessToken)
  applyV1.setRoomSelection(id)
    .catch(error => {
      if (!axios.isAxiosError(error)) {
        console.error('出现了问题', error)
        Alert.alert('出现了问题', '请联系科中。')
      } else {
        console.error('出现了问题', error)
        Alert.alert('出现了问题', error.response?.data?.message)
      }
    })
    .finally(() => {
      roomStore.setRoomLoading(false)
    })
}

// eslint-disable-next-line complexity
const RoomListRadio = observer((props: RoomListItemProps) => {
  const {
    room
  } = props
  const { data: accessToken, isLoading: isAccessTokenLoading } = useAccessToken()
  const isLoading = isAccessTokenLoading || roomStore.roomLoading
  return (
    <RadioButton.Android
      {...props}
      value={room.id}
      disabled={isLoading || room.occupancy >= room.capacity}
      status={roomStore.selected === room.id ? 'checked' : 'unchecked' || roomStore.selected === room.id}
      onPress={() => {
        if (!accessToken) return
        handleRoomSelection(accessToken, room.id)
      }}
    />
  )
})

const RoomListItem = observer((props: RoomListItemProps) => {
  const { room } = props
  const date = new Date(room.time)
  const { data: accessToken, isLoading: isAccessTokenLoading } = useAccessToken()
  const isLoading = isAccessTokenLoading || roomStore.roomLoading
  const dateString = date.toLocaleString('zh-CN', {
    dateStyle: 'full',
    timeStyle: 'medium'
  })
  return (
    <List.Item
      key={room.id}
      title={room.name}
      onPress={() => {
        if (!accessToken) return
        handleRoomSelection(accessToken, room.id)
      }}
      disabled={isLoading || room.occupancy >= room.capacity || roomStore.selected === room.id}
      descriptionNumberOfLines={4}
      description={
        `${room.occupancy} / ${room.capacity} 人\n` +
          `${dateString} \n` +
          `${room.location}`
      }
      left={
        iconProps => (
          <RoomListRadio
            {...iconProps}
            {...props}
          />
        )
      }
      style={{ paddingHorizontal: 8 }}
    />
  )
})

export default RoomListItem
