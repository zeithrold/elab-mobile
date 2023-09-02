import { Platform, ScrollView, StyleSheet, View } from 'react-native'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import QRCodeTitle from 'components/index/QRCodeTitle'
import { useRouter } from 'expo-router'
import QRCodeCard from 'components/index/QRCodeCard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const QRCodeScreen = observer(() => {
  const {
    colors: {
      background
    }
  } = useTheme()
  const router = useRouter()
  const safeAreaHeight = useSafeAreaInsets()
  return (
    <View style={[styles.root, { backgroundColor: background }]}>
      <Appbar.Header
        statusBarHeight={
          Platform.OS === 'ios' ? 0 : safeAreaHeight.top
        }
      >
        <Appbar.Action
          icon='close'
          onPress={() => {
            router.back()
          }}
          isLeading
        />
        <Appbar.Content title='二维码' />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <QRCodeTitle />
        <QRCodeCard />
      </ScrollView>
    </View>
  )
})

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1
  }
})

export default QRCodeScreen
