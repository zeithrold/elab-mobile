import { Redirect, useFocusEffect } from 'expo-router'
import { useConfigMutation } from 'lib/hooks'
import React from 'react'

export default function TempRedirect () {
  const { trigger } = useConfigMutation()
  useFocusEffect(React.useCallback(() => {
    void trigger()
  }, []))
  return <Redirect href='/(tabs)' />
}
