import RoomList from 'components/room/RoomList'
import RoomTitle from 'components/room/RoomTitle'
import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Appbar, FAB } from 'react-native-paper'

export default function InterviewScreen () {
  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Content title="面试场次" />
      </Appbar.Header>
      <ScrollView>
        <RoomTitle />
        <RoomList />
      </ScrollView>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <FAB
        icon='content-save-off'
        label='保存'
        variant='tertiary'
        style={styles.fabStyle}
        onPress={() => {}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  fabStyle: {
    bottom: 16,
    // right: 16,
    alignSelf: 'center',
    position: 'absolute'
  }
})
