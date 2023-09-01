import { type Router, useRouter } from 'expo-router'
import { ApplyV1 } from 'lib'
import { useAccessToken } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Alert, Platform } from 'react-native'
import { ActivityIndicator, Appbar } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { textForm } from 'store'

function notSaveAlert (router: Router) {
  Alert.alert(
    '您尚未保存',
    '若您选择返回，所有修改内容将丢失。',
    [
      {
        text: '取消',
        style: 'cancel'
      },
      {
        text: '返回',
        onPress: () => {
          router.back()
        }
      }
    ]
  )
}

async function handleSaveAnswer (accessToken: string) {
  const applyV1 = new ApplyV1(accessToken)
  textForm.setTextFormLoading(true)
  await applyV1.setTextForm(
    textForm.id,
    textForm.answer
  )
  textForm.setTextFormLoading(false)
}

function errorHandler (error: any) {
  console.error('出现了问题', error)
  Alert.alert('更新失败',
    '请检查网络连接或稍后再试。'
  )
}

// eslint-disable-next-line complexity
const EditorAppbar = observer(() => {
  const router = useRouter()
  const { data: accessToken, isLoading: isAccessTokenLoading } = useAccessToken()
  const safeAreaHeight = useSafeAreaInsets()
  React.useEffect(() => {
    textForm.setAccessTokenLoading(isAccessTokenLoading)
  }, [isAccessTokenLoading])
  const isLoading = textForm.textFormLoading || textForm.accessTokenLoading
  return (
    <Appbar.Header
      statusBarHeight={
        Platform.OS === 'ios' ? 0 : safeAreaHeight.top
      }
    >
      <Appbar.Action
        icon='close'
        isLeading
        onPress={() => {
          if (textForm.modified) {
            notSaveAlert(router)
            return
          }
          router.back()
        }}
      />
      <Appbar.Content title="编辑答案" />
      <Appbar.Action
        icon={ isLoading
          ? props => <ActivityIndicator {...props} />
          : 'content-save'
        }
        disabled={
          isLoading || accessToken === undefined
        }
        onPress={() => {
          handleSaveAnswer(accessToken as string)
            .then(() => {
              router.back()
            })
            .catch(errorHandler)
        }}
      />
    </Appbar.Header>
  )
})

export default EditorAppbar
