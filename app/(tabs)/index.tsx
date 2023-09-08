import CountDown from 'components/CountDown'
import IndexTitle from 'components/index/IndexTitle'
import TotalStatus from 'components/index/TotalStatus'
import UserStatus from 'components/index/UserStatus'
import { useFocusEffect } from 'expo-router'
import { useStatusMutation, useConfigMutation, useAccessToken } from 'lib/hooks'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'
import { home } from 'store'

const BasicInfoScreen = observer(() => {
  const {
    colors: {
      background
    }
  } = useTheme()
  const { isLoading: isAccessTokenLoading } = useAccessToken()
  const { trigger: statusTrigger, isMutating: isStatusMutating } = useStatusMutation()
  const { trigger: configTrigger, isMutating: isConfigMutating } = useConfigMutation()
  const isMutating = isStatusMutating || isConfigMutating || isAccessTokenLoading || home.loading
  useFocusEffect(React.useCallback(() => {
    void statusTrigger()
    void configTrigger()
  }, [isAccessTokenLoading]))
  return (
    <View style={[styles.root, { backgroundColor: background }]}>
      <Appbar.Header>
        <Appbar.Content
          title="首页"
        />
      </Appbar.Header>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={isMutating}
            onRefresh={() => {
              if (isMutating) return
              void statusTrigger()
              void configTrigger()
            }}
          />
        }
      >
        <IndexTitle />
        <CountDown />
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
