import { Stack } from 'expo-router'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const unstable_settings = {
  initialRouteName: 'home'
}

export default function TextFormLayout () {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='home'
      />
      <Stack.Screen
        name='[id]'
        options={{
          presentation: 'modal',
          headerShown: false
        }}
      />
    </Stack>
  )
}
