import ProfileContainer from 'components/profile/ProfileContainer'
import React from 'react'
import { Appbar } from 'react-native-paper'

export default function ProfileScreen () {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="我" />
      </Appbar.Header>
      <ProfileContainer />
    </>
  )
}
