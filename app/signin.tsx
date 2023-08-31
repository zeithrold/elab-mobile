import React from 'react'
import { useAuth0 } from 'react-native-auth0'
import { View } from 'react-native'
import { Text, Button, Appbar } from 'react-native-paper'
import { authorizeErrorHandler } from 'context/auth'
import { useRouter } from 'expo-router'

export default function SignInPage () {
  const { authorize } = useAuth0()
  const router = useRouter()
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title='登陆' />
      </Appbar.Header>
      <Text>让我们开始登陆吧。</Text>
      <Button onPress={() => {
        authorize({
          audience: process.env.EXPO_PUBLIC_AUTH0_AUDIENCE
        })
          .then(async () => {
            router.replace('/')
          })
          .catch(authorizeErrorHandler)
      }}
      >开始登陆</Button>
    </View>
  )
}
