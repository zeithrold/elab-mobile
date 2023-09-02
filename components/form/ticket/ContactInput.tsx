import React from 'react'
import { observer } from 'mobx-react-lite'
import { HelperText, TextInput } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import { ticket } from 'store'
import config from 'store/config'

function isError (text: string) {
  if (text.length !== 11) {
    return true
  }
  if (!/^[0-9]*$/.test(text)) {
    return true
  }
  return false
}

const ContactInput = observer(() => {
  const [length, setLength] = React.useState(0)
  React.useEffect(() => {
    if (ticket.contact.length > 11) {
      ticket.setContact(ticket.contact.slice(0, 11))
      return
    }
    setLength(ticket.contact.length)
  }, [ticket.contact])
  return (
    <View
      style={styles.item}
    >
      <TextInput
        disabled={ticket.loading || config.isAfter}
        label="联系方式"
        placeholder='例如：18888888888'
        value={ticket.contact}
        onChangeText={(text) => {
          ticket.setContact(text)
        }}
        right={
          <TextInput.Affix
            text={`${length}/11`}
          />
      }
        error={isError(ticket.contact)}
        keyboardType='number-pad'
      />
      {
        isError(ticket.contact)
          ? <HelperText
              type='error'
              visible={isError(ticket.contact)}
            >
            {ticket.contact.length === 0
              ? '请填写电话号。'
              : '请填写有效的电话号。'
            }
          </HelperText>
          : null
      }
    </View>
  )
})

export default ContactInput

const styles = StyleSheet.create({
  item: {
    marginVertical: 8
  }
})
