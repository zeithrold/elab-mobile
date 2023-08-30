import { observer } from 'mobx-react-lite'
import React from 'react'
import { HelperText, SegmentedButtons } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import { ticket } from 'store'

const buttons = [
  {
    label: '软件组',
    value: 'software',
    icon: 'code-tags'
  },
  {
    label: '硬件组',
    value: 'hardware',
    icon: 'chip'
  }
]

const GroupInput = observer(() => {
  return (
    <View style={styles.item}>
      <HelperText type='info'>
        组别选择
      </HelperText>
      <SegmentedButtons
        value={ticket.group}
        onValueChange={(value) => {
          ticket.setGroup(value)
        }}
        buttons={buttons}
      />
    </View>
  )
})

export default GroupInput

const styles = StyleSheet.create({
  item: {
    marginVertical: 8
  }
})
