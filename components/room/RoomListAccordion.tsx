import React from 'react'
import { List } from 'react-native-paper'
import { type Room } from 'type'
import RoomListItem from './RoomListItem'
import { observer } from 'mobx-react-lite'

const RoomListAccordion = observer((props: { date: string, roomList: Room[] }) => {
  const { date: dateString, roomList } = props
  const date = new Date(dateString)
  return (
    <List.Accordion
      key={dateString}
      id={dateString}
      title={date.toLocaleDateString('zh-CN', { dateStyle: 'full' })}
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
})

export default RoomListAccordion
