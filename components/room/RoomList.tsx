import React from 'react'
import { View } from 'react-native'
import { List } from 'react-native-paper'
import { useRoomList } from 'lib/hooks'
import RoomListAccordion from './RoomListAccordion'
import { observer } from 'mobx-react-lite'
import CountDown from 'components/CountDown'
import config from 'store/config'

const RoomList = observer(() => {
  const { data: roomListByDate } = useRoomList()
  return (
    <View>
      <CountDown />
      {
        roomListByDate !== undefined && !config.isAfter
          ? (<List.AccordionGroup>
            <List.Subheader>
              面试场次选择
            </List.Subheader>
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
})

export default RoomList

