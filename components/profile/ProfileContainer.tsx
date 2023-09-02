import { ScrollView, StyleSheet } from 'react-native'
import { observer } from 'mobx-react-lite'
import React from 'react'
import ProfileTitle from './ProfileTitle'
import ProfileActionList from './ProfileActionList'

const ProfileContainer = observer(() => {
  return (
    <ScrollView
      style={styles.container}
    >
      <ProfileTitle />
      <ProfileActionList />
    </ScrollView>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16
  }
})

export default ProfileContainer
