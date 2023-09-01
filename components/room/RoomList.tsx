import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator, List, RadioButton } from 'react-native-paper'
import { type Room } from 'type'
import { room as roomStore } from 'store'
import { observer } from 'mobx-react-lite'
import { useRoomList } from 'lib/hooks'

interface RoomListItemProps {
  room: Room
}

const RoomListRadio = observer((props: RoomListItemProps) => {
  const {
    room
  } = props
  return (
    <RadioButton.Android
      {...props}
      value={room.id}
      status={roomStore.selected === room.id ? 'checked' : 'unchecked'}
      onPress={() => {
        roomStore.setSelected(room.id)
      }}
    />
  )
})

function RoomListItem (props: RoomListItemProps) {
  const { room } = props
  return (
    <List.Item
      key={room.id}
      title={room.name}
      onPress={() => {
        roomStore.setSelected(room.id)
      }}
      descriptionNumberOfLines={4}
      description={[
        room.capacity,
        '人',
        ' ',
        room.location
      ]}
      left={
        iconProps => (
          <RoomListRadio
            {...iconProps}
            {...props}
          />
        )
      }
    />
  )
}

function RoomListAccordion (props: { date: string, roomList: Room[] }) {
  const { date, roomList } = props
  return (
    <List.Accordion
      key={date}
      id={date}
      title={date}
    >
      {
        roomList.map(room => (
          <RoomListItem
            key={room.id}
            room={room}
          />
        ))
      }
    </List.Accordion>
  )
}

export default function RoomList () {
  const { data: roomListByDate, isLoading } = useRoomList()
  return (
    <View style={{ marginVertical: 16 }}>
      {
        isLoading
          ? <ActivityIndicator />
          : null
      }
      {
        roomListByDate !== undefined
          ? (<List.AccordionGroup>
            {Object.entries(roomListByDate).map(([date, roomList]) => (
              <RoomListAccordion
                key={date}
                date={date}
                roomList={roomList}
              />
            ))}
          </List.AccordionGroup>)
          : null}
    </View>
  )
}

