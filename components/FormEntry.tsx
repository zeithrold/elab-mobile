import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Divider, List, Text, TouchableRipple, useTheme } from 'react-native-paper'

function EntryButtonGroup () {
  const {
    colors: {
      secondaryContainer
    }
  } = useTheme()
  return (
    <View style={[
      styles.container,
      {
        backgroundColor: secondaryContainer
      }
    ]}

    >
      <EntryButton />
      <Divider horizontalInset />
      <EntryButton />
    </View>
  )
}

function EntryButton () {
  const {
    colors: {
      onSecondaryContainer
    }
  } = useTheme()
  return (
    <TouchableRipple
      style={styles.entryButton}
      onPress={() => {}}
    >
      <View style={styles.entryButtonView}>
        <MaterialCommunityIcons
          name='account'
          color={onSecondaryContainer}
          size={80}
        />
        <Text
          variant='headlineSmall'
          style={[
            {
              color: onSecondaryContainer
            }
          ]}
        >ni</Text>
        <Text
          variant='bodyMedium'
          style={[
            {
              color: onSecondaryContainer
            }
          ]}
        >aiudfsgh</Text>
      </View>
    </TouchableRipple>
  )
}

export default function FormEntry () {
  return (
    <View>
      <List.Subheader>信息填报入口</List.Subheader>
      <EntryButtonGroup />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 12,
    margin: 12,
    borderRadius: 12,
    flex: 1,
    flexDirection: 'row'
  },
  entryButton: {
    flex: 1,
    padding: 16
  },
  entryButtonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
