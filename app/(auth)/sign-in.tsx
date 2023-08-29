import React from 'react'
import { useAuth0 } from 'react-native-auth0'
import { Button, Stack, Text } from 'tamagui'
import { authorizeErrorHandler } from 'context/auth'

export default function SignInPage () {
  const { authorize } = useAuth0()
  return (
    <Stack>
      <Text>让我们开始登陆吧。</Text>
      <Button onPress={() => {
        void authorize({
          audience: process.env.EXPO_PUBLIC_AUTH0_AUDIENCE
        }).catch(authorizeErrorHandler)
      }}>开始登陆</Button>
    </Stack>
  )
}
