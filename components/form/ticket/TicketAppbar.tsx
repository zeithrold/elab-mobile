import { observer } from 'mobx-react-lite'
import React from 'react'
import { Appbar } from 'react-native-paper'
const TicketAppbar = observer(() => {
  return (
    <Appbar.Header>
      <Appbar.Content title="基本信息填报" />
    </Appbar.Header>
  )
})

export default TicketAppbar
