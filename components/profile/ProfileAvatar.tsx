import { View } from 'components/Themed'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useAuth0 } from 'react-native-auth0'
import { Avatar, Text } from 'react-native-paper'

const ProfileAvatar = () => {
  const { user } = useAuth0()
  return (
    <View style={styles.container}>
      <Avatar.Image
        source={{ uri: user?.picture }}
      />
      <Text
        variant='headlineMedium'
        style={styles.title}
      >
        {user?.nickname}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    marginVertical: 8
  }
})

export default ProfileAvatar
