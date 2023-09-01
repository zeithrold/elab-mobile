import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { router, useFocusEffect } from 'expo-router'
import { useStatus } from 'lib/hooks'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ActivityIndicator, List, Text, TouchableRipple, useTheme } from 'react-native-paper'

interface Entry {
  icon: any
  title: string
  route: any
}

const entryContent: Record<string, Entry> = {
  ticket: {
    icon: 'account',
    title: '基本信息',
    route: '/form/ticket'
  },
  textForm: {
    icon: 'file-question',
    title: '表单填报',
    route: '/form/textform/home'
  }
}

function EntryButtonGroup () {
  const { data: status, isLoading, mutate } = useStatus()
  useFocusEffect(React.useCallback(() => {
    void mutate()
  }, []))
  return (
    <View style={styles.container}>
      {
        isLoading || status === undefined
          ? <ActivityIndicator />
          : <>
            <EntryButton {...entryContent.ticket} status={status.ticket} />
            <EntryButton {...entryContent.textForm} status={status.textform} />
          </>
      }

    </View>
  )
}

function EntryButton ({
  icon,
  title,
  route,
  status
}: Entry & { status: boolean }) {
  const {
    colors: {
      onPrimaryContainer,
      onErrorContainer,
      primaryContainer,
      errorContainer
    }
  } = useTheme()
  const container = status ? primaryContainer : errorContainer
  const onContainer = status ? onPrimaryContainer : onErrorContainer
  return (
    <TouchableRipple
      style={[styles.entryButton, {
        backgroundColor: container
      }]}
      onPress={() => {
        router.push(route)
      }}
    >
      <View style={styles.entryButtonView}>
        <MaterialCommunityIcons
          name={icon}
          color={onContainer}
          size={80}
        />
        <Text
          variant='headlineSmall'
          style={[
            {
              color: onContainer,
              marginVertical: 8,
              fontWeight: 'bold'
            }
          ]}
        >
          {title}
        </Text>
        <Text
          variant='bodyMedium'
          style={[
            {
              color: onContainer
            }
          ]}
        >
          {status ? '已填报' : '未填报'}
        </Text>
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
    marginHorizontal: 12,
    borderRadius: 12,
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden'
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
