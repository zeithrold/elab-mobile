/* eslint-disable complexity */
import { useConfig } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import config from 'store/config'
import { useInterval } from 'usehooks-ts'

const CountDown = observer(() => {
  const { data, isLoading } = useConfig()

  React.useEffect(() => {
    if (!data || isLoading) return
    config.setConfig(data)
  }, [data])

  useInterval(() => {
    config.updateDate()
  }, 1000)

  const {
    colors: {
      primaryContainer,
      onPrimaryContainer,
      tertiaryContainer,
      onTertiaryContainer,
      errorContainer,
      onErrorContainer
    }
  } = useTheme()

  const container = config.timeDelta.hours > 24
    ? primaryContainer
    : (config.timeDelta.hours > 12
        ? tertiaryContainer
        : errorContainer)

  const onContainer = config.timeDelta.hours > 24
    ? onPrimaryContainer
    : (config.timeDelta.hours > 12
        ? onTertiaryContainer
        : onErrorContainer)

  return (
    <View
      style={[styles.root, {
        backgroundColor: container
      }]}
    >
      <Text
        style={{ color: onContainer }}
        variant='labelLarge'
      >
        距离报名结束还有
      </Text>
      <View style={styles.countDownContainer}>
        <Text style={{ color: onContainer, fontWeight: 'bold' }} variant='displayMedium'>
          {config.countDown}
        </Text>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 12,
    padding: 12,
    borderRadius: 12
  },
  countDownContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16
  }
})

export default CountDown
