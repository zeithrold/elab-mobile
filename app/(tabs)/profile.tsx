import ProfileContainer from 'components/profile/ProfileContainer'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'

export default function ProfileScreen () {
  const {
    colors: {
      background
    }
  } = useTheme()
  return (
    <View style={[styles.root, { backgroundColor: background }]}>
      <Appbar.Header>
        <Appbar.Content title="我" />
      </Appbar.Header>
      <ProfileContainer />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
