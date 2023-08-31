import React from 'react'
import { Stack, router } from 'expo-router'
import { Appbar } from 'react-native-paper'
import { type NativeStackHeaderProps } from '@react-navigation/native-stack'

function BackAction () {
  return <Appbar.BackAction onPress={() => { router.back() }} />
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const unstable_settings = {
  initialRouteName: 'index'
}

function Header (props: NativeStackHeaderProps) {
  const { options, route } = props
  const { title } = options
  const { name } = route
  return (
    <Appbar.Header>
      {name === 'index' ? null : <BackAction />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  )
}

export default function FormLayout () {
  return (
    <Stack
      screenOptions={{
        header: Header
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: '报名'
        }}
      />
      <Stack.Screen
        name='textform'
        options={{
          title: '表单填报'
        }}
      />
      <Stack.Screen
        name='ticket'
        options={{
          title: '基本信息填报'
        }}
      />
      <Stack.Screen
        name='answer/[id]'
        options={{
          headerShown: false,
          presentation: 'modal'
        }}
      />
    </Stack>
  )
}
