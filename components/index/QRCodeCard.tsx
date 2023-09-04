import { useRoom, useRoomSelection, useTicket } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useAuth0 } from 'react-native-auth0'
import { Text, useTheme } from 'react-native-paper'
import QRCode from 'react-native-qrcode-svg'
import { useEffectOnce } from 'usehooks-ts'
import { ticket as ticketStore } from 'store'

const QRCodeCard = observer(() => {
  const { user } = useAuth0()
  const {
    colors: {
      onPrimary,
      primary,
      background,
      onBackground
    }
  } = useTheme()
  const { data: id } = useRoomSelection()
  const { data: room } = useRoom(id)
  const { data: ticket, trigger } = useTicket()
  useEffectOnce(
    React.useCallback(() => {
      ticketStore.setLoading(true)
      trigger()
        .then((ticket) => {
          ticketStore.setTicket(ticket)
        })
        .catch((err) => {
          console.error(err)
        })
    }, [ticket])
  )

  return (
    <View
      style={[
        styles.root,
        {
          backgroundColor: primary
        }
      ]}
    >

      {room
        ? <View>
          <View style={styles.textContainer}>
            <Text
              variant='titleMedium'
              style={{ color: onPrimary, fontWeight: 'bold' }}
            >
              {room?.name}
            </Text>

            <Text
              style={{ color: onPrimary }}
              // variant='bodyLarge'
            >
              {new Date(room?.time).toLocaleString('zh-CN', {
                dateStyle: 'long',
                timeStyle: 'medium',
                timeZone: 'UTC'
              })}
            </Text>

            <Text
              style={{ color: onPrimary }}
              // variant='bodyLarge'
            >
              {room?.location }
            </Text>
          </View>
          <View
            style={[styles.qrcode, { backgroundColor: background }]}
          >
            <QRCode
              value={user?.sub}
              size={160}
              color={onBackground}
              backgroundColor={background}
            />
          </View>
          <View style={styles.userInfo}>
            <Text
              variant='labelLarge'
              style={[{ color: onPrimary }]}
            >{ ticketStore.name }({ticketStore.student_id})</Text>
          </View>
        </View>
        : null}
    </View>
  )
})

const styles = StyleSheet.create({
  root: {
    borderRadius: 12,
    margin: 12,
    flex: 1
  },
  textContainer: {
    margin: 12,
    marginBottom: 0
  },
  qrcode: {
    borderRadius: 12,
    margin: 12,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12
  }
})

export default QRCodeCard
