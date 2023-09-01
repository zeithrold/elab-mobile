import IndexTitle from 'components/index/IndexTitle'
import TotalStatus from 'components/index/TotalStatus'
import UserStatus from 'components/index/UserStatus'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ActivityIndicator, Appbar } from 'react-native-paper'
import { home } from 'store'

const BasicInfoScreen = observer(() => {
  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Content
          title="首页"
        />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <IndexTitle />
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
