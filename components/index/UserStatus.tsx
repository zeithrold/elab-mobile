import { useFocusEffect } from 'expo-router'
import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { List, useTheme } from 'react-native-paper'
import { type Status } from 'type'
import { home } from 'store'
import { useStatus } from 'lib/hooks'

interface ItemContent {
  title: string
  description: string
  routerRoute: any
}

const items: Record<string, ItemContent> = {
  ticket: {
    title: '基本信息填报',
    description: '填写姓名、学号等基本信息。',
    routerRoute: '/ticket'
  },
  textform: {
    title: '表单填报',
    description: '填写一些问题的回答。',
    routerRoute: '/textform'
  },
  room_selection: {
    title: '面试场次选择',
    description: '选择面试场次。',
    routerRoute: '/room'
  }
}

function ItemIcon (props: { status: boolean }) {
  const {
    colors: {
      primary,
      error
    }
  } = useTheme()
  return (
    <List.Icon
      {...props}
      icon={props.status ? 'check-circle' : 'close-circle'}
      color={
        props.status ? primary : error
      }
    />
  )
}

function Item ({ item, status }: { item: ItemContent, status: boolean }) {
  return (
    <List.Item
      title={item.title}
      description={item.description}
      left={props => <ItemIcon {...props} status={status} />}
    />
  )
}

function ItemList ({ status }: { status: Status }) {
  return (
    <>
      {
        Object.entries(items).map(([key, item]) => {
          return (
            <Item
              key={key}
              item={item}
              status={status[key]}
            />
          )
        })
      }
    </>
  )
}

export default function UserStatus () {
  const { data, isLoading, error, mutate } = useStatus()
  React.useEffect(() => {
    home.setUserLoading(isLoading)
  }, [isLoading, data])
  React.useEffect(() => {
    if (error) Alert.alert('错误', error?.message ?? '未知错误')
  }, [error])
  useFocusEffect(React.useCallback(() => {
    void mutate()
  }, []))
  return (
    <View style={styles.container}>
      {
        data === undefined
          ? null
          : <>
            <List.Subheader>科中报名清单</List.Subheader>
            <ItemList status={data} />
          </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // margin: 12
  },
  button: {
    // flex: 1,
    marginHorizontal: 4
  }
})
