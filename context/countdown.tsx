import { useRootNavigationState, useRouter } from 'expo-router'
import { useConfig } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import React from 'react'
import config from 'store/config'
import { useInterval } from 'usehooks-ts'

const CountDownContext = React.createContext(null)

function useBefore () {
  const navigationState = useRootNavigationState()
  const router = useRouter()
  React.useEffect(() => {
    if (!navigationState?.key) return
    if (config.isBefore) {
      router.replace('/notavailable')
    } else {
      router.replace('/')
    }
  }, [config.isBefore])
}

const CountDownProvider = observer(({ children }: { children: any }) => {
  useBefore()
  const { data, mutate } = useConfig()
  useInterval(() => {
    config.updateDate()
    mutate()
      .then(() => {
        if (data !== undefined) config.setConfig(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, config.isBefore ? 1000 : null)
  return (
    <CountDownContext.Provider value={null}>
      {children}
    </CountDownContext.Provider>
  )
})

export { CountDownProvider }
