import React from 'react'
import { observer } from 'mobx-react-lite'
import { StyleSheet, View } from 'react-native'
import { HelperText, TextInput } from 'react-native-paper'
import { ticket } from 'store'

function isError (text: string) {
  if (text.length === 0 || text.length > 14) {
    return true
  }
  return false
}

const NameInput = observer(() => {
  return (
    <View
      style={styles.item}
    >
      <TextInput
        label="姓名"
        value={ticket.name}
        onChangeText={(text) => { ticket.setName(text) }}
        error={isError(ticket.name)}
      />
      {
        isError(ticket.name)
          ? <HelperText
              type='error'
            >
            {
              ticket.name.length === 0
                ? '请填写姓名。'
                : '姓名过长，若为实际名称请联系科中。'
            }
          </HelperText>
          : null
      }
    </View>
  )
})

export default NameInput

const styles = StyleSheet.create({
  item: {
    marginVertical: 8
  }
})
