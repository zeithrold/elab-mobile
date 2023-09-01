import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useRouter } from 'expo-router'
import { ApplyV1, useAccessToken } from 'lib'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { TouchableRipple, Text, useTheme, ActivityIndicator } from 'react-native-paper'
import { ticket } from 'store'

const ButtonIcon = observer(() => {
  const {
    colors: {
      onPrimary
    }
  } = useTheme()
  return (
    <View style={styles.icon}>
      {
        !ticket.loading
          ? <MaterialCommunityIcons
              name='content-save'
              color={onPrimary}
              size={30}
            />
          : <ActivityIndicator color={onPrimary} />
      }
    </View>
  )
})

async function submitAction (accessToken: string) {
  const applyV1 = new ApplyV1(accessToken)
  ticket.setLoading(true)
  await applyV1.updateTicket({
    name: ticket.name,
    class_name: ticket.class_name,
    group: ticket.group,
    contact: ticket.contact,
    student_id: ticket.student_id
  })
  ticket.setLoading(false)
}

function errorHandler (error: any) {
  console.error('出现了问题', error)
  Alert.alert('更新失败',
    '请检查网络连接或稍后再试。'
  )
}

const SubmitButton = observer(() => {
  const router = useRouter()
  const { data: accessToken, isLoading } = useAccessToken()
  const {
    colors: {
      primary,
      onPrimary
    }
  } = useTheme()
  return (
    <TouchableRipple
      disabled={ticket.loading}
      style={[
        styles.item,
        {
          backgroundColor: primary
        }
      ]}
      onPress={() => {
        if (isLoading || accessToken === undefined) return
        submitAction(accessToken)
          .then(() => {
            router.back()
          })
          .catch(errorHandler)
      }}
    >
      <View style={styles.container}>
        <ButtonIcon />
        <Text
          variant='headlineSmall'
          style={[styles.label, {
            color: onPrimary
          }]}
        >
          保存
        </Text>
      </View>
    </TouchableRipple>
  )
})

export default SubmitButton

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    borderRadius: 16
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  label: {
    fontWeight: 'bold'
  },
  icon: {
    marginRight: 8
  }
})
