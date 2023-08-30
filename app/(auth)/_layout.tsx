import { Stack } from 'expo-router'
import React from 'react'

export default function AuthLayout ({ children }: { children: React.ReactNode }) {
  return (
    <Stack screenOptions={{
      // 禁止返回手势
      gestureEnabled: false
    }}

    >
      <Stack.Screen
        name='sign-in'
        options={{
          headerShown: true,
          title: '登陆'
        }}
      />
    </Stack>
  )
}
