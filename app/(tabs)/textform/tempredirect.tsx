import { Redirect } from 'expo-router'
import { observer } from 'mobx-react-lite'
import React from 'react'

const TempRedirect = observer(() => {
  return <Redirect href='/(tabs)' />
})

export default TempRedirect
