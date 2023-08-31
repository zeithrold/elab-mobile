import { router } from 'expo-router'
import React from 'react'
import useSWR from 'swr'
import { StyleSheet, View } from 'react-native'
import { List, useTheme } from 'react-native-paper'
import { ApplyV1 } from 'lib/v1'
import { useAuth0 } from 'react-native-auth0'

interface ItemContent {
  title: string
  description: string
  routerRoute: any
}

const items: Record<string, ItemContent> = {
  ticket: {
    title: '基本信息填报',
    description: '填写姓名、学号等基本信息。',
    routerRoute: '/form/ticket'
  },
  text_form: {
    title: '表单填报',
    description: '填写一些问题的回答。',
    routerRoute: '/form/textform'
  },
  interview: {
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
      onPress={() => {
        router.push(item.routerRoute)
      }}
    />
  )
}

function ItemList ({ status }: { status: Record<string, boolean> }) {
  return (
    <>
      {
        Object.entries(items).map(([key, item]) => (
          <Item
            key={key}
            item={item}
            status={status[key]}
          />
        ))
      }
    </>
  )
}

export default function UserStatus () {
  const { getCredentials } = useAuth0()
  const [accessToken, setAccessToken] = React.useState('')
  getCredentials()
    .then((credential) => {
      if (!credential) return
      setAccessToken(credential.accessToken)
    })
    .catch(() => {})
  const applyApi = new ApplyV1(accessToken)
  const { data, isLoading, isError } = useSWR('/v1/apply/status', async () => await applyApi.getStatus())
  React.useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <View style={styles.container}>
      <List.Subheader>科中报名清单</List.Subheader>
      {
        isLoading
          ? null
          : <ItemList status={data} />
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
