import CountDown from 'components/CountDown'
import IndexTitle from 'components/index/IndexTitle'
import TotalStatus from 'components/index/TotalStatus'
import UserStatus from 'components/index/UserStatus'
import { useFocusEffect } from 'expo-router'
import { useStatus } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ActivityIndicator, Appbar, useTheme } from 'react-native-paper'
import { home } from 'store'

const BasicInfoScreen = observer(() => {
  const {
    colors: {
      background
    }
  } = useTheme()
  const { mutate: statusMutate } = useStatus()
  useFocusEffect(React.useCallback(() => {
    void statusMutate()
  }, []))
  return (
    <View style={[styles.root, { backgroundColor: background }]}>
      <Appbar.Header>
        <Appbar.Content
          title="首页"
        />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <IndexTitle />
        <CountDown />
        {
          home.loading
            ? <ActivityIndicator />
            : null
        }
        <TotalStatus />
        <UserStatus />
      </ScrollView>
    </View>
  )
})

export default BasicInfoScreen

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1
  },
  text: {
    padding: 12
  }
})
