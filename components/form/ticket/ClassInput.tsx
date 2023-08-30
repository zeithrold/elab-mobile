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

const ClassInput = observer(() => {
  return (
    <View
      style={styles.item}
    >
      <TextInput
        label="班级"
        placeholder='例如：电2301、未来2301、智创2301'
        value={ticket.class_name}
        onChangeText={(text) => { ticket.setClassName(text) }}
        error={isError(ticket.class_name)}
      />
      {
        isError(ticket.class_name)
          ? <HelperText
              type='error'
            >
            {
              ticket.class_name.length === 0
                ? '请填写班级。'
                : '班级无效。'
            }
          </HelperText>
          : null
      }
    </View>
  )
})

export default ClassInput

const styles = StyleSheet.create({
  item: {
    marginVertical: 8
  }
})
