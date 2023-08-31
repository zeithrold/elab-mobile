import React from 'react'
import { View } from 'react-native'
import { List, RadioButton } from 'react-native-paper'
import { type Room } from 'type'
import { room as roomStore } from 'store'
import { observer } from 'mobx-react-lite'

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
  const [roomListByDate, setRoomListByDate] = React.useState<Record<string, Room[]>>({})
  return (
    <View>
      <List.AccordionGroup>
        {
          Object.entries(roomListByDate).map(([date, roomList]) => (
            <RoomListAccordion
              key={date}
              date={date}
              roomList={roomList}
            />
          ))}
      </List.AccordionGroup>
    </View>
  )
}
