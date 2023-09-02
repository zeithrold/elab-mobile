import { View } from 'components/Themed'
import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { observer } from 'mobx-react-lite'
import React from 'react'

const ProfileContainer = observer(() => {
  return (
    <View
      style={styles.container}
    >
      <Text
        variant='bodyMedium'
      >ProfileContainer
      </Text>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ProfileContainer
