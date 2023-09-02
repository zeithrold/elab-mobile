import { type Router, useRouter } from 'expo-router'
import { ApiV1 } from 'lib'
import { useAccessToken } from 'lib/hooks'
import React from 'react'
import { Alert } from 'react-native'
import auth0, { useAuth0 } from 'react-native-auth0'
import { List, useTheme } from 'react-native-paper'

const handleLogout = (
  clearCredentials: () => Promise<void>
) => {
  Alert.alert(
    '真的要退出吗？',
    '退出后需要重新登录，您的报名信息仍会保留。',
    [
      {
        text: '取消',
        style: 'cancel'
      },
      {
        text: '退出',
        style: 'destructive',
        onPress: () => {
          clearCredentials()
            .catch((err) => {
              console.error(err)
            })
        }
      }
    ]
  )
}

const handleDelete = (
  accessToken, clearCredentials: () => Promise<void>
) => {
  Alert.alert(
    '真的要删除账号吗？',
    '此操作无法恢复！您的账号信息将会被完整删除。',
    [
      {
        text: '取消',
        style: 'cancel'
      },
      {
        text: '删除',
        style: 'destructive',
        onPress: () => {
          Alert.alert(
            '真的真的要删除账号吗？',
            '此操作联系科中也无法恢复！',
            [
              {
                text: '取消',
                style: 'cancel'
              },
              {
                text: '删除',
                style: 'destructive',
                onPress: () => {
                  const apiV1 = new ApiV1(accessToken)
                  apiV1.deleteUser()
                    .then(async () => {
                      await clearCredentials()
                    })
                    .catch(err => {
                      console.error(err)
                    })
                }
              }
            ]
          )
        }
      }
    ]
  )
}

const ProfileActionList = () => {
  const {
    colors: {
      error
    }
  } = useTheme()
  const router = useRouter()
  const { data: accessToken, isLoading } = useAccessToken()
  const { clearCredentials } = useAuth0()
  return (
    <List.Section>
      <List.Subheader>账号设置</List.Subheader>
      <List.Item
        title='隐私政策'
        description='我们绝不会将数据传输至第三方'
      />
      <List.Item
        title='查看开源项目'
        description='github.com/zeithrold/elab-mobile'
        onPress={() => { router.push('https://github.com/zeithrold/elab-mobile') }}
      />
      <List.Item
        titleStyle={{ color: error }}
        title='退出登录'
        onPress={() => { handleLogout(clearCredentials) }}
      />
      <List.Item
        titleStyle={{ color: error }}
        title='删除账号'
        disabled={isLoading || !accessToken}
        onPress={() => { handleDelete(accessToken, clearCredentials) }}
      />
    </List.Section>
  )
}

export default ProfileActionList
