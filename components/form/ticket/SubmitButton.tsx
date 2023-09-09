import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { ApplyV1 } from 'lib'
import { useAccessToken } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { TouchableRipple, Text, useTheme, ActivityIndicator } from 'react-native-paper'
import { ticket } from 'store'

const ButtonIcon = observer(({ color }: { color: string }) => {
  return (
    <View style={styles.icon}>
      {
        !ticket.loading
          ? <MaterialCommunityIcons
              name='content-save'
              color={color}
              size={30}
            />
          : <ActivityIndicator color={color} />
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

// eslint-disable-next-line complexity
const SubmitButton = observer(() => {
  const { data: accessToken, isLoading } = useAccessToken()
  const {
    colors: {
      primary,
      onPrimary,
      errorContainer,
      onErrorContainer
    }
  } = useTheme()
  const disabled = ticket.loading || !ticket.valid || isLoading || accessToken === undefined
  const container = !ticket.valid ? errorContainer : primary
  const onContainer = !ticket.valid ? onErrorContainer : onPrimary
  return (
    <TouchableRipple
      disabled={disabled}
      style={[
        styles.item,
        {
          backgroundColor: container
        }
      ]}
      onPress={() => {
        if (isLoading || accessToken === undefined) return
        submitAction(accessToken)
          .then(() => {
            Alert.alert('保存成功', '您的信息已经成功提交服务器。')
          })
          .catch(errorHandler)
      }}
    >
      <View style={styles.container}>
        <ButtonIcon color={onContainer} />
        <Text
          variant='headlineSmall'
          style={[styles.label, {
            color: onContainer
          }]}
        >
          {
            ticket.loading || isLoading
              ? '正在保存'
              : ticket.valid ? '保存' : '请填写完整'
          }
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
