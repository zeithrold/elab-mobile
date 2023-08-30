import React from 'react'
import { observer } from 'mobx-react-lite'
import { HelperText, TextInput } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import { ticket } from 'store'

function isError (text: string) {
  if (text.length !== 11) {
    return true
  }
  if (!/^[0-9]*$/.test(text)) {
    return true
  }
  return false
}

const StudentIdInput = observer(() => {
  const [length, setLength] = React.useState(0)
  React.useEffect(() => {
    if (ticket.student_id.length > 11) {
      ticket.setStudentId(ticket.student_id.slice(0, 11))
      return
    }
    setLength(ticket.student_id.length)
  }, [ticket.student_id])
  return (
    <View
      style={styles.item}
    >
      <TextInput
        label="学号"
        value={ticket.student_id}
        onChangeText={(text) => {
          ticket.setStudentId(text)
        }}
        right={
          <TextInput.Affix
            text={`${length}/11`}
          />
      }
        error={isError(ticket.student_id)}
        keyboardType='number-pad'
      />
      {
        isError(ticket.student_id)
          ? <HelperText
              type='error'
              visible={isError(ticket.student_id)}
            >
            {ticket.student_id.length === 0
              ? '请填写学号。'
              : '请填写有效的学号。'
            }
          </HelperText>
          : null
      }
    </View>
  )
})

export default StudentIdInput

const styles = StyleSheet.create({
  item: {
    marginVertical: 8
  }
})
